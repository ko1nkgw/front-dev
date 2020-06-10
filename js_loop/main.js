// const numbers = ['one','two','three','four','five'];

// for (let i = 0; i < numbers.length; i++) {
// for (let v of numbers) {
//     console.log(v);
// }

const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to museum',
        completed: false
    },
    {
        id: 3,
        title: 'Go shopping',
        completed: true
    }
]

// for (let i = 0; i < todos.length; i++) {
//     let todo = todos[i];
//     if (todo.completed === true) {
//         console.log(i, todo.title);
//     }
// }

// for (let i in todos) {
//     let todo = todos[i];
//     if (todo.completed === true) {
//         console.log(i, todo.title);
//     }
// }

for (let todo of todos) {
    if (todo.completed === true) {
        console.log(todo.id, todo.title);
    }
}

const num = 1;
const bool = Boolean(num);

if ( 1 == '1' ) {
    console.log('this is true');
} else {
    console.log('this is false');
}

console.log(bool);