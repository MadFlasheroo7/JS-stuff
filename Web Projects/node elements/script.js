const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.9"
    },
    {
        name: "Complete Angular course",
        price: "6"
    },
    {
        name: "Complete MERN course",
        price: "66"
    },
    {
        name: "Complete C++ course",
        price: "2.6"
    },
    {
        name: "Complete python course",
        price: "free"
    },
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(course => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        listItem.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode(` $ ${course.price}`);
        span.appendChild(price);

        listItem.appendChild(span);
        ul.appendChild(listItem);
    });
}

// generateList();

window.addEventListener("load", generateList);

const btn = document.querySelector(".sort-btn");
btn.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
})

const sortBtn = document.querySelector(".btn-primary");
sortBtn.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateList();
})

// function generateBtn() {
//     const HtoLBtn = document.createElement("button")
//     HtoLBtn.add("btn btn-primary");
//     const text = document.createTextNode(` Sort H-L`);
//     text.appendChild(text);
// }
// generateBtn();