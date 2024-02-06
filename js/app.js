document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
    const favCountSpan = document.getElementById("fav-count");
    const resetBtn = document.getElementById("reset-btn");
    let favCount = 0;

    // Cat data with unique names, information, and picture links
    const catsData = [
        { name: "Whiskers", info: "Whiskers is a playful cat who loves chasing laser pointers.", image: "/images/Cat 1.jpeg" },
        { name: "Mittens", info: "Mittens enjoys lounging in the sun and getting belly rubs.", image: "/images/Cat 2.jpeg" },
        { name: "Felix", info: "Felix is an adventurous cat who enjoys climbing trees.", image: "/images/Cat 3.jpeg" },
        { name: "Luna", info: "Luna is a curious cat who loves exploring new places.", image: "/images/Cat 4.jpeg" },
        { name: "Tiger", info: "Tiger is a cuddly cat who enjoys snuggling with blankets.", image: "/images/Cat 5.jpeg" },
        { name: "Snowball", info: "Snowball is a mischievous cat who loves playing pranks on others.", image: "/images/Cat 6.jpeg" },
        { name: "Lady", info: "Tiger is a cuddly cat who enjoys snuggling with blankets.", image: "/images/Cat 7.jpeg" },
        { name: "Ramy", info: "Snowball is a mischievous cat who loves playing pranks on others.", image: "/images/Cat 8.jpeg" },
        // Add more cats as needed
    ];

    // Create and append cards for each cat
    catsData.forEach((cat, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        imgContainer.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}">
            <button class="favorite-btn" data-favorite="false">&#9825;</button>
        `;
        card.appendChild(imgContainer);

        const favoriteBtn = imgContainer.querySelector(".favorite-btn");
        favoriteBtn.style.fontSize = "30px";
        favoriteBtn.style.top = "25px";
        favoriteBtn.addEventListener("click", () => {
            const isFavorited = favoriteBtn.dataset.favorite === "true";
            if (isFavorited) {
                favoriteBtn.dataset.favorite = "false";
                favoriteBtn.innerHTML = "&#9825;";
                favoriteBtn.style.fontSize = "30px";
                favoriteBtn.style.top = "25px";
                favCount--;
            } else {
                favoriteBtn.dataset.favorite = "true";
                favoriteBtn.innerHTML = "&#9829;";
                favoriteBtn.style.fontSize = "45px";
                favoriteBtn.style.top = "20px";
                favCount++;
            }
            favCountSpan.textContent = favCount;
        });

        const infoContainer = document.createElement("div");
        infoContainer.classList.add("info");
        infoContainer.innerHTML = `
            <h2>${cat.name}</h2>
            <p>${cat.info}</p>
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
            favoriteBtn.style.fontSize = "30px";
        favoriteBtn.style.top = "25px";
        });
        favCount = 0;
        favCountSpan.dataset.count = favCount;
    });
});