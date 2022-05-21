// Функция создает пустой объект.
function emptyObj(){
  const obj = Object.create(null);
  return obj
};

console.log(emptyObj());