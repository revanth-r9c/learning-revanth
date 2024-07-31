var age=19;
var canDrive;
if(age>16){
    canDrive='yes';
}
else{
    canDrive='no';
}

var age=19;
var canDrive=age>16?'yes':'no';

function foo(bar){
    bar=typeof(bar)!=='undefined'?bar:10;
    console.log(bar);

    foo();
    foo(20);
}

var authenciated=true;
var nextURL=authenciated?(alert('You will redirect to admin area'),'/admin'):(alert('Access denied'),'/403');
console.log(nextURL);

var locked=1;
var canChange=locked!=1?true:false;

var locked=1;
var canChange=locked!=1;

var speed=90;
var message=speed>=120?'Too Fast':(speed>=80?'Fast':'Ok');
console.log(message);

console.log(true);
console.log(1);
console.log('hello');
console.log({name:'John'});

console.log(3 && 1 && 0 && 10);
console.log(true && 1 && {name:'John'});

const person=null;
console.log(person && person.address && person.address.street);

const person1={
    name:'John'
};
person.name||'Unknown';
person.job||'Unknown';
