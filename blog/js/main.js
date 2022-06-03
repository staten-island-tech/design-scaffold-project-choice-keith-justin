import "../styles/style.css";

/* window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.getElementById("button2").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#arch" });
});
document.getElementById("button3").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: "#food" });
});
 */

gsap.from("#arch", {
  x: 2000,
  scrollTrigger: "#arch",
});

gsap.from("#food", {
  x: 2000,
  scrollTrigger: "#food",
});
