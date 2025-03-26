document.addEventListener("DOMContentLoaded", function () {
    // 🟢 Lấy tất cả thẻ phim có class "movie-display"
    const movieElements = document.querySelectorAll(".movie-display");

    movieElements.forEach((movieElement) => {
        const movieId = movieElement.getAttribute("data-series"); // Lấy ID phim từ data-series

        if (!movieId || !moviesData[movieId]) {
            console.error(`❌ Không tìm thấy dữ liệu cho phim có ID: ${movieId}`);
            return;
        }

        const selectedMovie = moviesData[movieId];

        // 🟢 Cập nhật nội dung phim vào HTML
        const titleElement = movieElement.querySelector(".movie-title");
        const categoriesElement = movieElement.querySelector(".movie-categories");
        const bgElement = movieElement.querySelector(".movie-bg");

        if (titleElement) titleElement.textContent = selectedMovie.title;
        if (categoriesElement) categoriesElement.textContent = selectedMovie.categories.join(", ");
        if (bgElement) {
            bgElement.style.backgroundImage = `url('${selectedMovie.background1}')`;
            bgElement.style.backgroundSize = "cover";
            bgElement.style.backgroundPosition = "center";
        }

        // 🟢 Thêm sự kiện khi click vào phim -> Mở trang movie-details.html
        movieElement.addEventListener("click", function () {
            window.location.href = `movie-details.html?series=${movieId}`;
        });
    });

    console.log("✅ Cập nhật thành công danh sách phim!");
});
