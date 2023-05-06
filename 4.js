class Devices {
    constructor(name, firm, power){
        this.name = name;
        this.swith = false;
        this.firm = firm;
        this.power = power;
    }


    // Метод для включения устройства
    turnOn = function(){
        this.swith = true
        return `${this.name} "${this.firm}" подключен к розетке`
    }


    // Метод для выключения устройства
    turnOf = function(swith){
        this.swith = false
        return `${this.name} "${this.firm}" отключен от розетки`
    }
}


// Класс "Увлажнитель воздуха". Наследуется от электрических устройств
class AirHumidifier extends Devices {
    constructor(firm, power, color){
        super("Увлажнитель воздуха", firm, power);
        this.weight = color;
        this.water = false;
    }


    // Функция заполнения водой
    waterFilling = function(){
        console.log(`${this.name} "${this.firm}" заправлен водой`)
        this.water = true
    }
}


// Класс "Посудомоечные машины". Наследуется от электрических устройств
class Dishwasher extends Devices {
    constructor(firm, power, waterСonsumption, dryingType){
        super("Посудомоечная машина", firm, power);
        this.waterСonsumption = waterСonsumption;
        this.dryingType=dryingType;
        this.case = false;
    }


    // Функция заполнения контейнера
    basketForDishes = function(){
        console.log(`${this.name} "${this.firm}" заполнена грязной посудой`)
        this.case = true
    }
}


const uvlajnitelDyson = new AirHumidifier("Dyson", "45 ВТ", "красный" )
const dishwasherDEXP  = new Dishwasher("DEXP", "610 ВТ", "5 л", "конденсационная")

console.log(uvlajnitelDyson.turnOn())
console.log(dishwasherDEXP.turnOn())
uvlajnitelDyson.waterFilling()
dishwasherDEXP.basketForDishes()