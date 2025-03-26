document.addEventListener("DOMContentLoaded", function () {
    const movieListContainer = document.getElementById("movie-list");

    if (!movieListContainer) {
        console.error("Không tìm thấy phần tử #movie-list!");
        return;
    }

    // Duyệt qua danh sách phim trong movies
    for (const key in movies) {
        if (movies.hasOwnProperty(key)) {
            const movie = movies[key];

            // Tạo thẻ div chứa phim
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie1");

            // Đổ nội dung HTML vào thẻ movie1
            movieElement.innerHTML = `
                <img src="${movie.background}" alt="${movie.title}">
                <div class="movie-overlay">
                    <div class="movie-buttons">
                        <button class="play-btn" onclick="redirectToDetails('${key}')">▶</button>
                        <button class="favorite-btn">♡</button>
                        <button class="info-btn" onclick="redirectToDetails('${key}')">ℹ</button>
                    </div>
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <p>Số tập: ${movie.episodes}</p>
                    <p class="movie-genre">Thể loại: ${movie.categories.join(", ")}</p>
                </div>
            `;

            // Thêm vào danh sách phim
            movieListContainer.appendChild(movieElement);
        }
    }
    console.log("Script.js đã tải thành công!");
});
