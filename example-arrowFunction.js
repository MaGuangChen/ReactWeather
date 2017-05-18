let name = ['paul','david','peter'];

name.forEach(function(name){
   console.log('forEach啦',name);
});

name.forEach((name) => {
    let dived = '先切割一下啦';
    console.log(dived);
    console.log('arrowFunc啦',name);
});

name.forEach((name) => console.log('切割一下',`這邊是炫技用的啦 ${name}`));

/*let returnMe = (MyName) => `${MyName} !`;
console.log(returnMe('Paul_Ma'));*/

let person = {
    name: 'Paul',
    greet: function(){
        name.forEach((name) => {
           console.log(`${this.name} says hi to ${name}`)
        });
    }
}
person.greet();


let add = (a,b) => {
    return a+b;
}
{
    let add = (a,b) => a+b;
    console.log(add(2,4));
}

console.log(add(1,3));
