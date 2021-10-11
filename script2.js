const reset = document.querySelector('#reset');
let input1 = document.querySelector('#first');
let input2 = document.querySelector('#second');
let input3 = document.querySelector('#third');
const button1 = document.querySelector('#button1');


function valueChange(e){
  console.log('i changed');
  button1.addEventListener('click', calculate,{once:true});
}
input1.addEventListener('change',valueChange);
input2.addEventListener('change',valueChange);
input3.addEventListener('change',valueChange);


function main() {
  //const button1 = document.querySelector('#button1');
  button1.addEventListener('click', calculate,{once:true});
}

/*function results(){
    var newadded = added;
    document.getElementById('#rep1').innerHTML = newadded;
    var newadded = added * 2;
    document.getElementById('#rep2').innerHTML = newadded;
    var newadded = added *3;
    document.getElementById('#rep3').innerHTML = newadded;
}*/

function resetButton(){
  console.log('reset');
  document.querySelector('#first').value = 0;
  document.querySelector('#second').value = 0;
  document.querySelector('#third').value = 1;
  button1.addEventListener('click', calculate,{once:true});
}


/*-------------------------------------------------depends on rep amount---------------------------------------*/
function calculate() {

  console.log(document.querySelector('#first').value);

  var bodyweight = parseFloat(document.querySelector('#first').value);
  var added = parseFloat(document.querySelector('#second').value);
  var reps = parseInt(document.querySelector('#third').value);
//  var resulttext = document.querySelector('#new');
  var total = added + bodyweight;

if(reps<1||reps>20||isNaN(reps)){
  //resulttext.insertAdjacentText('afterend', 'Please enter a rep amount between 1-20.  Click on Reset!');
  //return button1.removeEventListener('click', calculate);
  var sample1 = document.createElement('p');
    sample1.textContent = `Please enter a rep amount between 1-20.`;
    reset.insertAdjacentElement('afterend', sample1);
    reset.addEventListener('click', () => {sample1.remove();
    console.log('hey');});
    input1.addEventListener('change', ()=> {
      button1.addEventListener('click', () => {
        sample1.remove();
      })
    });
    input2.addEventListener('change', ()=> {
      button1.addEventListener('click', () => {
        sample1.remove();
      })
    });
    input3.addEventListener('change', ()=> {
      button1.addEventListener('click', () => {
        sample1.remove();
      })
    });

}
if(isNaN(added)){
  console.log('blank');
  total = bodyweight;
}

if(isNaN(bodyweight)){
    console.log('moon');
    var bodyweight = 0;
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
{ var sample = document.createElement('p');
  var repmaxFixed = repmax.toFixed(1);
  sample.textContent = `Your 1RM for the non-bodyweight exercise is ${repmaxFixed} lbs.`;
  reset.insertAdjacentElement('afterend', sample);
  reset.addEventListener('click', () => {sample.remove();});
  input1.addEventListener('change', ()=> {
    button1.addEventListener('click', () => {
      sample.remove();
    })
  });
  input2.addEventListener('change', ()=> {
    button1.addEventListener('click', () => {
      sample.remove();
    })
  });
  input3.addEventListener('change', ()=> {
    button1.addEventListener('click', () => {
      sample.remove();
    })
  });

} ///end of if

else{
  var result = document.createElement('p');
  var repmaxFixed = repmax.toFixed(1);
  var weightFixed = addedweight.toFixed(1);
  var ratioFixed = ratio.toFixed(2);
  result.textContent = `Your 1RM is ${repmaxFixed} lbs or ${weightFixed} lbs added weight which is ${ratioFixed} % of your bodyweight.`;
  reset.insertAdjacentElement('afterend', result);
  reset.addEventListener('click', () => {result.remove();});
  input1.addEventListener('change', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
  input2.addEventListener('change', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
  input3.addEventListener('change', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
}  // end of else


}

window.addEventListener('load', function () {
  main();
})

reset.addEventListener('click',resetButton);
