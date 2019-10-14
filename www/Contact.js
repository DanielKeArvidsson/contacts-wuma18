
class Contact{
    constructor(contact){
        this.contact = contact
        this.createContact()
    }
    createContact(){
        let main = document.querySelector('main')
        let removeBtn = document.createElement('button')
        let editBtn = document.createElement('button')
        editBtn.setAttribute('class','editBtn')
        editBtn.setAttribute('value', this.contact.timeStamp)
        editBtn.innerHTML = 'edit'
        removeBtn.setAttribute('class','removeBtn')
        removeBtn.setAttribute('value', this.contact.timeStamp)
        removeBtn.innerHTML = 'X'
        let container = document.querySelector('.container')
        let card = document.createElement('div')
        main.setAttribute('class','contact')
        //main.classList.remove('contact')
        let name = document.createElement('p')
        name.innerHTML = this.contact.name;
        let phone = document.createElement('p')
        phone.innerHTML = this.contact.phone.join(', ')
        let email = document.createElement('p')
        email.innerHTML = this.contact.email.join(', ')
        card.append(name, phone, email,removeBtn, editBtn)
        container.append(card)
        editBtn.addEventListener('click', e => {
            e.preventDefault()
            location.href = ('/edit/' + this.contact.timeStamp)
            console.log('click')
            new EditContact(this.contact)
        })
    }
    
}