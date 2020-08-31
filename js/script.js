disp.value = 'deu'
function writeindisp(x) {
    const disp = document.getElementById('disp')
    if (x == "SUM") {
        disp.value += '+'
    }
    else if (x == "SUB") {
        disp.value += '-'
    }
    else if (x == "TIMES") {
        disp.value += '*'
    }
    else if (x == "DIVIDE") {
        disp.value += '/'
    }
    else {
        disp.value += x
    }
}
function reset(){
    disp.value =""
}
function calculate(){
    const disp = document.getElementById('disp')
    let eq = disp.value
    if(eq.indexOf('+')!= -1 ){
    let signalIndex = Number(eq.indexOf('+'))
    let neq = eq.split("+")
    disp.value =(Number(neq[0])+Number(neq[1]))
    }
    if(eq.indexOf('-')!= -1 ){
    let signalIndex = Number(eq.indexOf('-'))
    let neq = eq.split("-")
    disp.value =(Number(neq[0])-Number(neq[1]))
    }
    if(eq.indexOf('*')!= -1 ){
    let signalIndex = Number(eq.indexOf('*'))
    let neq = eq.split("*")
    disp.value =(Number(neq[0])*Number(neq[1]))
    }
    if(eq.indexOf('/')!= -1 ){
    let signalIndex = Number(eq.indexOf('/'))
    let neq = eq.split("/")
    disp.value =(Number(neq[0])/Number(neq[1]))
    }
}