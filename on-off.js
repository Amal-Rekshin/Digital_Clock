const Powerbtn = document.getElementById("switchBtn");
const display = document.getElementById("displayed");
const dots = document.getElementsByClassName("dot");
const offBtn = document.getElementById("switchOff");
const offDisBtn = document.querySelector("#displayed h1");

Powerbtn.addEventListener("click", () => {
    const currentBgColor = getComputedStyle(display).backgroundColor;

    if (currentBgColor === "rgb(0, 0, 0)") {
        offBtn.innerHTML = "";
        display.style.backgroundColor = "transparent";
        Powerbtn.textContent = "ON";
        Powerbtn.style.backgroundColor = "green";
        offDisBtn.classList.remove("animate")
        

    Array.from(dots).forEach((dot) => {
        dot.classList.remove("hidden");
        dot.classList.add("visible");
        });
    } else {
        offBtn.innerHTML = "OFF";
        display.style.backgroundColor = "rgb(0, 0, 0)";
        Powerbtn.textContent = "OFF";
        Powerbtn.style.backgroundColor = "red";
        offDisBtn.classList.add("animate")

    Array.from(dots).forEach((dot) => {
        dot.classList.remove("visible");
        dot.classList.add("hidden");
        });
    }
});
