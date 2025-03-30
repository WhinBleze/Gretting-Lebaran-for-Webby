document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    document.querySelectorAll(".next-btn").forEach((button) => {
        button.addEventListener("click", function () {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        });
    });

    document.querySelectorAll(".prev-btn").forEach((button) => {
        button.addEventListener("click", function () {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        });
    });

    envelope.addEventListener("click", function () {
        envelope.classList.toggle("open");
    });

    showSlide(currentSlide);
});
