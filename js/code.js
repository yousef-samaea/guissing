'use strict';
let a =0;
let yourn ='';
function greeting() {
  yourn = prompt('inter your name');
  alert('welcome '+ yourn);
}
greeting();
let x = ['is my name yousef','am i fat','am i superman','am i funny?','am i tall?'];
let y = ['yes','y','no','n'];
let z = ['right','wrong'];
function questions (num){
  let myName='';
  while(myName !== 'jilldshisdhud')
  {
    myName = prompt(x[num]).toLowerCase(); // x[1] prompt('is my')
    if(myName === y[0] || myName===y[1] || myName===y[2] || myName===y[3] )
    {
      break;
    }
  }
  if(myName === y[0] || myName===y[1] )
  {console.log(z[0]);
    alert(z[0]);
    a++;}
  else{console.log(z[1]);
    alert(z[1]);}
}
for(let i = 0; i<=4; i++)
{
  questions(i);
}
let mno = 9;
let check = false;
for( let i = 0; 4 > i ; i++) {
  let yno = prompt('inter a number');
  if( mno < yno )
  { alert('too high');
  }
  else if( mno > yno )
  {
    alert('too low');
  }
  else
  {
    alert('right');
    a++;
    break;
  }
}
alert('try in another time');
let arr = ['pizza','orange','meat','mansaf'];
for( let j = 0; 6 > j ; j++) {
  let food = prompt('guess my favorite food');
  for (let k = 0; k<= 3 ; k++)
  {
    if(food === arr[k])
    {
      alert('correct, the list contain '+ 'pizza '+'orange '+ 'meat ' + 'mansaf' );
      a++;
      check = true;
      break;
    }
  }
  if(check === true){
    break;
  }
  alert('try again');

}
if(check === false){
  alert('wrong, the list contain '+ 'pizza '+'orange '+ 'meat ' + 'mansaf' );
}
alert('you did answer 7 questions');
alert('your score is '+a +' from 7');
