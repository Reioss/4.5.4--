// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах.

// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.

// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.



// Общие требования:
//     Имена функций, свойств и методов должны быть информативными. 

//     Соблюдать best practices:
//          использование camelCase нотации для переменных и методов,
//          PascalCase для названия функций-конструкторов и классов; 

//          информативные имена (а не a, b); +

//          четкая связь между классом и его экземплярами
//          (класс описывает множество, а экземпляр конкретную реализацию); 

//          использование синтаксиса ES6 (кроме функции-конструкторов) и т. д. 

function OpenClose() {
    this.socketOn = function () {
        return true
    }
    this.socketOff = function () {
        return false
    }
}

function Teh(name, serialNr, socketCondition, compute) {
    this.name = name
    this.serialNr = serialNr
    this.socketCondition = socketCondition
    this.compute = function () {
        if (socketCondition) {
            return compute * (12 * 2) / 1000
        } else {
            return "Not plugged in!"
        }

    }
}

const action = new OpenClose()

const computer = new Teh("SAMSUNG", "O28347T", action.socketOn(), 100)
const TV = new Teh("APPLE", "I8W34765TB", action.socketOff(), 4)

console.log(computer.name, computer.serialNr, computer.compute())
console.log(TV.name, TV.serialNr, TV.compute())