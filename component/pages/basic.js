import { loadHeader } from '../header.js';
import { fetchPosts } from '../api/post/post.js';


const setPostList = (posts) => {
    const postListContainer = document.getElementById('post-list');
    postListContainer.innerHTML = ''; // 기존 내용 초기화
    
    posts.forEach(post => {
    // 게시물 전체 wrapper
    const postItem = document.createElement('div');
    postItem.classList.add('post-item');

    // 제목
    const title = document.createElement('h3');
    title.classList.add('post-title');
    title.textContent = post.title;

    // 작성자 & 작성일
    const meta = document.createElement('div');
    meta.classList.add('post-meta');

    const nickname = document.createElement('span');
    nickname.classList.add('post-nickname');
    nickname.textContent = post.nickname;

    const date = document.createElement('span');
    date.classList.add('post-date');
    const createdDate = new Date(post.createdAt).toLocaleString();
    date.textContent = createdDate;

    meta.appendChild(nickname);
    meta.appendChild(document.createTextNode(' · '));
    meta.appendChild(date);

    // 내용
    const content = document.createElement('p');
    content.classList.add('post-content');
    content.textContent = post.content;

    // 이미지(있을 경우만)
    if (post.image) {
      const image = document.createElement('img');
      image.classList.add('post-image');
      image.src = post.image;
      image.alt = `${post.title} 이미지`;
      postItem.appendChild(image);
    }

    // 📌 클릭 이벤트 추가: 게시물 상세 페이지로 이동
    postItem.addEventListener('click', () => {
      // 예시: /post/2
      window.location.href = `/post/${post.id}`;
    });

    // 게시물 조립
    postItem.appendChild(title);
    postItem.appendChild(meta);
    postItem.appendChild(content);

    // 컨테이너에 삽입
    postListContainer.appendChild(postItem);
  });
}

document.addEventListener('DOMContentLoaded', async () =>{
    //헤더 로딩
    loadHeader();

    // 게시물 리스트 채우기
    try{
        // 게시물 가져오는 api 호출
        const posts = await fetchPosts();

        //게시물 container에 채우는 함수 호출 : setPostList()
        document.getElementById('post-list').innerHTML = '<p>게시물 가져오기 성공</p>';
    
        setPostList(posts);
        
    }catch(err){
        console.error('게시물 로딩 중 오류 발생:', err);
        document.getElementById('post-list').innerHTML = '<p>게시물을 불러오는 중 오류가 발생했습니다.</p>';
    }


});