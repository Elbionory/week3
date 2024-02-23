const space = document.querySelector("#spacing");
const blur = document.querySelector("#blur");
const color = document.querySelector("#color");
const div_img = document.querySelector(".img")
const span = document.querySelector("span")
space.addEventListener("input", () => {
    div_img.style.padding = `${space.value}px`;

})
blur.addEventListener("input", () => {
    div_img.style.filter = `blur(${blur.value}px)`;

})
color.addEventListener("input", () => {
    div_img.style.backgroundColor = `${color.value}`;
    span.style.color = `${color.value}`;
})
