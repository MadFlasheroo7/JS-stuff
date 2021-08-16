const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const cyan = document.querySelector(".cyan");

const center = document.querySelector(".center");

const bgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

// var color = bgColor(cyan);

// cyan.addEventListener("mouseleave", () => {
//     center.style.backgroundColor = color;
// })

const colorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.backgroundColor = color;
    });
};

colorChanger(red, bgColor(red));
colorChanger(cyan, bgColor(cyan));
colorChanger(orange, bgColor(orange));