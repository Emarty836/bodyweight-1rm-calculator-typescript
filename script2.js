const reset = document.querySelector('#reset');
let input1 = document.querySelector('#first');
let input2 = document.querySelector('#second');
let input3 = document.querySelector('#third');
const button1 = document.querySelector('#button1');
var adding1 = document.querySelector('#add1');
var adding2 = document.querySelector('#add2');
var adding3 = document.querySelector('#add3');
var minus1 = document.querySelector('#minus1');
var minus2 = document.querySelector('#minus2');
var minus3 = document.querySelector('#minus3');
const sample = document.querySelector('#inputBox');
const tab = document.querySelector('.tab');

var activate = false;
var scrollMark = window.scrollY;

function scrollData(x){
  var scrollMark = window.scrollY;
  //var x = window.matchMedia('(max-width: 359px)');
  console.log(activate);
  //console.log(scrollMark);
  
  if (scrollMark < 225){
    var activate = false;
    sample.classList.add('sample');
    sample.classList.remove('sample2');
    tab.style.display = 'none';
    tab.style.borderTop = "none";
    tab.style.position = 'fixed';
        tab.style.top = '0';
    //window.removeEventListener('resize', checkMediaQuery);
  }
  else if (scrollMark > 674){
    
    tab.style.display = 'block';
  
  

    tab.addEventListener('click', () => {
      activate = !activate;
      console.log(activate);
      if (activate){
        
        console.log('OPEN')
          sample.classList.remove('sample');
          sample.classList.add('sample2');
          tab.style.position = 'absolute';
          tab.style.top = '100%';
          tab.style.borderTop = "2px solid black";
          
          
          //checkMediaQuery();
      
          /*if (x.matches){
            tab.style.transform = 'translate(-50%,720%)';
            tab.style.background = 'red';
            console.log('below');
          }
          else{
          tab.style.transform = 'translate(-50%,920%)';
          console.log('above');
          }
          window.addEventListener('resize', checkMediaQuery);*/
        }
      else{
        console.log('CLOSE')
        sample.classList.add('sample');
        sample.classList.remove('sample2');
        tab.style.position = 'fixed';
        tab.style.top = '0';
        
      }
    });
  }

  
}

function valueChange(e){
  console.log('i changed');
  button1.addEventListener('click', calculate,{once:true});
}
input1.addEventListener('change',valueChange);
input2.addEventListener('change',valueChange);
input3.addEventListener('change',valueChange);


///////////////////////////first one
function MinusValue1(){
  var number = parseFloat(document.querySelector('#first').value);
  if(number>=1){
  var number = number - 1;
  }else{
    var number = number;
  }
  document.querySelector('#first').value = number;
  button1.addEventListener('click', calculate,{once:true});
}


function AddValue1(){
  var number = parseFloat(document.querySelector('#first').value);
  var number = number + 1;
  document.querySelector('#first').value = number;
  button1.addEventListener('click', calculate,{once:true});
}

adding1.addEventListener('click', AddValue1);
minus1.addEventListener('click', MinusValue1);

/////////////////////////// second one

function MinusValue2(){
  var number = parseFloat(document.querySelector('#second').value);
  if (isNaN(number)){
    console.log('empty1');
    var number = 0;
  }
  else if(number>=1){
    var number = number - 1;
    }else{
      var number = number;
    }
  document.querySelector('#second').value = number;
  button1.addEventListener('click', calculate,{once:true});
}


function AddValue2(){
  var number = parseFloat(document.querySelector('#second').value);
  if (isNaN(number)){
    console.log('empty');
    var number = 1;
  }else{
  var number = number + 1;}
  document.querySelector('#second').value = number;
  button1.addEventListener('click', calculate,{once:true});
}

adding2.addEventListener('click', AddValue2);
minus2.addEventListener('click', MinusValue2);

/////////////////// third one

function MinusValue3(){
  var number = parseFloat(document.querySelector('#third').value);
  if(number>=1){
    var number = number - 1;
    }else{
      var number = number;
    }
  document.querySelector('#third').value = number;
  button1.addEventListener('click', calculate,{once:true});
}


function AddValue3(){
  var number = parseFloat(document.querySelector('#third').value);
  if(number<36){
  var number = number + 1;}
  else{
    number=number;
  }
  document.querySelector('#third').value = number;
  button1.addEventListener('click', calculate,{once:true});
}

adding3.addEventListener('click', AddValue3);
minus3.addEventListener('click', MinusValue3);

//////////////////////////// end of increments

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
  document.querySelector('#second').value = "";
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

if(reps<1||reps>36||isNaN(reps)){
  //resulttext.insertAdjacentText('afterend', 'Please enter a rep amount between 1-20.  Click on Reset!');
  //return button1.removeEventListener('click', calculate);
  var sample1 = document.createElement('p');
    sample1.textContent = `Please enter a rep amount between 1-36.`;
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
    adding1.addEventListener('click', ()=> {
      button1.addEventListener('click', () => {
        sample1.remove();
      })
    });
    adding2.addEventListener('click', ()=> {
      button1.addEventListener('click', () => {
        sample1.remove();
      })
    });
    adding3.addEventListener('click', ()=> {
      button1.addEventListener('click', () => {
        sample1.remove();
      })
    });
    minus1.addEventListener('click', ()=> {
     button1.addEventListener('click', () => {
        sample1.remove();
      })
    });
    minus2.addEventListener('click', ()=> {
      button1.addEventListener('click', () => {
         sample1.remove();
       })
     });
     minus3.addEventListener('click', ()=> {
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
  if (reps === 21) {
    var repmax = (total / .589);
  }
  if (reps === 22) {
    var repmax = (total / .579);
  }
  if (reps === 23) {
    var repmax = (total / .568);
  }
  if (reps === 24) {
    var repmax = (total / .562);
  }
  if (reps === 25) {
    var repmax = (total / .555);
  }
  if (reps === 26) {
    var repmax = (total / .546);
  }
  if (reps === 27) {
    var repmax = (total / .5376);
  }
  if (reps === 28) {
    var repmax = (total / .528);
  }
  if (reps === 29) {
    var repmax = (total / .5184);
  }
  if (reps === 30) {
    var repmax = (total / .5092);
  }
  if (reps === 31) {
    var repmax = (total / .5);
  }
  if (reps === 32) {
    var repmax = (total / .489);
  }
  if (reps === 33) {
    var repmax = (total / .478);
  }
  if (reps === 34) {
    var repmax = (total / .472);
  }
  if (reps === 35) {
    var repmax = (total / .466);
  }
  if (reps === 36) {
    var repmax = (total / .46);
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
  var finalAdded = (repmax * .589) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep21').innerHTML = "--"; }
  else {
    document.getElementById('#rep21').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .579) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep22').innerHTML = "--"; }
  else {
    document.getElementById('#rep22').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .568) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep23').innerHTML = "--"; }
  else {
    document.getElementById('#rep23').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .562) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep24').innerHTML = "--"; }
  else {
    document.getElementById('#rep24').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .555) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep25').innerHTML = "--"; }
  else {
    document.getElementById('#rep25').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .5468) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep26').innerHTML = "--"; }
  else {
    document.getElementById('#rep26').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .5376) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep27').innerHTML = "--"; }
  else {
    document.getElementById('#rep27').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .528) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep28').innerHTML = "--"; }
  else {
    document.getElementById('#rep28').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .5184) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep29').innerHTML = "--"; }
  else {
    document.getElementById('#rep29').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .5092) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep30').innerHTML = "--"; }
  else {
    document.getElementById('#rep30').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .5) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep31').innerHTML = "--"; }
  else {
    document.getElementById('#rep31').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .489) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep32').innerHTML = "--"; }
  else {
    document.getElementById('#rep32').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .478) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep33').innerHTML = "--"; }
  else {
    document.getElementById('#rep33').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .472) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep34').innerHTML = "--"; }
  else {
    document.getElementById('#rep34').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .466) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep35').innerHTML = "--"; }
  else {
    document.getElementById('#rep35').innerHTML = finalAdded.toFixed(2);
  }
  var finalAdded = (repmax * .46) - bodyweight;
  if (finalAdded < 0) { document.getElementById('#rep36').innerHTML = "--"; }
  else {
    document.getElementById('#rep36').innerHTML = finalAdded.toFixed(2);
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
  adding1.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      sample.remove();
    })
  });
  adding2.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      sample.remove();
    })
  });
  adding3.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      sample.remove();
    })
  });
  minus1.addEventListener('click', ()=> {
   button1.addEventListener('click', () => {
      sample.remove();
    })
  });
  minus2.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
       sample.remove();
     })
   });
   minus3.addEventListener('click', ()=> {
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
  adding1.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
  minus1.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
  adding2.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
  minus2.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
  adding3.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
  minus3.addEventListener('click', ()=> {
    button1.addEventListener('click', () => {
      result.remove();
    })
  });
}  // end of else
}

function checkMediaQuery() {
  // If the inner width of the window is greater then 768px
  if (window.innerWidth < 359) {
    // Then log this message to the console
    console.log('Media Query Matched!')
    tab.style.background = 'red';
  } else {
    tab.style.background = 'green';
  }
}



window.addEventListener('scroll', scrollData);
window.addEventListener('load', function () {
  main();
})

reset.addEventListener('click',resetButton);
