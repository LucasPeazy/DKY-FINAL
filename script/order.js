const orderElement = document.querySelector('.order_id')

const orderElementContent = orderElement.innerHTML;


function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
console.log(orderElementContent);
console.log(getRandomInRange(10, 20));

orderElement.innerHTML = getRandomInRange(10000,99999);


