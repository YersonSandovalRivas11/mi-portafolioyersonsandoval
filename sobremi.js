document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".smoke-text");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textElement.classList.add("smoke-visible");
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(textElement);
});
