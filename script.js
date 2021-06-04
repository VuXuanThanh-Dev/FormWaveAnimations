const labels = document.querySelectorAll('.form-group label');
const title = document.querySelector('.title');


labels.forEach(label => {
    label.innerHTML = label.innerHTML
    .split('')
    .map((letter, idx) => {
        return `<span style="transition-delay: ${idx * 60}ms">${letter}</span>`;
    })
    .join('');
})


title.innerHTML = title.innerHTML.split('')
     .map((letter, idx) => {
         return `<span style="transition-delay: ${idx * 100}ms">${letter}</span>`;
     })
     .join('');