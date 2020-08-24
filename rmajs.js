


function switchGalaxy() {
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('rma3.jpg')";
  var x=document.getElementsByTagName('p');
  for(var i=0;i<x.length;i++)
  x[i].style.color='white';

  var t=document.getElementById('acialb1');
  t.style.color='white';
  var t=document.getElementById('acialb2');
  t.style.color='white';
  var t=document.getElementById('acialb3');
  t.style.color='white';
  var t=document.getElementById('acialb4');
  t.style.color='white';

  
  var z=document.getElementsByTagName('H1');
  for(var i=0;i<z.length;i++)
  z[i].style.color='white';

  var l=document.getElementsByTagName('li');
  for(var i=0;i<l.length;i++)
  l[i].style.color='white';

  var l1=document.getElementById('lista');
  var l2=l1.getElementsByTagName('li');
  for(var i=0;i<l2.length;i++)
  l2[i].style.color='white';
  var l3=document.getElementsByTagName('h2');
  l3[l3.length-2].style.color='white';

  var q=document.getElementsByTagName('h4');
  for(var i=0;i<q.length;i++)
  q[i].style.color='white';

  var l3=document.getElementsByTagName('h2');
  l3[l3.length-1].style.color='white';

  var q1=document.getElementById('quote');
  q1.style.color='purple';
  var q2=document.getElementById('quote2');
  q2.style.color='darkblue';

  var c1=document.getElementById('clasament');
  c1.style.color='white';
  var c2=document.getElementById('ulclasament').getElementsByTagName('li');
  for(var i=0;i<c2.length;i++)
  c2[i].style.color='white'

  

}

function switchGolden() {
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('gold.jpg')"; 
  var x=document.getElementsByTagName('p');
  for(var i=0;i<x.length;i++)
  x[i].style.color='black';

  var y=document.getElementsByTagName('a');
  for(var i=0;i<y.length;i++)
  y[i].style.color='black';

  var z=document.getElementsByTagName('H1');
  for(var i=0;i<z.length;i++)
  z[i].style.color='black';

  var q=document.getElementsByTagName('h4');
  for(var i=0;i<q.length;i++)
  q[i].style.color='black';

  var t1=document.getElementById('item1');
  t1.style.color='black';
  var t2=document.getElementById('item2');
  t2.style.color='black';

  var l1=document.getElementById('lista');
  var l2=l1.getElementsByTagName('li');
  for(var i=0;i<l2.length;i++)
  l2[i].style.color='black';
  var l3=document.getElementsByTagName('h2');
  l3[l3.length-2].style.color='black';

  var q1=document.getElementById("quote");
  q1.style.color="purple";
  var q2=document.getElementById("quote2");
  q2.style.color="darkblue";

  var c1=document.getElementById('clasament');
  c1.style.color='black';
  var c2=document.getElementById('ulclasament').getElementsByTagName('li');
  for(var i=0;i<c2.length;i++)
  c2[i].style.color='black'
}

///C.R.U.D
function creare(tag,text)
{
var elnou=document.createElement(tag);
var textnou=document.createTextNode(text);
elnou.appendChild(textnou);
return elnou;
}


function salut_utilizator(){

  var nume = prompt("Cum te numesti?");
  var titluinitial = document.title;
  document.title = "Salut, " + nume + "!"
  setTimeout(() => document.title = titluinitial, 2000);
  

}

function change_bgcolor(){
  culoare=document.getElementsByTagName('input')[0].value;
  document.body.style.backgroundColor='none';
  
  document.body.style.backgroundColor=String(culoare);
  if(document.body.style.backgroundColor!=String(culoare).toLowerCase())
  {
    alert("Culoare invalida!");
  }
  else 
  document.body.style.backgroundImage='none';

}


function ascunde_imaginile()
{
  var v=document.getElementsByTagName('img');
  but=document.getElementById('imgbut');

  if(but.value=="Ascunde imaginile"){
  for (var i=0;i<v.length;i++)
  v[i].style.display="none";
  but.innerText = 'Afiseaza imaginile';
  but.value='Afiseaza imaginile';

}
else
{
  for (var i=0;i<v.length;i++)
  v[i].style.display="initial";
  but.innerText='Ascunde imaginile';
  but.value='Ascunde imaginile';
}
}

function inverseaza_lista()
{
  var cl = document.getElementById("ulclasament");
var i = cl.childNodes.length;
while (i--)
  cl.appendChild(cl.childNodes[i]);
}