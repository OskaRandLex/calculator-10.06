let inputText = document.querySelector('.text');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        calc(this.value);
    })
})

function calc(value) {
    // let set1 = inputText.textContent;
    // console.log(set1);
    if(value) {
        if(value !== '+' && value !== 'ev' && value !== 'C'){
            inputText.innerHTML += value;
           
        } 
        if(value === '+') {
            sum = inputText.textContent;
            console.log(sum);
            inputText.innerHTML = ' ';  
      
        } 
        if(value === 'ev') {
            sum2 = inputText.textContent;
            inputText.innerHTML = Number(sum) + Number(sum2);
            return
        } 
        if(value === 'C') {
            inputText.innerHTML = ' ';
            
        }
        return
    }
}