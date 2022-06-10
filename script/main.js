let inputText = document.querySelector('.text');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        calc(this.value);
    })
})

function calc(value) {
    console.log(value);
    let set = Number(inputText.value);
    if(value) {

        if(value != '+' && value != 'ev'){
            inputText.innerHTML += value;
            return;
        } 
        if(value = '+') {
            inputText.innerHTML = '+++';
            return;
        } 

        if(value = 'ev') {
            inputText.innerHTML = '==';
            return;
        }

        if(value = 'C') {
            inputText.innerHTML = ' ';
            return;
        }
    }
}