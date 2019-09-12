var commands = {
    'more': "<p>Show text data</p>",
    'cd': '<p>Di chuyen den thu muc</p>',
    'date': '<p>The current date is: ' + (new Date()).toDateString() + '</p>'
    }
var inputCmd = document.getElementById('input-cmd');
window.addEventListener('keypress', event => {
    let text = inputCmd.textContent;
    let f_word = text.split(' ')[0];
    if (event.keyCode === 13) { // Enter
        let div1 = document.createElement('div');
        div1.innerHTML = "<p>C:\\Users\\haing>" + text + "</p>";
        document.getElementById("body-cmd").insertBefore(div1, document.getElementById('line-input-cmd'));
        if (!(f_word in commands)) {
            let div2 = document.createElement('div');
            div2.innerHTML = "<p>'" + f_word + "' is not recognized as an internal or extenal command, operabla program or batch file </p>";            
            document.getElementById("body-cmd").insertBefore(div2, document.getElementById('line-input-cmd'));
        } else {
            let div3 = document.createElement('div');
            div3.innerHTML = commands[f_word];
            document.getElementById("body-cmd").insertBefore(div3, document.getElementById('line-input-cmd'));
        }
        inputCmd.textContent = "";
        let scrll = document.getElementById('body-cmd');
        scrll.scrollTop = scrll.scrollHeight;
    } else if (event.keyCode === 32) { // Space
        inputCmd.textContent += ' ';
    } else {
        inputCmd.textContent += String.fromCharCode(event.keyCode);
    }
})
window.addEventListener('keydown', event => {
    let text = inputCmd.textContent;
    if (event.keyCode === 8) { // Delete
        console.log('delete');
        inputCmd.textContent = text.substr(0, text.length - 1);
    }
})
var cursorCmd = setInterval(() => {
    var visi = document.getElementById("cursor-cmd");
    if (visi.style.visibility == 'visible') {
        visi.style.visibility = "hidden";
    } else {
        visi.style.visibility = 'visible';
    }
}, 500);