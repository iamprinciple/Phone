let index;
let myAlarms = document.getElementById('myAlarms')
let allAlarms = [] || JSON.parse(localStorage.getItem('alarm'));
let alarmAudio = new Audio("alarmringer.mp3")

function showAlarm() {
    homeScreen.style.display = 'none'
    alarm.style.display = 'block'

}
function getTimee() {
    const timer = new Date()
    return timer.toLocaleTimeString({ hour: '2-digit', minute: '2-digit' });
}

function updateTimee() {
    const timee = document.getElementById('timee')
    timee.textContent = getTimee()

}
updateTimee()
setInterval(updateTimee, 1000)


function addAlarm() {
    let setTime = document.getElementById("setTime")
    if (setTime.value == "") {
        alert('Set an alarm')
    } else {
        // let myTime = setTime.value
        const dt = new Date()

        const newAlarm = {
            now: new Date(dt.toDateString() + " " + `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`),
            alarmTime: new Date(dt.toDateString() + " " + setTime.value),
            time: setTime.value,
            timeBefore: function () {
                return this.alarmTime - this.now
            },
            alarmRing: false
        }

        allAlarms.push(newAlarm)
        console.log(allAlarms);
        localStorage.setItem('alarm', JSON.stringify(allAlarms))
        alert("You set an alarm")
        displayAlarm()

        if (newAlarm.timeBefore() > 0) {
            setTimeout(() => {
                setTimeout(() => {
                    alarmAudio.play()
                }, 1000);
                newAlarm.alarmRing = true
                //displayAlarm()
            }, newAlarm.timeBefore());
        } else {
            alert("Enter correctly")
        }

        //checkAlarm()
    }

}

function displayAlarm() {
    sortAlarms = allAlarms.filter(
        (newAlarm) => newAlarm.timeBefore > 0 && newAlarm.alarmRing == false
    ).sort((a, b) => {
        if (a.timeBefore() > b.timeBefore()) return 1;
        if (a.timeBefore() < b.timeBefore()) return -1;
        return 0
    })
    newAlarm = sortAlarms
    myAlarms.innerHTML = ''

    allAlarms = JSON.parse(localStorage.getItem("alarm")) || []
    allAlarms.forEach((alarm, i) => {
        myAlarms.innerHTML += `<h2>${alarm.time} <span><button onclick="deletAlarm(${i})">x</button></span></h2>
        
        <input type="checkbox" id='checked'>
        `
    });
}
displayAlarm()

function deletAlarm(index) {
    allAlarms.splice(index, 1)
    localStorage.setItem('alarm', JSON.stringify(allAlarms))
    displayAlarm()
}

function openStopwatch() {
    alarmHolder.style.display = 'none'
    stopwatch.style.display = 'flex'
}
function openAlarm() {
    alarmHolder.style.display = 'flex'
    stopwatch.style.display = 'none'
}

let timer;
let running = false;
let elapedTime = 0

const display = document.getElementById('display')
display.innerHTML = '00:00:00'

let startBtn = document.getElementById('startBtn')
//const reset = document.getElementById('reset')

//startStopbtn.addEventListener("click", startStop);
//resetbtn.addEventListener("click", reset)

function startStop() {
    if (running) {
        clearInterval(timer)
        startBtn.textContent = 'Start'
    } else {
        startBtn.textContent = 'Stop'
        const startTime = Date.now() - elapedTime
        //console.log(Date.now());
        timer = setInterval(() => {
            elapedTime = Date.now() - startTime
            display.innerHTML = makeTime(elapedTime)
            
        }, 1000);
    }
    running = !running
}

function reset() {
    clearInterval(timer)
    running = false
    elapedTime = 0
    display.textContent = '00:00:00'
    startStop.textContent = 'Start'
}

function makeTime(ms) {
    let totalSec = Math.floor(ms / 1000);
    let hour = String(Math.floor(totalSec / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
    let seconds = String(totalSec % 60).padStart(2, '0');
    console.log(`${hour} : ${minutes} : ${seconds}`);
    return `${hour} : ${minutes} : ${seconds}`
}
// makeTime()
