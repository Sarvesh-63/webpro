function add() {
    event.preventDefault()
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    console.log(a);
    console.log(b);
    console.log(typeof(a + b));
    document.getElementById("answer").value = a + b;
    document.getElementById("ans").style.display = "block";
}

function sub() {
    event.preventDefault()
    let a1 = parseFloat(document.getElementById("a1").value);
    let b1 = parseFloat(document.getElementById("b1").value);
    console.log(a1);
    console.log(b1);
    console.log(typeof(a1-b1));
    document.getElementById("answer1").value = a1-b1;
    document.getElementById("ans1").style.display = "block";
}