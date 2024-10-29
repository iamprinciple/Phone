function printN(params) {
    output.innerHTML += params

}

function dail() {


    let output = document.getElementById('output').innerHTML
    if (output !== '') {
       let contact = contacts.find(num => num.phoneNum === output)
       if (contact) {
        alert("Dailing: " + contact.firstName)
        dailingNum.innerHTML = `<i>Dailing:</i> <h2>${contact.firstName}</h2><strong>${contact.phoneNum}</strong>`
       }else{
        alert('dailing:' + output)
        dailingNum.innerHTML = `Dailing: ${output}`
       }
        calls.style.display = 'none'
        calling.style.display = 'flex'
        
    } else {
        alert('enter number')
    }
}

function deli() {
    output.innerHTML = output.innerHTML.slice(0, -1)
}
function endCall() {
    alert("Call Ended")
    calls.style.display = 'block'
    calling.style.display = 'none'
}
function showContact() {
    myKeys.style.display = 'none'
    myContacts.style.display = 'block'
}
function showKeypad() {
    myKeys.style.display = 'block'
    myContacts.style.display = 'none'
}

function addNew() {
    contList.style.display = "none"
    forms.style.display = "flex"
    addSym.innerHTML = `<button onclick="saveContact()">Done</button>`
}

let contacts = [] ||JSON.parse(localStorage.getItem('contacts'))
function saveContact() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let phoneNum = document.getElementById("phoneNum").value
    let photoFile = document.getElementById("photo").files[0]

    if (!firstName || !lastName || !phoneNum) {
        alert("All fields are mandatory")
        return
    }
    const reader = new FileReader()
    reader.onload = function (e) {
        const photo = e.target.result

        const contact = {
            firstName: firstName,
            lastName: lastName,
            phoneNum: phoneNum,
            photo: photo
        }
        contacts = JSON.parse(localStorage.getItem('contacts')) || []

        contacts.push(contact)
        localStorage.setItem('contacts', JSON.stringify(contacts))
        alert("Contacts saved successfully")
        contList.style.display = "flex"
        forms.style.display = "none"
        addSym.innerHTML = `<span class="material-symbols-outlined" onclick="addNew()" id="addSym">add</span>`
        displayContact()
    }
    reader.readAsDataURL(photoFile)
}

function displayContact() {
    let lists = document.getElementById("lists")
    lists.innerHTML = ''

    contacts = JSON.parse(localStorage.getItem("contacts")) || []
    contacts.forEach(contact => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `
    <img src= "${contact.photo}" alt= "" width= "50" height="50">
    <span>${contact.firstName} ${contact.phoneNum}</span>    
    `
    lists.appendChild(listItem)
    });
}
displayContact()
