let likeCount = 0;

function likeVideo() {
    likeCount++;
    document.getElementById("likeCount").innerText = `Likes: ${likeCount}`;
}