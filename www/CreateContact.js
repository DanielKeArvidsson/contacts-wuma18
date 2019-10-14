class CreateContact{
    constructor(){
        this.init()
    }

    init(){
    let container = document.querySelector('.container');
    let createContactForm = document.createElement('form');
    let createContactSubmitBtn = document.createElement('button');
    let createContactHeader = document.createElement('h2')
    createContactHeader.innerHTML = 'Lägg till ny kontakt'
    createContactSubmitBtn.setAttribute('type', 'button')
    createContactSubmitBtn.innerHTML = 'Lägg till'
    createContactSubmitBtn.setAttribute('class', 'createContactSubmitBtn')
    createContactForm.setAttribute('class', 'inputContainer')
    let createContactInputName = document.createElement('input')
    let createContactInputEmail = document.createElement('input')
    let createContactInputPhone = document.createElement('input')
    createContactInputName.setAttribute('type','text')
    createContactInputEmail.setAttribute('type','text')
    createContactInputPhone.setAttribute('type','text')
    createContactInputName.setAttribute('class', 'createContactInputName')
    createContactInputPhone.setAttribute('class', 'createContactInputPhone')
    createContactInputEmail.setAttribute('class', 'createContactInputEmail')
    createContactForm.prepend(createContactInputName)
    createContactForm.prepend(createContactInputPhone)
    createContactForm.prepend(createContactInputEmail)
    createContactForm.prepend(createContactSubmitBtn)
    createContactForm.prepend(createContactHeader)
    container.prepend(createContactForm);
    let listener2 = listen('click', '.createContactSubmitBtn', e => {
        let newContact = {
            name: createContactInputName.value,
            email: createContactInputEmail.value.split(",").map(item => item.trim()),
            phone: createContactInputPhone.value.split(",").map(item => item.trim()),
            timeStamp: Date.now()
        }
        store.contacts.push(newContact)
        store.save()
      });

}

}
new CreateContact()