document.getElementById("btn").addEventListener("click", (e) => {
    // Reset all border radius properties
    document.getElementById("box").style.borderBottomRightRadius = "50px";
    document.getElementById("box").style.borderBottomLeftRadius = "50px";
    document.getElementById("box").style.borderTopRightRadius = "50px";
    document.getElementById("box").style.borderTopLeftRadius = "50px";

    // Change the values of sliders to default
    document.getElementById("1").value = "50";
    document.getElementById("2").value = "50";
    document.getElementById("3").value = "50";
    document.getElementById("4").value = "50";
    document.getElementById("5").value = "50";

    e.preventDefault();
});

document.getElementById("1").oninput = function () {
    document.getElementById("box").style.borderRadius = this.value + "px";
}
document.getElementById("2").oninput = function () {
    document.getElementById("box").style.borderTopLeftRadius = this.value + "px";
}
document.getElementById("3").oninput = function () {
    document.getElementById("box").style.borderTopRightRadius = this.value + "px";
}
document.getElementById("4").oninput = function () {
    document.getElementById("box").style.borderBottomLeftRadius = this.value + "px";
}
document.getElementById("5").oninput = function () {
    document.getElementById("box").style.borderBottomRightRadius = this.value + "px";
}