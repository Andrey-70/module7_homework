// Создим прототип для проверки функции.
const objProto = {
  men: 3,
  children: 9,
  women: 7
};
// добавим протатип в объект.
const obj1 = Object.create(objProto);

obj1.a = 7;
obj1.b = 5;
obj1.c = 10;

function getKeysObj(obj){
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`)
}
}
};
// Получим собственные свойства и значения объекта.    
  getKeysObj(obj1);