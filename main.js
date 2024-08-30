document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById("menu-icon");
    const slideoutMenu = document.getElementById("slideout-menu");
    const searchIcon = document.getElementById("search-icon");
    const searchBox = document.getElementById("searchbox");

    searchIcon.addEventListener('click', function () {
        if (searchBox.style.top === '72px') {
            searchBox.style.top = '24px';
            searchBox.style.pointerEvents = 'none';
        } else {
            searchBox.style.top = '72px';
            searchBox.style.pointerEvents = 'auto';
        }
    });

    menuIcon.addEventListener('click', function () {
        if (slideoutMenu.style.opacity === "1") {
            slideoutMenu.style.opacity = '0';
            slideoutMenu.style.pointerEvents = 'none';
        } else {
            slideoutMenu.style.opacity = '1';
            slideoutMenu.style.pointerEvents = 'auto';
        }
    });

    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    showSlides();

    document.addEventListener("DOMContentLoaded", function() {
        const bubbleCount = 50; // Adjust the number of bubbles as needed
        const banner = document.getElementById("banner");

        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement("div");
            bubble.className = "bubble";

            const size = Math.random() * 60 + 20; // Random size between 20px and 80px
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
            bubble.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random animation duration between 5s and 15s

            banner.appendChild(bubble);
        }
    });
});
