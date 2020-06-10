// function hello(name = 'Tom') {
//     console.log('hello ' + name);
// }
// const hello = function(name = 'Tom') {
//     console.log('hello ' + name);
// }
// const hello = (name = 'Tom') => console.log('hello ' + name);

function hello(callback, lastname) {
    console.log('hello ' + callback(lastname));
}

// hello('Koichi');
// hello('Keisei');
// hello();
hello(getName);

function getName() {
    return 'Airi';
}

// hello(function() { return "Yuki"; });
hello( (lastname) => 'Yuki ' + lastname , 'Nakagawa');

function doSomething(a, b, callback) {
    const result = callback(a,b);
    console.log(result);
}

function multiply(a,b) {
    return a * b;
}

function plus(a,b) {
    return a + b;
}

doSomething(2, 3, multiply);
doSomething(2, 3, plus);

const arry = [1,2,3,4,5];

arry.reduce((accu, curr) => {
    console.log(accu, curr);
    return accu * curr;
});

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

// const result = strArry.reduce( (accu, curr ) => {
//     return `${accu}<${curr}>`;
// }, "");

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

// const result = strArry.reduce(tag,"");

function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;

    // for (let i = 0; i < arry.length; i++) {
    //     accu = callback(accu, arry[i]);
    // }

    arry.forEach( value => accu = callback(accu,value));

    return accu;
}

const result = reduce(strArry, tag, "");

console.log(result);

// arry.forEach(value => console.log(value));