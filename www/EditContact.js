class EditContact{
    constructor(){
        this.getSpecific()
    }
    getSpecific(){
       let contactFromUrl = store.contacts.find( ({ timeStamp }) => timeStamp == location.pathname.split("/").pop() );
       /* let link = ('/edit/' + this.contact.timeStamp)
        history.pushState(null, null, link); // change url (no reload)*/
        console.log(contactFromUrl)
        let main = document.querySelector('main')
        let editContainer = document.createElement('div')
        editContainer.setAttribute('class','editContainer')
        main.append(editContainer)
        main.classList.remove('contact')
        main.classList.add('editContact')
        let editContactForm = document.createElement('form');
        let editContactSubmitBtn = document.createElement('button');
        let editContactHeader = document.createElement('h2')
        editContactHeader.innerHTML = 'Uppdatera kontakt'
        editContactSubmitBtn.setAttribute('type', 'button')
        editContactSubmitBtn.innerHTML = 'Lägg till'
        editContactSubmitBtn.setAttribute('class', 'editContactSubmitBtn')
        editContactForm.setAttribute('class', 'inputContainer')
        let editContactInputName = document.createElement('input')
        let editContactInputEmail = document.createElement('input')
        let editContactInputPhone = document.createElement('input')
        editContactInputName.setAttribute('type','text')
        editContactInputEmail.setAttribute('type','text')
        editContactInputPhone.setAttribute('type','text')
        editContactInputName.setAttribute('class', 'editContactInputName')
        editContactInputName.setAttribute('placeholder', 'Namn')
        editContactInputPhone.setAttribute('class', 'editContactInputPhone')
        editContactInputPhone.setAttribute('placeholder', 'Telefon, "," mellan för flera')
        editContactInputEmail.setAttribute('class', 'editContactInputEmail')
        editContactInputEmail.setAttribute('placeholder', 'Email, "," mellan för flera')

        editContactForm.prepend(editContactInputName)
        editContactForm.prepend(editContactInputPhone)
        editContactForm.prepend(editContactInputEmail)
        editContactForm.prepend(editContactSubmitBtn)
        editContactForm.prepend(editContactHeader)
        editContainer.prepend(editContactForm);
        new Contact(store.contacts[0])
    }
}