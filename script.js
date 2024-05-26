"use strict";
function clock() {
    let hrs = document.getElementById('hours');
    let min = document.getElementById('minutes');
    let sec = document.getElementById('seconds');
    let period = document.getElementById('ampm');
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ampm = h >= 12 ? 'PM' : 'AM';
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
}
setInterval(clock, 1000);
clock();
