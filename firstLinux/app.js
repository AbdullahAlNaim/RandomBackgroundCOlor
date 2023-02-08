const some = document.querySelector('button');
const slider = document.querySelector('input');

rgb = function (){
    let num = Math.floor(Math.random() * 255) + 1
    return num
}

some.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${rgb()},${rgb()},${rgb()})`;
})

slider.addEventListener('click', () => {
    console.log('sliding');
    console.log(slider.value);
    document.body.style.backgroundColor = `rgb(${slider.value=},${rgb()},${rgb()})`;
})

