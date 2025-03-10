
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
        let name = document.createElement('p')
        name.innerHTML = "Name: " +  this.contact.name;
        let phone = document.createElement('p')
        phone.innerHTML = "Phone: " + this.contact.phone.join(', ')
        let email = document.createElement('p')
        email.innerHTML = "E-mail: " + this.contact.email.join(', ')
        card.append(name, phone, email,removeBtn, editBtn)
        container && container.prepend(card)
       
        editBtn.addEventListener('click', e => {
            e.preventDefault()
            let link = ('/edit/' + this.contact.timeStamp)
            history.pushState(null, null, link);
            reactOnRoute();
        })
        removeBtn.addEventListener('click', e => {
            card.classList.add('hidden')
            store.contacts = store.contacts.filter(contact => contact.timeStamp != e.target.value );
            store.save()

        })
    }
    
}