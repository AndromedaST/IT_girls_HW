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
    let newstr = str.replace(/виагра|ххх|порно|viagra/gi, "***");
    return newstr[0].toUpperCase() + newstr.slice(1).toLowerCase();

}

function createContent (content) {
const p = document.createElement ('p');
p.textContent = content
}


const FIO = document.querySelector("#FIO");
const chatFIO = document.querySelector("#chat__FIO");

const avatar = document.querySelector("#avatar");
const chatavatar = document.querySelector("#chat__avatar");

const txt = document.querySelector("#txt");
const chattxt = document.querySelector("#chattxt");

const button = document.querySelector("#submitbtn");
const formUser = document.getElementById('form')

formUser.addEventListener("submit", (event) => {
    event.preventDefault();

    

    chatFIO.textContent = formatName(FIO.value);

    showImage(avatar.value);

    chattxt.textContent = checkSpam(txt.value);

    console.log(FIO.value);
    formUser.reset()
});





