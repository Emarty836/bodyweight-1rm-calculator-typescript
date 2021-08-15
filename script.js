const bodyweight = parseFloat(document.querySelector('#first').value);
const added = parseInt(document.querySelector('#second').value);
const reps  = parseInt(document.querySelector('#third').value);
const resulttext = document.querySelector('#new');


/*function results(){
    var newadded = added;
    document.getElementById('#rep1').innerHTML = newadded;
    var newadded = added * 2;
    document.getElementById('#rep2').innerHTML = newadded;
    var newadded = added *3;
    document.getElementById('#rep3').innerHTML = newadded;
}*/


/*-------------------------------------------------depends on rep amount---------------------------------------*/
function calculate(e){

  var total = added+bodyweight;
  if (reps === 1){
    var repmax = total;
  }
  if (reps === 2){
    var repmax = (total/.97);
  }
  if (reps === 3){
    var repmax = (total/.94);
  }
  if (reps === 4){
    var repmax = (total/.92);
  }
  if (reps === 5){
    var repmax = (total/.89);
  }
  if (reps === 6){
    var repmax = (total/.86);
  }
  if (reps === 7){
    var repmax = (total/.83);
  }
  if (reps === 8){
    var repmax = (total/.81);
  }
  if (reps === 9){
    var repmax = (total/.78);
  }
  if (reps === 10){
    var repmax = (total/.75);
  }
  if (reps === 11){
    var repmax = (total/.73);
  }
  if (reps === 12){
    var repmax = (total/.71);
  }
  if (reps === 13){
    var repmax = (total/.7);
  }
  if (reps === 14){
    var repmax = (total/.68);
  }
  if (reps === 15){
    var repmax = (total/.67);
  }
  if (reps === 16){
    var repmax = (total/.65);
  }
  if (reps === 17){
    var repmax = (total/.64);
  }
  if (reps === 18){
    var repmax = (total/.63);
  }
  if (reps === 19){
    var repmax = (total/.61);
  }
  if (reps === 20){
    var repmax = (total/.6);
  }

  var addedweight = repmax - bodyweight;
  var ratio = (addedweight/bodyweight)*100;

  /*results(repmax);*/
  /*----------------------------------------------------Added weight--------------------------------------------------------------------*/
  console.log(repmax);
  var finalAdded = repmax-bodyweight;
  if (finalAdded <0){document.getElementById('#rep1').innerHTML = "--";}
  else{
  document.getElementById('#rep1').innerHTML = finalAdded;}
  var finalAdded = (repmax*.97)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep2').innerHTML = "--";}
  else{
  document.getElementById('#rep2').innerHTML = finalAdded;}
  var finalAdded = (repmax*.94)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep3').innerHTML = "--";}
  else{
  document.getElementById('#rep3').innerHTML = finalAdded;}
  var finalAdded = (repmax*.92)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep4').innerHTML = "--";}
  else{
  document.getElementById('#rep4').innerHTML = finalAdded;}
  var finalAdded = (repmax*.89)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep5').innerHTML = "--";}
  else{
  document.getElementById('#rep5').innerHTML = finalAdded;}
  var finalAdded = (repmax*.86)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep6').innerHTML = "--";}
  else{
  document.getElementById('#rep6').innerHTML = finalAdded;}
  var finalAdded = (repmax*.83)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep7').innerHTML = "--";}
  else{
  document.getElementById('#rep7').innerHTML = finalAdded;}
  var finalAdded = (repmax*.81)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep8').innerHTML = "--";}
  else{
  document.getElementById('#rep8').innerHTML = finalAdded;}
  var finalAdded = (repmax*.78)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep9').innerHTML = "--";}
  else{
  document.getElementById('#rep9').innerHTML = finalAdded;}
  var finalAdded = (repmax*.75)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep10').innerHTML = "--";}
  else{
  document.getElementById('#rep10').innerHTML = finalAdded;}
  var finalAdded = (repmax*.73)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep11').innerHTML = "--";}
  else{
  document.getElementById('#rep11').innerHTML = finalAdded;}
  var finalAdded = (repmax*.71)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep12').innerHTML = "--";}
  else{
  document.getElementById('#rep12').innerHTML = finalAdded;}
  var finalAdded = (repmax*.70)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep13').innerHTML = "--";}
  else{
  document.getElementById('#rep13').innerHTML = finalAdded;}
  var finalAdded = (repmax*.68)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep14').innerHTML = "--";}
  else{
  document.getElementById('#rep14').innerHTML = finalAdded;}
  var finalAdded = (repmax*.67)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep15').innerHTML = "--";}
  else{
  document.getElementById('#rep15').innerHTML = finalAdded;}
  var finalAdded = (repmax*.65)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep16').innerHTML = "--";}
  else{
  document.getElementById('#rep16').innerHTML = finalAdded;}
  var finalAdded = (repmax*.64)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep17').innerHTML = "--";}
  else{
  document.getElementById('#rep17').innerHTML = finalAdded;}
  var finalAdded = (repmax*.63)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep18').innerHTML = "--";}
  else{
  document.getElementById('#rep18').innerHTML = finalAdded;}
  var finalAdded = (repmax*.61)-bodyweight;
  if (finalAdded <0){document.getElementById('#rep19').innerHTML = "--";}
  else{
  document.getElementById('#rep19').innerHTML = finalAdded;}
  var finalAdded = (repmax*.60)-bodyweight;
if (finalAdded < 0){document.getElementById('#rep20').innerHTML = "--";}
else{
  document.getElementById('#rep20').innerHTML = finalAdded;
}

/*------------------------------------------------------------------------quote-----------------------------------------------------*/

  resulttext.insertAdjacentText('afterend','Your 1RM is ' + repmax + 'lbs or ' + addedweight + 'lbs added weight which is ' + ratio + '% of bodyweight.');
}



const button1 = document.querySelector('#new');
button1.addEventListener('click', calculate());
