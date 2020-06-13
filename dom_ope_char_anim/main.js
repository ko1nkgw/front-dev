document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector(".animate-title");
    const str = el.innerHTML.trim();

    el.innerHTML = str.split('').reduce((accu, curr) => {
        curr = curr.replace(" ", "&nbsp;");
        accu += `<span class="char">${curr}</span>`;
        return accu;
        // console.log(accu);
    }, "");

});
