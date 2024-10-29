function showBMI() {
    homeScreen.style.display = 'none'
    bmiCalc.style.display = 'block'
}

function check() {
    let mass = parseFloat(document.getElementById('mass').value)
    let height = parseFloat(document.getElementById('height').value)

    let bmi = mass / height * height
    if (!mass || !height) {
        display1.textContent = "Enter valid mass and height"
        display2.textContent = " "
        return
    } else{
        display1.textContent = `Your BMI is ${bmi.toFixed(2)}`
    }
    

    let comment;
    if (bmi < 18.5) {
        comment = "Underweight, Feed more 😒😒"
    } else if (bmi >= 18.5 && bmi <= 24.5) {
        comment = "Normal weight sharp guy 👍👍"
    } else if (bmi >= 25 && bmi <= 29.9) {
        comment = "Overwight. Watch it!"
    } else {
        comment = "Obese"
    }
    display2.textContent = comment
    
}