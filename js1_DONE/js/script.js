
const res1 = document.querySelector('#res1')
const res2 = document.querySelector('#res2')
const res3 = document.querySelector('#res3')
const res4 = document.querySelector('#res4')
const res5 = document.querySelector('#res5')
const res6 = document.querySelector('#res6')
const res7 = document.querySelector('#res7')
const res8 = document.querySelector('#res8')
const res9 = document.querySelector('#res9')
const res10 = document.querySelector('#res10')

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')
const btn8 = document.querySelector('#btn8')
const btn9 = document.querySelector('#btn9')
const btn10 = document.querySelector('#btn10')

const get11 = document.querySelector('#get11')
const get12= document.querySelector('#get12')
const get2 = document.querySelector('#get2')
const get3 = document.querySelector('#get3')
const get4 = document.querySelector('#get4')
const get51 = document.querySelector('#get51')
const get52 = document.querySelector('#get52')
const get6 = document.querySelector('#get6')
const get7 = document.querySelector('#get7')
const get81 = document.querySelector('#get81')
const get82 = document.querySelector('#get82')
const get9 = document.querySelector('#get9')
const get10 = document.querySelector('#get10')

function multiply(a, b) {
    return a*b;
}
function myName(a) {
    return a.toUpperCase();
}
function getLastLetter(a) {
    return a[a.length - 1];
}
function notFirstLetter(a) {
    return a.substring(1,a.length);
}
function getName(a, b) {
    return a + " " + b;
}
function getStroka(a) {
	return a[0] + a[1] + a[2] + a[3] + a[4];
}
function heyEverybody(a) {
	return `Hello, ${a}` ;
}
function getName2(a, b) {
	return `${a}` + " " + `${b}` ;
}
function getNormalize(a) {
	let low = a.toLowerCase();
	
	return a[0].toUpperCase() + notFirstLetter(low);
}

btn1.onclick = function(){
    res1.textContent = multiply(get11.value, get12.value)
}
btn2.onclick = function(){
    res2.textContent = myName(get2.value)
}
btn3.onclick = function(){
    res3.textContent = getLastLetter(get3.value)
}
btn4.onclick = function(){
    res4.textContent = notFirstLetter(get4.value)
}
btn5.onclick = function(){
    res5.textContent = getName(get51.value, get52.value)
}
btn6.onclick = function(){
    res6.textContent = getStroka(get6.value)
}
btn7.onclick = function(){
    res7.textContent = heyEverybody(get7.value)
}
btn8.onclick = function(){
    res8.textContent = getName2(get81.value, get82.value)
}
btn9.onclick = function(){
    res9.textContent = getNormalize(get9.value)
}