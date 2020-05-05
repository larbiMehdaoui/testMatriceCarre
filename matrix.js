

//recuperer le valeur des parameètre envoyer en url
 var parameters = location.search.substring(1).split("&");
 var arryLength= parameters[0].split('=')[1]


//generer la table  seulon le nombre de cases entré dan la page index.html
function generate_table() {

    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    for (var i = 0; i < arryLength; i++) {

      var row = document.createElement("tr");
   
      for (var j = 0; j < arryLength; j++) {
       
        var btn=document.createElement('button')
        var cell = document.createElement("td");
        btn.id="cell"+i+"A"+j
        var cellText = document.createTextNode("cell in row "+i+", column "+j);
        btn.appendChild(cellText)
        btn.style.backgroundColor='white'
        cell.appendChild(btn);
        row.appendChild(cell);
      }
   
      tblBody.appendChild(row);
    }
   
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");

    affichei_interval();
  }
  var intervalID 
  var j;
  var btnArray=[];
  async  function affichei_interval(){
      
  
  for (let i = 0; i < arryLength; i++) {
    
    for (let j = 0; j < arryLength; j++) {
      btnArray.push('cell'+i+'A'+j);
      
    }
  }


  clignotante();
 
}

    
   



function promiseApresXSec(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, x);
  });
}


async function clignotante() {

  var options = {
    iterations: Infinity,
    iterationStart: 0,
    delay: 0,
    endDelay: 0,
    duration: 300,
    fill: 'forwards',
    easing: 'ease-out',
    }
    
    var keyframes = [
    { transform: 'translateY(-1000px) scaleY(2.5) scaleX(.2)', transformOrigin: '50% 0', filter: 'blur(40px)', opacity: 0 },
    { transform: 'translateY(0) scaleY(1) scaleX(1)',
    transformOrigin: '50% 50%',
     filter: 'blur(0)',
     opacity: 1 }
    ]
    
  for (let i = 0; i < arryLength; i++) {
    var randomColor=genererColeur();
  

   for (let j = 0; j < arryLength; j++) {
      await promiseApresXSec(500);
var cell="cell"+i+"A"+j
var btn=document.getElementById(cell)
console.log(btn.id)

btn.style.backgroundColor=randomColor;
 btn.animate(keyframes, options) 
/* btn.classList.add('newButton'); */


await promiseApresXSec(500);


    }
  }

  
  location.reload()
  await promiseApresXSec(5000);

}


//genérer une couleur 

function genererColeur() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

