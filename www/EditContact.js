class EditContact{
    constructor(){
        this.getSpecific()
    }
    addHistoryContactInfo(contactFromUrl){
        for(let i in contactFromUrl){
            if(i == "history"){
                for(let contact in contactFromUrl[i]){
                    new HistoryContact(contactFromUrl[i][contact])
                }
            }
            
        }
    }
    setContactToThis(theHistoryContact, contactFromUrl){
        const time = Date.now()
        let historyContact = {
            name: theHistoryContact.name,
            email: [...theHistoryContact.email],
            phone: [...theHistoryContact.phone],
            timeStamp: time
        }
        contactFromUrl.name = theHistoryContact.name
        contactFromUrl.email = [...theHistoryContact.email]
        contactFromUrl.phone = [...theHistoryContact.phone]
        contactFromUrl.history.unshift(historyContact)
        console.log(contactFromUrl.timeStamp)
        store.save()
        let historyContainer = document.querySelector('.historyContainer')
        historyContainer.innerHTML = ""
        this.addHistoryContactInfo(contactFromUrl)
    }
    updateInfoFromInput(contactFromUrl){
        const time = Date.now()
        let phone = document.querySelector('.editContactInputPhone')
        let name = document.querySelector('.editContactInputName')
        let email = document.querySelector('.editContactInputEmail')

        let historyContact = {
            name: name.value,
            email: email.value.split(",").map(item => item.trim()),
            phone: phone.value.split(",").map(item => item.trim()),
            timeStamp: time
        }
        contactFromUrl.name = name.value
        contactFromUrl.email = email.value.split(",").map(item => item.trim())
        contactFromUrl.phone = phone.value.split(",").map(item => item.trim())
        contactFromUrl.history.unshift(historyContact)
        store.save()
        phone.value = "";
        name.value = "";
        email.value = "";
        let historyContainer = document.querySelector('.historyContainer')
        historyContainer.innerHTML = ""
        this.addHistoryContactInfo(contactFromUrl)
        console.log(store)
    }
    getSpecific(){
        let contactFromUrl = store.contacts.find( ({ timeStamp }) => timeStamp == location.pathname.split("/").pop() );
        let inputDiv = document.createElement('div')
        inputDiv.classList.add('inputDiv')
        let main = document.querySelector('main')
        let editContainer = document.createElement('div')
        let historyContainer = document.createElement('div')
        historyContainer.classList.add('historyContainer')
        editContainer.setAttribute('class','editContainer')
        main.append(editContainer)
        editContainer.append(inputDiv)
        editContainer.append(historyContainer)
        main.classList.add('editContact')
        let editContactForm = document.createElement('form');
        let editContactSubmitBtn = document.createElement('button');
        let editContactHeader = document.createElement('h2')
        editContactHeader.innerHTML = 'Update contact'
        editContactSubmitBtn.setAttribute('type', 'button')
        editContactSubmitBtn.innerHTML = 'Update'
        editContactSubmitBtn.setAttribute('class', 'editContactSubmitBtn')
        editContactForm.setAttribute('class', 'inputContainer')
        let editContactInputName = document.createElement('input')
        let editContactInputEmail = document.createElement('input')
        let editContactInputPhone = document.createElement('input')
        let editContactInfoHeader = document.createElement('h2')
        editContactInfoHeader.innerHTML = "Editing history, latest edit i current"
        editContactInputName.setAttribute('type','text')
        editContactInputEmail.setAttribute('type','text')
        editContactInputPhone.setAttribute('type','text')
        editContactInputName.setAttribute('class', 'editContactInputName')
        editContactInputName.setAttribute('placeholder', 'Name')
        editContactInputPhone.setAttribute('class', 'editContactInputPhone')
        editContactInputPhone.setAttribute('placeholder', 'Phone, "," in between each')
        editContactInputEmail.setAttribute('class', 'editContactInputEmail')
        editContactInputEmail.setAttribute('placeholder', 'E-mail, "," in between each')
        if(!document.querySelector('.editContactSubmitBtn')){
            editContactForm.prepend(editContactSubmitBtn)
            editContactForm.prepend(editContactInputPhone)
            editContactForm.prepend(editContactInputEmail)
            editContactForm.prepend(editContactInputName)
            editContactForm.prepend(editContactHeader)
            inputDiv.append(editContactForm);
            inputDiv.append(editContactInfoHeader)
        }
        if(!document.querySelector('.updateBtn')){
           this.addHistoryContactInfo(contactFromUrl)
        }

        let editContact = listen('click', '.editContactSubmitBtn', e => {
            this.updateInfoFromInput(contactFromUrl)
          });
        let updateBtn =listen('click','.updateBtn', e => {
            console.log(e.target.value)
            console.log(contactFromUrl.history)
            if(contactFromUrl && contactFromUrl.history){
                for(let i in contactFromUrl.history){
                    if(contactFromUrl.history[i].timeStamp == e.target.value){
                        console.log(contactFromUrl.history[i])
                        let theHistoryContact = contactFromUrl.history[i]
                        console.log(contactFromUrl)
                        this.setContactToThis(theHistoryContact,contactFromUrl)
                        break;
                    }
                }
            }
        })
    }
}