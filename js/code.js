'use strict';
let a =0;
let yourn ='';
function greeting() {
yourn = prompt('inter your name');
alert('welcome '+ yourn);
}
greeting();

let myName='';
while(myName !== 'jilldshisdhud')
{
  myName = prompt('is my name yousef?');
  myName = myName.toLowerCase();
  if(myName === 'yes' || myName==='no' || myName==='y' || myName==='n' )
  {
    break;
  }
}
if(myName === 'yes' || myName==='y' )
{console.log('right');
  alert('right');
  a++;}
else{console.log('wrong');
  alert('wrong');} //yes
while(myName !== 'jilldshisdhud')
{
  myName = prompt('am i fat?');
  myName = myName.toLowerCase();
  if(myName === 'yes' || myName==='no' || myName==='y' || myName==='n' )
  {
    break;
  }
}
if(myName === 'yes' || myName==='y' )
{console.log('right');
  alert('right');
  a++;}
else{console.log('wrong');
  alert('wrong');}
while(myName !== 'jilldshisdhud')
{
  myName = prompt('am i tall?');
  myName = myName.toLowerCase();
  if(myName === 'yes' || myName==='no' || myName==='y' || myName==='n' )
  {
    break;
  }
}
if(myName === 'yes' || myName==='y' )
{console.log('right');
  alert('right');
  a++;}
else{console.log('wrong');
  alert('wrong');}
while(myName !== 'jilldshisdhud')
{
  myName = prompt('am i superman?');
  myName = myName.toLowerCase();
  if(myName === 'yes' || myName==='no' || myName==='y' || myName==='n' )
  {
    break;
  }
}
if(myName === 'yes' || myName==='y' )
{console.log('right');
  alert('right');
  a++;}
else{console.log('wrong');
  alert('wrong');}
while(myName !== 'jilldshisdhud')
{
  myName = prompt('am i funny?');
  myName = myName.toLowerCase();
  if(myName === 'yes' || myName==='no' || myName==='y' || myName==='n' )
  {
    break;
  }
}
if(myName === 'yes' || myName==='y' )
{console.log('right');
  alert('right');
  a++;}
else{console.log('wrong');
  alert('wrong');}
// alert('come bace agane '+ yourn);
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
