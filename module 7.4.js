/* Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
какими свойствами он обладает. */

let powerUsageDevice = 0;

function Device(name, powerUsage, weight, voltage) {
    this.name = name,
    this.powerUsage = powerUsage,
    this.weight = weight,
    this.voltage = voltage
}
//Функция, показывающая, включен ли прибор.
Device.prototype.getSwitched = function() {
    if (this.voltage === 'on') {
        console.log(`Устройство "${this.name}" включено в розетку`);
    } else {
        console.log(`Устройство "${this.name}" выключено из розетки`);
    }
}
//Бытовая техника
function Appliances(name, powerUsage, weight, voltage, size) {
    this.name = name,
    this.powerUsage = powerUsage,
    this.weight = weight,
    this.voltage = voltage,
    this.size = size
}
Appliances.prototype = new Device();

const fridge = new Appliances('холодильник', 350, 60, 'on', 'big');
fridge.volume = 250;
fridge.presentation = function() {
    console.log(`Характеристики устройства "${this.name}": энергопотребление ${this.powerUsage} Вт/ч; объем: ${this.volume} л`);
}
console.group(`${fridge.name}:`)
fridge.presentation();
fridge.getSwitched('on');
console.groupEnd();

function Electronic(name, powerUsage, weight, voltage, color, screen) {
    this.name = name,
    this.powerUsage = powerUsage,
    this.weight = weight,
    this.voltage = voltage,
    this.color = color,
    this.screen = screen
}
Electronic.prototype = new Device();

const mobile = new Electronic('мобильный телефон', 5, 0.186, 'off', 'black', 'OLED');
mobile.camera = 20;
mobile.memory = 128;
mobile.presentation = function() {
    console.log(`Характеристики устройства "${this.name}": экран ${this.screen}; камера: ${this.camera} Мп; объем памяти: ${this.memory} Гб`);
}
console.group(`${mobile.name}:`)
mobile.presentation();
mobile.getSwitched();
console.groupEnd();

const computer = new Electronic('ноутбук', 60, 1, 'on', 'grey', 'IPS');
computer.CPU = 'Intel core i7';
computer.videoCard = 'intel IRIS';
computer.presentation = function() {
    console.log(`Характеристики устройства "${this.name}": экран ${this.screen}; процессор ${this.CPU}; видеокарта ${this.videoCard}`);
}
console.group(`${computer.name}:`)
computer.presentation();
computer.getSwitched();
console.groupEnd();

console.log(`Энергопотребление всех включенных в розетку приборов = ${powerUsageDevice} Вт/ч`);