document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
    const favCountSpan = document.getElementById("fav-count");
    const resetBtn = document.getElementById("reset-btn");
    let favCount = 0;

    // Cat images
    const catImages = [
        "/images/Cat 1.jpeg",
        "/images/Cat 2.jpeg",
        "/images/Cat 3.jpeg",
        "/images/Cat 4.jpeg",
        "/images/Cat 5.jpeg",
        "/images/Cat 6.jpeg",
        "/images/Cat 7.jpeg",
        "/images/Cat 8.jpeg",
    ];

    // Create and append cards for each cat image
    catImages.forEach((imageUrl, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        imgContainer.innerHTML = `
            <img src="${imageUrl}" alt="Cat ${index + 1}">
            <button class="favorite-btn" data-favorite="false">&#9825;</button>
        `;
        card.appendChild(imgContainer);

        const favoriteBtn = imgContainer.querySelector(".favorite-btn");
        favoriteBtn.style.fontSize = "30px";
        favoriteBtn.style.top = "30px";
        favoriteBtn.addEventListener("click", () => {
            const isFavorited = favoriteBtn.dataset.favorite === "true";
            if (isFavorited) {
                favoriteBtn.dataset.favorite = "false";
                favoriteBtn.innerHTML = "&#9825;";
                favoriteBtn.style.fontSize = "30px";
                favoriteBtn.style.top = "30px";
                favCount--;
            } else {
                favoriteBtn.dataset.favorite = "true";
                favoriteBtn.innerHTML = "&#9829;";
                favoriteBtn.style.fontSize = "50px";
                favoriteBtn.style.top = "22px";
                favCount++;
            }
            favCountSpan.textContent = favCount;
        });

        const infoContainer = document.createElement("div");
        infoContainer.classList.add("info");
        infoContainer.innerHTML = `
            <h2>Cat ${index + 1}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        `;
        card.appendChild(infoContainer);

        gallery.appendChild(card);
    });

     // Reset button functionality
     resetBtn.addEventListener("click", () => {
        const favoriteBtns = document.querySelectorAll(".favorite-btn");
        favoriteBtns.forEach(btn => {
            btn.dataset.favorite = "false";
            btn.innerHTML = "&#9825;";
        });
        favCount = 0;
        favCountSpan.textContent = favCount;
    });
});