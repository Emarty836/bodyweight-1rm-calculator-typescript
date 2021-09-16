function main() {
  const button1 = document.querySelector('#button1');
  button1.addEventListener('click', calculate);
}

/*function results(){
    var newadded = added;
    document.getElementById('#rep1').innerHTML = newadded;
    var newadded = added * 2;
    document.getElementById('#rep2').innerHTML = newadded;
    var newadded = added *3;
    document.getElementById('#rep3').innerHTML = newadded;
}*/


/*-------------------------------------------------depends on rep amount---------------------------------------*/
function calculate() {

  console.log(document.querySelector('#first').value);

  var bodyweight = parseFloat(document.querySelector('#first').value);
  var added = parseFloat(document.querySelector('#second').value);
  var reps = parseInt(document.querySelector('#third').value);
  var resulttext = document.querySelector('#new');
  var total = added + bodyweight;

if(reps<1||reps>20){
  resulttext.insertAdjacentText('afterend', 'Please enter a rep amount between 1-20.  Click on Reset!');
  return button1.removeEventListener('click', calculate);
}
console.log(bodyweight);
console.log(added);

  console.log(total);
  if (reps === 1) {
    var repmax = total;
  }
  if (reps === 2) {
    var repmax = (total / .97);
  }
  if (reps === 3) {
    var repmax = (total / .94);
  }
  if (reps === 4) {
    var repmax = (total / .92);
  }
  if (reps === 5) {
    var repmax = (total / .89);
  }
  if (reps === 6) {
    var repmax = (total / .86);
  }
  if (reps === 7) {
    var repmax = (total / .83);
  }
  if (reps === 8) {
    var repmax = (total / .81);
  }
  if (reps === 9) {
    var repmax = (total / .78);
  }
  if (reps === 10) {
    var repmax = (total / .75);
  }
  if (reps === 11) {
    var repmax = (total / .73);
  }
  if (reps === 12) {
    var repmax = (total / .71);
  }
  if (reps === 13) {
    var repmax = (total / .7);
  }
  if (reps === 14) {
    var repmax = (total / .68);
  }
  if (reps === 15) {
    var repmax = (total / .67);
  }
  if (reps === 16) {
    var repmax = (total / .65);
  }
  if (reps === 17) {
    var repmax = (total / .64);
  }
  if (reps === 18) {
    var repmax = (total / .63);
  }
  if (reps === 19) {
    var repmax = (total / .61);
  }
  if (reps === 20) {
    var repmax = (total / .6);
  }

  var addedweight = repmax - bodyweight;
  var ratio = (addedweight / bodyweight) * 100;

  /*results(repmax);*/
  /*----------------------------------------------------Added weight--------------------------------------------------------------------*/
  console.log(repmax);
  var finalAdded = repmax - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep1').innerHTML = "--"; }
  else {
    document.getElementById('#rep1').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .97) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep2').innerHTML = "--"; }
  else {
    document.getElementById('#rep2').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .94) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep3').innerHTML = "--"; }
  else {
    document.getElementById('#rep3').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .92) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep4').innerHTML = "--"; }
  else {
    document.getElementById('#rep4').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .89) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep5').innerHTML = "--"; }
  else {
    document.getElementById('#rep5').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .86) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep6').innerHTML = "--"; }
  else {
    document.getElementById('#rep6').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .83) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep7').innerHTML = "--"; }
  else {
    document.getElementById('#rep7').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .81) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep8').innerHTML = "--"; }
  else {
    document.getElementById('#rep8').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .78) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep9').innerHTML = "--"; }
  else {
    document.getElementById('#rep9').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .75) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep10').innerHTML = "--"; }
  else {
    document.getElementById('#rep10').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .73) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep11').innerHTML = "--"; }
  else {
    document.getElementById('#rep11').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .71) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep12').innerHTML = "--"; }
  else {
    document.getElementById('#rep12').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .70) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep13').innerHTML = "--"; }
  else {
    document.getElementById('#rep13').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .68) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep14').innerHTML = "--"; }
  else {
    document.getElementById('#rep14').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .67) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep15').innerHTML = "--"; }
  else {
    document.getElementById('#rep15').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .65) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep16').innerHTML = "--"; }
  else {
    document.getElementById('#rep16').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .64) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep17').innerHTML = "--"; }
  else {
    document.getElementById('#rep17').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .63) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep18').innerHTML = "--"; }
  else {
    document.getElementById('#rep18').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .61) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep19').innerHTML = "--"; }
  else {
    document.getElementById('#rep19').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .60) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep20').innerHTML = "--"; }
  else {
    document.getElementById('#rep20').innerHTML = finalAdded.toFixed(2);
  }

  /*------------------------------------------------------------------------quote-----------------------------------------------------*/
if (bodyweight === 0 || !bodyweight)
{resulttext.insertAdjacentText('afterend', 'Your 1RM for the non-bodyweight exercise is ' + repmax.toFixed(1) + ' lbs.');}
else{
  resulttext.insertAdjacentText('afterend', 'Your 1RM is ' + repmax.toFixed(1) + 'lbs or ' + addedweight.toFixed(1) + 'lbs added weight which is ' + ratio.toFixed(2) + '% of your bodyweight.');}
  button1.removeEventListener('click', calculate);
}

window.addEventListener('load', function () {
  main();
})
