let imageChange = document.querySelector("img");
let count = 0;

imageChange.onclick = () => {
    if (count % 2 !== 0) {
        imageChange.setAttribute("src", "images/me.jpg")
    }
    else {
        imageChange.setAttribute("src", "images/my-cat.jpg")
    }
    count++;
};