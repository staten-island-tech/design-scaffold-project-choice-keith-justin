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
  duration: 1,
  y: "-100%",
  x: 2000,
  ease: "bounce",
  scrollTrigger: "#arch",
});

gsap.from("#featured", {
  duration: 1,
  delay: 1,
  x: 2000,
  scrollTrigger: "#food",
});
