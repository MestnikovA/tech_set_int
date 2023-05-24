// zadanie 1 
console.log("ZADANIE 1")
const etherium = {
    usd: 2811,
    rub: 200612,
    eur: 2666
    }
function getRate(etherium, key, val){
    return etherium[key] * val
}
console.log("10 etherium costs: " + getRate(etherium, "usd", 10) + " dollars $")
console.log("10 etherium costs: " + getRate(etherium, "rub", 10) + " rubles ₽")
console.log("10 etherium costs: " + getRate(etherium, "eur", 10) + " euros €")
console.log("")

// ZADANIE 2
console.log("ZADANIE 2")
function getValues(a, b){
    a = a.toUpperCase()
    b = b.toUpperCase()
    const one = a
    const two = b
    const r = [...one, ...two]
    return r
}
console.log(getValues("JavaScript", "third"))

console.log("")

// ZADANIE 3
console.log("ZADANIE 3")
const info = {
    name: 'Aidyn',
    age: 20,
    city: "Yakutsk"
    }
function getInfo(a){
    const values = Object.values(a)
    return values
}
console.log(getInfo(info))
console.log("")

// ZADANIE 4
console.log("ZADANIE 4")
const obj1 = {
    id: 1,
    type: 'text',
    lenght: 20
}
const obj2 = {
    name: 'L',
    age: 21
}
function joinArrays(a, b){
    const newObject = {...a, ...b}
    return newObject
}
console.log(joinArrays(obj1, obj2))
console.log("")

// ZADANIE 5
console.log("ZADANIE 5")
class User3{
    constructor(Name, email) {
        this.Name = Name
        this.email = email
    }
    sayClass(){
        console.log("User name: " + this.Name + ", adress: " + this.email)
    }
}
let user = new User3("Aidyn", "menneesty@gmail.com")
user.sayClass()
console.log("")

// ZADANIE 6
console.log("ZADANIE 6")
class User{
    constructor(id, type){
        this.id = id
        this.type = type
    }
    getId(){
        console.log("#" + this.id)
    }
    isAdmin(){
        if(this.type == "Admin"){ 
            console.log("true")
        }else{
            console.log("false")
        }
    }
}
console.log("User1")
const user1 = new User(1, "Admin")
user1.getId() // "#1"
user1.isAdmin() // true
console.log("User2")
const user2 = new User(2, "JustUser")
user2.getId() // "#2"
user2.isAdmin() // false
console.log("")

// ZADANIE 7
console.log("ZADANIE 7")
class AreaOfCircle{
    constructor(radius){
        this.radius = radius
    }
    get radius(){
        return this._radius
    }
    set radius(value){
        this._radius = Number.parseFloat(value * value * 3.14)
    }
}
const area = new AreaOfCircle(2)
console.log(area.radius)
area.radius = 10
console.log(area.radius)
console.log("")

// ZADANIE 8
console.log("ZADANIE 8")
class Course{
    constructor(grade){
        this.grade = grade
    }
    /*getGrade(){
        if(){
            return true
        }else{
            return false
        }
    }*/
    getCertificate(){
        if(this.grade == 4 | this.grade == 5){
            return ("Выдать сертификат")
        }else{
            return ("Курс не пройден" )
        }
    }
}
const course1 = new Course(5)
console.log(course1.getCertificate()) // Выдать сертификат
const course2 = new Course(3)
console.log(course2.getCertificate()) // Курс не пройден