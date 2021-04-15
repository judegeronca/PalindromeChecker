const btn = document.querySelector('#btnCheck');
const textBox = document.querySelector('#textBox');
const showResults = document.querySelector('#showResults');
const input = document.querySelector('input');



btn.addEventListener('click', ()=>{
    const textValue = textBox.value.toLowerCase().trim();
    const reversed = textValue.split('').reverse().join('');
    
    if(textValue === reversed && textValue !== ''){
        showResults.innerText = `${textBox.value} is a palindrome`
        textBox.value = '';
    }
    else{
        showResults.innerText = `${textBox.value} is not a palindrome`
        textBox.value = '';
    }
  


});



