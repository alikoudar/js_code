const btn = document.querySelector('#clicker');

btn.onclick = function() {
    console.log('YOU CLICKED ME! GO AWAY!');
}

btn.ondblclick = function() {
    console.log('DOUBLE CLICK')
}