import { loadHeader } from '../header.js';


const setPostList = (posts) => {
    const postListContainer = document.getElementById('post-list');
    postListContainer.innerHTML = ''; // 기존 내용 초기화
    
    posts.forEach(post => {
        // 게시물 아이템 생성

        //게시물 컨테이너에 아이템 삽입

    });
}

document.addEventListener('DOMContentLoaded', async () =>{
    //헤더 로딩
    loadHeader();

    // 게시물 리스트 채우기
    try{
        // 게시물 가져오는 api 호출
        /*
        const posts = await fetchPosts();
        */
        //게시물 container에 채우는 함수 호출 : setPostList()
        document.getElementById('post-list').innerHTML = '<p>게시물 가져오기 성공</p>';
        /*
        //setPostList(posts);
        */
    }catch(err){
        console.error('게시물 로딩 중 오류 발생:', err);
        document.getElementById('post-list').innerHTML = '<p>게시물을 불러오는 중 오류가 발생했습니다.</p>';
    }


});