class EditContact{
    constructor(){
        this.getSpecific()
    }
    getSpecific(){
       let contactFromUrl = store.contacts.find( ({ timeStamp }) => timeStamp == location.pathname.split("/").pop() );
       /* let link = ('/edit/' + this.contact.timeStamp)
        history.pushState(null, null, link); // change url (no reload)*/
        let main = document.querySelector('main')
        let editContainer = document.createElement('div')
        editContainer.setAttribute('class','editContainer')
        main.append(editContainer)
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
        
        for(let i in contactFromUrl){
            console.log(contactFromUrl)
            console.log(store.contacts)
            console.log(i)
            console.log(i == "history")
            if(i == "history"){
                for(let contact in contactFromUrl[i]){
                    console.log(contactFromUrl[i][contact])
                    new HistoryContact(contactFromUrl[i][contact])
                }
            }

        }

        let editContact = listen('click', '.editContactSubmitBtn', e => {
            console.log(contactFromUrl)
            const time = Date.now()
            let historyContact = {
                name: editContactInputName.value,
                email: editContactInputEmail.value.split(",").map(item => item.trim()),
                phone: editContactInputPhone.value.split(",").map(item => item.trim()),
                timeStamp: time
            }
            contactFromUrl.name = editContactInputName.value
            contactFromUrl.email = editContactInputEmail.value.split(",").map(item => item.trim())
            contactFromUrl.phone = editContactInputPhone.value.split(",").map(item => item.trim())
            contactFromUrl.history.unshift(historyContact)
            store.save()
            new HistoryContact(historyContact)
          });
    }
}