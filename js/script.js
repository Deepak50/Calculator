let screen = document.getElementById('tb');
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        console.log("inside event listener");
        buttonText = e.target.innerText;
        if (buttonText == '=') {
            let exp = screen.value;
            screen.value = eval(exp);
        }
        else {
            screen.value += buttonText;
            console.log('Buttontext is', buttonText);
        }
    });
}