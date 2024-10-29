const correctPassword = '123456'
localStorage.setItem('PASSWORD', JSON.stringify(correctPassword))
let password = ''

function printNum(value) {

    if (password.length < 6) {
        password += value
        updateDots()

        if (password.length === 6) {
            let storedPassword = JSON.parse(localStorage.getItem('PASSWORD'))
            if (password === storedPassword) {
                screen2.style.display = 'none'
                screen3.style.display = 'block'

            } else {
                alert('wrong password')
                password = ''
                for (let index = 0; index < 6; index++) {
                    let dot = document.getElementById('dot' + (index + 1))
                    dot.textContent = password[index] !== '' ? '' : ''
                }

            }
        }
    }
}

function updateDots() {
    for (let index = 0; index < 6; index++) {
        let dot = document.getElementById('dot' + (index + 1))
        dot.textContent = password[index] !== undefined ? '*' : ''
    }
}

function showCalls() {
    homeScreen.style.display = 'none'
    calls.style.display = 'block'
}
function back() {
    homeScreen.style.display = 'flex'
    calls.style.display = 'none'
    alarm.style.display = 'none'
    bmiCalc.style.display = 'none'
    camera.style.display = 'none'
    recharge.style.display = 'none'
    music.style.display = 'none'
    todo.style.display = 'none'
    
}