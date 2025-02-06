function dis(val) {
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value;
    if (x) {
        try {
            document.getElementById("result").value = eval(x);
        } catch (e) {
            document.getElementById("result").value = "Error";
        }
    } else {
        document.getElementById("result").value = "";
    }
}

function clr() {
    document.getElementById("result").value = "";
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];

    if (validKeys.includes(keyPressed)) {
        if (keyPressed === 'Enter') {
            solve();
        } else if (keyPressed === 'Backspace') {
            const currentValue = document.getElementById("result").value;
            document.getElementById("result").value = currentValue.slice(0, -1);
        } else {
            dis(keyPressed);
        }
    }
});