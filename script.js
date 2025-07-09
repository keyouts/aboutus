document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      src: "https://via.placeholder.com/500x300?text=Image+1",
      link: "https://example.com/page1"
    },
    {
      src: "https://via.placeholder.com/500x300?text=Image+2",
      link: "https://example.com/page2"
    },
    {
      src: "https://via.placeholder.com/500x300?text=Image+3",
      link: "https://example.com/page3"
    }
  ];

  let current = 0;
  const imgEl = document.getElementById("carousel-image");
  const linkEl = document.getElementById("carousel-link");

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    imgEl.src = slides[current].src;
    linkEl.href = slides[current].link;
  }

  function simulateLoading(button, callback) {
    button.disabled = true;
    setTimeout(() => {
      callback();
      button.disabled = false;
    }, 300);
  }

  function nextSlide() {
    const btn = document.querySelector(".nav.right");
    simulateLoading(btn, () => showSlide(current + 1));
  }

  function prevSlide() {
    const btn = document.querySelector(".nav.left");
    simulateLoading(btn, () => showSlide(current - 1));
  }

  document.querySelector(".nav.right").addEventListener("click", nextSlide);
  document.querySelector(".nav.left").addEventListener("click", prevSlide);

  showSlide(current);

  setInterval(() => {
    showSlide(current + 1);
  }, 4000);
});

