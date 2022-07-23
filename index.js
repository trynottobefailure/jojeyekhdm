document.getElementById("increase").onclick = function(){
    for( let count = 0 ; count <= 10 ; count += 1)
    document.getElementById("counter").innerHTML = count
}

const number = Math.floor(Math.random()* 10 + 1);
let guesses = 0;

document.getElementById("submitbtn").onclick = function(){
    
    let guess = document.getElementById("guessed").value;
    guesses += 1;

    if(guess == number){
        alert(`u got it in ur ${guesses} attempt`);
    }
    else if(guess < number){
        alert(`too small`);
    }
    else{
        alert("too large")
    }
    }

let x;
let y;
let z;
document.getElementById("roll").onclick = function(){

    x = Math.floor( Math.random() * 6) + 1;
    y = Math.floor( Math.random() * 6) + 1;
    z = Math.floor( Math.random() * 6) + 1;

    document.getElementById("x").innerHTML = x
    document.getElementById("y").innerHTML = y
    document.getElementById("z").innerHTML = z
}

document.getElementById("gay2").onclick = function(){
    alert("fuck of joje")
}

document.getElementById("yes").onclick = function(){
    alert("hmm.. razi am azat")
}

document.getElementById("gay").onclick = function(){
    alert("stop being a bitch")
}

document.getElementById("ofcourse").onclick = function(){
    alert("chera ?????????")
}