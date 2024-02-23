const min = document.querySelector("#min")
const sec = document.querySelector("#sec")
const hour = document.querySelector("#hour")
const hands = document.querySelectorAll(".hand");
const nums = document.querySelectorAll(".number");

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
async function animation(delly) {
    for (let i = 0; i < nums.length; i++) {
        await delay(.5 * delly)
        nums[i].style.opacity = "1"
        nums[i].classList.add(`number${i + 1}`)
        await delay(delly)
    }
    await delay(delly)
    for (let j = 0; j < hands.length; j++) {
        await delay(delly)
        hands[j].style.opacity = "1"
        hands[j].classList.add(`h${j}`)
        
    }
}
animation(1000);
setInterval(ration, 1000);
function ration() {
    const currentDate = new Date()
    const ratiosec = currentDate.getSeconds() / 60;
    const ratiomin = (ratiosec + currentDate.getMinutes()) / 60;
    const ratiohour = (ratiomin + currentDate.getHours()) / 12;
    style(sec, ratiosec);
    style(min, ratiomin);
    style(hour, ratiohour);
}

function style(element, ratio) {
    element.style.setProperty('--rotate', ratio * 360);
}

