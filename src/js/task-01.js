
const itemEl = document.querySelectorAll('.item');
console.log("Number of categories:" + " " + itemEl.length);



const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};
