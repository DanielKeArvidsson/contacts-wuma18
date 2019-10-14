class EditContact{
    constructor(contact){
        this.contact = contact
        this.getSpecific()
    }
    getSpecific(){
        let main = document.querySelector('main')
        main.classList.remove('contact')
        main.classList.add('editContact')
        let editContainer = document.createElement('div')
        editContainer.setAttribute('class','editContainer')
        let contactInfo = document.createElement('h1')
        editContainer.append(contactInfo)
        main.append(editContainer)
        contactInfo.innerHTML = this.contact.name
    }
    
}