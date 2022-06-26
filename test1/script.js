function changeLayout1() {
    const changeLayout1 = document.getElementById('changeLayout1');
    changeLayout1.classList.toggle('active');
    document.getElementById('changeLayout2').classList.remove('active');
    document.getElementById('changeLayout3').classList.remove('active');
}
function changeLayout2() {
    const changeLayout2 = document.getElementById('changeLayout2');
    changeLayout2.classList.toggle('active');
    document.getElementById('changeLayout1').classList.remove('active');
    document.getElementById('changeLayout3').classList.remove('active');
}
function changeLayout3() {
    const changeLayout3 = document.getElementById('changeLayout3');
    changeLayout3.classList.toggle('active');
    document.getElementById('changeLayout1').classList.remove('active');
    document.getElementById('changeLayout2').classList.remove('active');
}

const layout1 = document.getElementById('changeLayout1');
layout1.addEventListener('click', function () {
     const a = document.getElementById('a');
     const b = document.getElementById('b');
     const c = document.getElementById('c');
    
     a.style.display = 'block';
     b.style.display = 'none';
     c.style.display = 'none'
})

const layout2 = document.getElementById('changeLayout2');
layout2.addEventListener('click', function () {
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const c = document.getElementById('c');

    a.style.display = 'none';
    b.style.display = 'grid';
    c.style.display = 'none'
  
})

const layout3 = document.getElementById('changeLayout3');
layout3.addEventListener('click', function () {
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const c = document.getElementById('c');

    a.style.display = 'none';
    b.style.display = 'none'
    c.style.display = 'grid'
})
