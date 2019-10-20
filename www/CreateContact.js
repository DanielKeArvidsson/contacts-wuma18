class CreateContact{
    constructor(){
        this.init()
    }

    init(){
    if(window.location.href.indexOf("/edit/") != -1){return}

    let container = document.querySelector('.container');
    let main = document.querySelector('main')
    let inputFields = document.createElement('div')
    inputFields.classList.add('inputFields')
    main.prepend(inputFields)
    let createContactForm = document.createElement('form');
    let createContactSubmitBtn = document.createElement('button');
    let createContactHeader = document.createElement('h2')
    createContactHeader.innerHTML = 'Add new contact'
    createContactSubmitBtn.setAttribute('type', 'button')
    createContactSubmitBtn.innerHTML = 'Add'
    createContactSubmitBtn.setAttribute('class', 'createContactSubmitBtn')
    createContactForm.setAttribute('class', 'inputContainer')
    let createContactInputName = document.createElement('input')
    let createContactInputEmail = document.createElement('input')
    let createContactInputPhone = document.createElement('input')
    createContactInputName.setAttribute('type','text')
    createContactInputEmail.setAttribute('type','text')
    createContactInputPhone.setAttribute('type','text')
    createContactInputName.setAttribute('class', 'createContactInputName')
    createContactInputName.setAttribute('placeholder', 'Name')
    createContactInputPhone.setAttribute('class', 'createContactInputPhone')
    createContactInputPhone.setAttribute('placeholder', 'Phone, "," in between each')
    createContactInputEmail.setAttribute('class', 'createContactInputEmail')
    createContactInputEmail.setAttribute('placeholder', 'E-mail, "," in between each ')

    createContactForm.prepend(createContactSubmitBtn)
    createContactForm.prepend(createContactInputEmail)
    createContactForm.prepend(createContactInputPhone)
    createContactForm.prepend(createContactInputName)
    createContactForm.prepend(createContactHeader)
    inputFields.prepend(createContactForm);
    let createNew = listen('click', '.createContactSubmitBtn', e => {
        const time = Date.now()
        let newContact = {
            name: createContactInputName.value,
            email: createContactInputEmail.value.split(",").map(item => item.trim()),
            phone: createContactInputPhone.value.split(",").map(item => item.trim()),
            timeStamp: time,
            history: [{
                name:createContactInputName.value,
                email: createContactInputEmail.value.split(",").map(item => item.trim()),
                phone: createContactInputPhone.value.split(",").map(item => item.trim()),
                timeStamp: time
              }]
        }
        store.contacts.push(newContact)
        store.save()
        new Contact(newContact)
        createContactInputName.value = ""
        createContactInputPhone.value = ""
        createContactInputEmail.value = ""
      });
    }

}

new CreateContact()