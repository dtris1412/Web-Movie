document.addEventListener("DOMContentLoaded", function () {
    // 🟢 Lấy ID phim từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const seriesId = urlParams.get("series");

    if (!seriesId || !moviesData[seriesId]) {
        console.error("❌ Không tìm thấy dữ liệu phim!");
        return;
    }

    const movie = moviesData[seriesId];

    // 🟢 Cập nhật background phim
    const backgroundElement = document.querySelector(".movie-background");
    if (backgroundElement) {
        backgroundElement.style.backgroundImage = `url('${movie.background}')`;
        backgroundElement.style.backgroundSize = "cover";
        backgroundElement.style.backgroundPosition = "center";
    }

    // 🟢 Cập nhật tiêu đề & mô tả phim
    document.querySelector(".movie-title").textContent = movie.title;
    document.querySelector(".movie-description").textContent = movie.description;

    // 🟢 Hiển thị danh sách tập phim
    const episodesList = document.querySelector(".episodes-list");
    episodesList.innerHTML = ""; // Xóa nội dung cũ trước khi cập nhật mới

    movie.episodes.forEach((episode) => {
        const episodeDiv = document.createElement("div");
        episodeDiv.classList.add("episode");

        episodeDiv.innerHTML = `
            <img src="${episode.img}" alt="${episode.title}">
            <h3>${episode.title}</h3>
            <p>${episode.desc}</p>
            <span>${episode.duration}</span>
        `;

        episodesList.appendChild(episodeDiv);
    });

    console.log("✅ Cập nhật chi tiết phim thành công!");
});
