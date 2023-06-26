function Solve(val){
    var v = document.getElementById('res')
    v.value += val
}

function Result() {
    var v1 = document.getElementById('res').value
    var num2 = eval(v1)
    document.getElementById('res').value = num2
}

function Clear(){
    var c =  document.getElementById('res').value = ''
}

function Back(){
    var ba = document.getElementById('res')
    ba.value = ba.value.slice(0,-1)
}