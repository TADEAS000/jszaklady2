const send = document.getElementById("send")
const input = document.getElementById("input")
const content = document.getElementById("content")

const changeColor = () => {
    const inputValue = input.value;
    content.innerHTML += `<p>${inputValue}</p>` ;
    content.style.backgroundColor = inputValue;
}

//kliknem na tlacitko, zavola se fce
send.onclick = () => {
    //ziskame hodnotu z inputu
    const inputValue = input.value;
    content.innerHTML += `<p>${inputValue}</p>` ;
    content.style.backgroundColor = inputValue;
}

content.onmouseover = () => {
    changeColor();
}