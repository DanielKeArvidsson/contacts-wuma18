class HistoryContact{
    constructor(contact){
        this.contact = contact
        this.showContacts()
    }
    showContacts(){
    let main = document.querySelector('main')
    let updateBtn = document.createElement('button')
    updateBtn.setAttribute('class','updateBtn')
    updateBtn.setAttribute('value', this.contact.timeStamp)
    updateBtn.innerHTML = 'Set to this'
    let editContainer = document.querySelector('.editContainer')
    let card = document.createElement('div')
    let time = document.createElement('p')
    time.innerHTML = new Date(this.contact.timeStamp).toLocaleString("sv-se")
    let name = document.createElement('p')
    name.innerHTML = this.contact.name;
    let phone = document.createElement('p')
    phone.innerHTML = this.contact.phone.join(', ')
    let email = document.createElement('p')
    email.innerHTML = this.contact.email.join(', ')
    card.append(time,name, phone, email, updateBtn)
    editContainer && editContainer.append(card)
    }


}