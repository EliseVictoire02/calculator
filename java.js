function set(op) {

    document.getElementById("display").value += op;

}

function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));

}

function asine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.asin(tempStore));

}

function acosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.acos(tempStore));

}

function fLog() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));

}

function fLogDeci() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log10(tempStore));

}

function atangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.atan(tempStore));

}

function tangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));

}

function cosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));

}

function sine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));

}

function expo() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.exp(tempStore));

}

function setOp() {
    alert("gf");
    //document.getElementById("display").value += op;
}

function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    //alert(result);
    Exp.value = result;
}


function clr() {
    document.getElementById("display").value = "";
}

function power() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.pow(tempStore,2));

}
