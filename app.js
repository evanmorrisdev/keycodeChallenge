function myFunction(event) {
    let keyPressed = event.keyCode || event.which;
    document.getElementById("ask").innerHTML = keyPressed;
}