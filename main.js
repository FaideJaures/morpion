let player_1;
let player_2;

let move_1 = [];
let move_2 = [];

let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");
let E = document.getElementById("E");
let F = document.getElementById("F");
let G = document.getElementById("G");
let H = document.getElementById("H");
let I = document.getElementById("I"); 

let tour = true;
let tour_text = document.getElementById("tour");

let keys = document.getElementById("keys");
let btn = keys.getElementsByTagName("button");

for(let i = 0; i < btn.length; i++){

  btn[i].addEventListener("click", ()=>{
    if(tour){

      let img = document.createElement("img");
      img.src = "circle.svg";
      btn[i].appendChild(img);

      btn[i].disabled = true;
      tour = false;
      tour_text.innerHTML = "C'est au joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">";
      move_1.push(btn[i].ariaValueText);
      
      let player = 1;

      if(move_1.length > 2){
         getTouche_1(move_1, player);
      }
    }
    else{

      let img = document.createElement("img");
      img.src = "circle_2.svg";
      btn[i].appendChild(img);

      btn[i].disabled = true;
      tour = true;
      tour_text.innerHTML = "C'est au joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">";
      move_2.push(btn[i].ariaValueText);
      
      let player = 2;
      
      if(move_2.length > 2){
         getTouche_2(move_2, player);  
      }
    }

})

}

function getTouche_1(X, player){
  if( X.includes("A") && X.includes("B") && X.includes("C") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    A.style.backgroundColor = "aqua";
    B.style.backgroundColor = "aqua";
    C.style.backgroundColor = "aqua";
  }
  else if( X.includes("D") && X.includes("E") && X.includes("F") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    D.style.backgroundColor = "aqua";
    E.style.backgroundColor = "aqua";
    F.style.backgroundColor = "aqua";
  }
  else if( X.includes("G") && X.includes("H") && X.includes("I") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    G.style.backgroundColor = "aqua";
    H.style.backgroundColor = "aqua";
    I.style.backgroundColor = "aqua";
  }
  else if( X.includes("A") && X.includes("D") && X.includes("G") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    A.style.backgroundColor = "aqua";
    D.style.backgroundColor = "aqua";
    G.style.backgroundColor = "aqua";
  }
  else if( X.includes("B") && X.includes("E") && X.includes("H") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    B.style.backgroundColor = "aqua";
    E.style.backgroundColor = "aqua";
    H.style.backgroundColor = "aqua";
  }
  else if( X.includes("C") && X.includes("F") && X.includes("I") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    C.style.backgroundColor = "aqua";
    F.style.backgroundColor = "aqua";
    I.style.backgroundColor = "aqua";
  }
  else if( X.includes("A") && X.includes("E") && X.includes("I") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    A.style.backgroundColor = "aqua";
    E.style.backgroundColor = "aqua";
    I.style.backgroundColor = "aqua";
  }
  else if( X.includes("C") && X.includes("E") && X.includes("G") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    C.style.backgroundColor = "aqua";
    E.style.backgroundColor = "aqua";
    G.style.backgroundColor = "aqua";
  }
  else if(X.length > 4){
    tour_text.innerHTML = "Match nul";
    for(let i = 0; i < btn.length; i++){
      btn[i].style.backgroundColor = "red";
    }
  }
}


function getTouche_2(X, player){
  if( X.includes("A") && X.includes("B") && X.includes("C") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    A.style.backgroundColor = "aquamarine";
    B.style.backgroundColor = "aquamarine";
    C.style.backgroundColor = "aquamarine";
  }
  else if( X.includes("D") && X.includes("E") && X.includes("F") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    D.style.backgroundColor = "aquamarine";
    E.style.backgroundColor = "aquamarine";
    F.style.backgroundColor = "aquamarine";
  }
  else if( X.includes("G") && X.includes("H") && X.includes("I") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    G.style.backgroundColor = "aquamarine";
    H.style.backgroundColor = "aquamarine";
    I.style.backgroundColor = "aquamarine";
  }
  else if( X.includes("A") && X.includes("D") && X.includes("G") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    A.style.backgroundColor = "aquamarine";
    D.style.backgroundColor = "aquamarine";
    G.style.backgroundColor = "aquamarine";
  }
  else if( X.includes("B") && X.includes("E") && X.includes("H") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    B.style.backgroundColor = "aquamarine";
    E.style.backgroundColor = "aquamarine";
    H.style.backgroundColor = "aquamarine";
  }
  else if( X.includes("C") && X.includes("F") && X.includes("I") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    C.style.backgroundColor = "aquamarine";
    F.style.backgroundColor = "aquamarine";
    I.style.backgroundColor = "aquamarine";
  }
  else if( X.includes("A") && X.includes("E") && X.includes("I") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    A.style.backgroundColor = "aquamarine";
    E.style.backgroundColor = "aquamarine";
    I.style.backgroundColor = "aquamarine";
  }
  else if( X.includes("C") && X.includes("E") && X.includes("G") ){
    tour_text.innerHTML = "Le joueur " + "<img src=\"circle_2.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">" + " à gagné";
    win();
    C.style.backgroundColor = "aquamarine";
    E.style.backgroundColor = "aquamarine";
    G.style.backgroundColor = "aquamarine";
  }
}

function win(){
  for(let i = 0; i < btn.length; i++){
    btn[i].disabled = "true";
  }
}


function reset(){
  let reset = document.getElementById("reset");

  reset.addEventListener("click", ()=>{
    move_1.splice(0, move_1.length);
    move_2.splice(0, move_2.length);

    tour_text.innerHTML = "Le premier joueur est " + "<img src=\"circle.svg\" style =\"filter: invert(1)\" width=\"20px\" height=\"20px\">";

    for(let i = 0; i < btn.length; i++){
      btn[i].innerHTML = "";
      btn[i].disabled = false;
      btn[i].style.backgroundColor = "white";
    }
  })

  
}

reset();