/*Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

// Объект для проверки.
const obj = {
    city: 'Tomsk',
    name: 'John',
    job: 'Software' 
};

function checkMatch(str, obj){
  return str in obj
};

console.log(checkMatch('job', obj));