const btn = document.querySelector('#btn');

function hello() {
    // alert('hello');
    this.style.color = 'red';
};

btn.addEventListener('click', hello);