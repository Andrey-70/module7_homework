/* Переписать консольное приложение из предыдущего юнита на классы. */

let powerUsageTotal = 0;

class Device {
    constructor(name, powerUsage, weight, voltage) {
        this.name = name;
        this.powerUsage = powerUsage;
        this.weight = weight;
        this.voltage = voltage;
    }

    //Функция, показывающая, включен ли прибор.
    getSwitched() {
        if (this.voltage === 'on') {
            console.log(`Устройство "${this.name}" включено в розетку`);
        } else {
          console.log(`Устройство "${this.name}" выключено из розетки`);
        }
    } 
}

//Бытовая техника
class Appliances extends Device {
    constructor(name, powerUsage, weight, voltage, size) {
        super(name, powerUsage, weight, voltage);
        this.size = size
    }
}

const fridge = new Appliances('холодильник', 350, 60, 'on', 'big');
fridge.volume = 250;
fridge.presentation = function() {
    console.log(`Характеристики устройства "${this.name}": энергопотребление ${this.powerUsage} Вт/ч; объем: ${this.volume} л`);
}
console.group(`${fridge.name}:`)
fridge.presentation();
fridge.getSwitched('on');
console.groupEnd();

class Electronic extends Device {
    constructor(name, powerUsage, weight, voltage, color, screen) {
        super(name, powerUsage, weight, voltage);
        this.color = color;
        this.screen = screen;
    }
}

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

const computer = new Electronic('компьютер', 60, 1, 'on', 'grey', 'IPS');
computer.CPU = 'Intel core i5';
computer.videoCard = 'intel IRIS';
computer.presentation = function() {
    console.log(`Характеристики устройства "${this.name}": экран ${this.screen}; процессор ${this.CPU}; видеокарта ${this.videoCard}`);
}
console.group(`${computer.name}:`)
computer.presentation();
computer.getSwitched();
console.groupEnd();

console.log(`Энергопотребление всех включенных в розетку приборов = ${powerUsageTotal} Вт/ч`);