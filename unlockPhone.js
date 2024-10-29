let screen = document.getElementById('screen')
    let screen1 = document.getElementById('screen1')
    let screen2 = document.getElementById('screen2')

    screen.style.display = 'block'
    screen1.style.display = 'none'
    screen2.style.display = 'none'
    screen3.style.display = 'none'
    calls.style.display = 'none'
    calling.style.display = 'none'
    myContacts.style.display = 'none'
    forms.style.display = 'none'
    alarm.style.display = 'none'
    stopwatch.style.display = 'none'
    bmiCalc.style.display = 'none'
    camera.style.display = 'none'
    recharge.style.display = 'none'
    music.style.display = 'none'
    todo.style.display = 'none'

    function changeScreen() {
        if (screen.style.display === 'block') {
            screen1.style.display = 'block'
            screen.style.display = 'none'
            screen2.style.display = 'none'
            screen3.style.display = 'none'

        } else {
            screen.style.display = 'block'
            screen2.style.display = 'none'
            screen1.style.display = 'none'
            screen3.style.display = 'none'

        }
    }
    function unlockPhone() {
        screen2.style.display = 'block'
        screen1.style.display = 'none'
        screen3.style.display = 'none'

    }

    function getTime() {
        const now = new Date()
        //const hour =  String(now.getHours())
        //const minutes = String(now.getMinutes())
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function updateTime() {
        const timeDisplay = document.getElementById('time')
        timeDisplay.textContent = getTime()

    }
    updateTime()
    setInterval(updateTime, 1000)