//게시물 리스트
export const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다.');
    }
    const data = await response.json();
    return data;
}

