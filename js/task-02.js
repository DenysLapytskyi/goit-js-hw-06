const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.getElementById('ingredients')

const elements = ingredients.map(option => {
  const liEl = document.createElement('li');
  liEl.textContent = option;
  liEl.classList.add('ingredients_item')
    console.log(liEl)
  return liEl

})


ulList.append(...elements)








