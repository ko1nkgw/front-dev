const btn = document.querySelector('#btn');

function changeColor() {
    // alert('hello');
    this.style.color = 'red';
};

function changeBgColor() {
    this.style.backgroundColor = 'green';
}

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);