document.addEventListener("DOMContentLoaded", () => {
    const ta = new TextAnimation(".animate-title");
    const ta2 = new TextAnimation(".animate-title-2");
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);
});
class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._spanText();
        console.log(this.chars);
    }
    _spanText() {
        return this.chars.reduce((accu, curr) => {
            curr = curr.replace(" ", "&nbsp;");
            accu += `<span class="char">${curr}</span>`;
            return accu;
        }, "");        
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}
