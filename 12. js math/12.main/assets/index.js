function formatName(str) {
    let result = str.trim();
    if (result === "") {
        return "Аноним";
    }
    let arr = result.split(" ");
    arr = arr.map(
        (element) => element[0].toUpperCase() + element.slice(1).toLowerCase()
    );
    return arr.join(" ");
}

function showImage(src) {
    let image = document.createElement("img");
    image.src = src;
    const container = document.getElementById("chat__avatar");
    container.append(image);
}

function checkSpam(str) {
    let strToLower = str.toLowerCase();
    let pattern = /виагра/gi;
    return strToLower.replace(pattern, "***");
}

let FIO = document.querySelector("#FIO");
let chatFIO = document.querySelector("#chat__FIO");

let avatar = document.querySelector("#avatar");
let chatavatar = document.querySelector("#chat__avatar");

let txt = document.querySelector("#txt");
let chattxt = document.querySelector("#chattxt");

const button = document.querySelector("#submitbtn");

button.addEventListener("click", () => {
    let num1 = formatName(FIO.value);
    chatFIO.textContent = num1;
    FIO.value = null;
    showImage(avatar.value);
    avatar.value = null;
    let txt1 = checkSpam(txt.value);
    chattxt.textContent = txt1


});





