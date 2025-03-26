document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        {
            title: "Kraven",
            genre: "Hành động",
            duration: "120 phút",
            image: "image/c025cd5ba8e5f7cb2cc592b95757ea8f3815a8702aaeb472c94d1ade5db4ad72.png"
        },
        {
            title: "Venom",
            genre: "Khoa học viễn tưởng",
            duration: "112 phút",
            image: "image/c025cd5ba8e5f7cb2cc592b95757ea8f3815a8702aaeb472c94d1ade5db4ad72.png"
        },
        {
            title: "Cô Dâu Hào Môn",
            genre: "Tình cảm, Tâm lý",
            duration: "95 phút",
            image: "image/c025cd5ba8e5f7cb2cc592b95757ea8f3815a8702aaeb472c94d1ade5db4ad72.png"
        },
        {
            title: "Gia Tài Của Ngoại",
            genre: "Gia đình, Hài hước",
            duration: "105 phút",
            image: "image/c025cd5ba8e5f7cb2cc592b95757ea8f3815a8702aaeb472c94d1ade5db4ad72.png"
        },
        {
            title: "Bear Man",
            genre: "Phiêu lưu, Hài",
            duration: "98 phút",
            image: "image/c025cd5ba8e5f7cb2cc592b95757ea8f3815a8702aaeb472c94d1ade5db4ad72.png"
        }
    ];

    const movieList = document.getElementById("movieList");

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>Thể loại: ${movie.genre}</p>
                <p>Thời lượng: ${movie.duration}</p>
            </div>
        `;

        movieList.appendChild(movieCard);
    });
});