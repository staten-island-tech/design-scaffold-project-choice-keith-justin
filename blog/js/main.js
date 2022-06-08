import "../styles/style.css";

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

// document.getElementById("button2").addEventListener("click", function () {
//   gsap.to(window, { duration: 1, scrollTo: "#arch" });
// });
// document.getElementById("button3").addEventListener("click", function () {
//   gsap.to(window, { duration: 1, scrollTo: "#food" });
// });

gsap.from(".top", {
  duration: 2,
  y: "-100%",
  x: 2000,
  ease: "bounce",
});

gsap.from("#featured", {
  duration: 1,
  delay: 1,
  x: 2000,
});

gsap.from("#arch", {
  duration: 1,
  delay: 2,
  x: "-100vw",
  ease: "power2.in",
});

gsap.from(".content", {
  duration: 1,
  delay: 2,
  x: "-100%",
  ease: "power",
});

gsap.from("#food", {
  duration: 1,
  delay: 1,
  x: "-100vw",
  ease: "power2.in",
});

gsap.from(".food-content", {
  duration: 1,
  delay: 1,
  x: "-100vw",
  ease: "power2.in",
});

gsap.from(".lower", {
  duration: 1,
  delay: 3,
  ease: "elastic",
});
