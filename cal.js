 input = "";
 boll = false;

function update() {
    document.getElementById("page").innerHTML = input === "" ? "0" : input;
}
function number(n) {
    if (boll) {
        input = "";
        boll = false;
    }
    input += n;
    update();
}
function clearr() {
    input = "";
    update();
}
function back() {
    input = input.slice(0, -1);
    update();
}
function op(o) {
    if (o === "^") { 
        base = parseFloat(input);
        input = "";
          powerMode = true;
           update(); return;
         }
    if (o === "x²") {
        if (input !== "") {
            input = String(Math.pow(parseFloat(input), 2));
            update();
        }
        return;
    }

    if (o === "x³") {
        if (input !== "") {
            input = String(Math.pow(parseFloat(input), 3));
            update();
        }
        return;
    }
    if (o === "%") {
        if (input !== "") {
            input = String(parseFloat(input) / 100);
            update();
        }
        return;
    }
    if (boll) boll = false;

     last = input[input.length - 1];
    if ("+-*/".includes(last)) {
        input = input.slice(0, -1);
    }

    input += o;
    update();
}

function equal() {
    try {
        let safe = input
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

            input = String(eval(safe));
        boll = true;
        update();
    } catch {
        input = "Error";
        update();
        boll = true;
    }
    if (powerMode) 
        input = String(Math.pow(base, parseFloat(input))); 
        powerMode = false; update(); return; 
    

}

function mabna() {
    if (input !== "") {
         k = prompt("مبنا را انتخاب کنید: 2، 8 ، 10");
        if (k === "2" || k === "8" || k === "10") {
            input = parseInt(input, 10).toString(parseInt(k, 10));
            update();
        } else 
            alert("مبنای معتبر نیست");
        
    }
}
function pi() {
    input = "3.14";  
    update();
}
function sin() {
    if (input !== "") 
        input = String(Math.sin(parseFloat(input)));
        update();
    
}
function tan() {
    if (input !== "") {
        input = String(Math.tan(parseFloat(input)));
        update();
    }
}
function cos() {
    if (input !== "") {
        input = String(Math.cos(parseFloat(input)));
        update();
    }
}

function sqrt() {
    if (input !== "") 
        input = String(Math.sqrt(parseFloat(input)));
        update();
    
}
function log() {
    if (input !== "") {
        input = String(Math.log(parseFloat(input)));
        update();
    }
}




