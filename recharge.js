function showRecharge() {
    homeScreen.style.display = 'none'
    recharge.style.display = 'block'
}

let rechargeCards = JSON.parse(localStorage.getItem('cards')) || []
function generate() {
    let pin = ''
    for (let index = 0; index < 15; index++) {
        const num = Math.floor(Math.random() * 10);
        pin = pin + num
    }
    if (provider.value ===''|| amount.value === '') {
        alert('Select your options')
        return
    } else{
        showPin.innerHTML = pin
        let pinObject = {
        provider: provider.value,
        amount: amount.value,
        pin,
        used: false
    }

    rechargeCards.push(pinObject)
    console.log(rechargeCards);
    localStorage.setItem('cards', JSON.stringify(rechargeCards))
    show()
    }
    
}

function show() {
    tbody.innerHTML = ''
    rechargeCards.forEach(element => {
        tbody.innerHTML += `<tr>
        <td>${element.provider}</td>
        <td>${element.amount}</td>
        <td>${element.pin}</td>
        <td>${element.used}</td>
        </tr>`
    });
}
show()