const $ = (selector) => {
    return document.querySelector(selector);
};

const hour = $('.hour');
const min = $('.min');
const week = $('.week');
const timezone = $('.timezone');

let showDot = false;

function update() {
    showDot = !showDot;
    const now = new Date();

    let hours = now.getHours();
    let displayHours = hours % 12 || 12; // converts 0 -> 12 and 13 -> 1, etc.

    hour.textContent = String(displayHours).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    timezone.textContent = hours >= 12 ? 'PM' : 'AM';
    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });
    
    week
        .children[now.getDay()]
        .classList.add('active');
}
setInterval(update, 500);
