const background = document.getElementById('container');
// const bgColor = document.getElementById('theme');
function getLight(){
    background.classList.remove('dark', 'barbie');
    background.classList.add('light');
}
function getDark(){
    background.classList.remove('light', 'barbie');
    background.classList.add('dark');
}
function getBarbie(){
    background.classList.remove('light', 'dark');
    background.classList.add('barbie');
}