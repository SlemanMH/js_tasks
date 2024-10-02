async function getPizza(){
const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
const data = await response.json();
const pizza = data.recipes;

const result = pizza.map(function(pizza){

return `<div class="pizza">
<h2>${pizza.title}</h2>
<img src="${pizza.image_url}"/>
</div>`;



}).join('');
  
document.querySelector(".restaurants .row").innerHTML = result;
}
getPizza();  

  