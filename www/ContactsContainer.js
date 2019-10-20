class ContactsContainer{
    constructor(){
        this.createDiv()
    }
    createDiv(){
    let main = document.querySelector('main');
    let contactContainer = document.createElement('div');
    contactContainer.innerHTML = '';
    contactContainer.setAttribute('class', 'container')
    main.append(contactContainer);
    store.save();
    
    for(let contact of store.contacts){
        new Contact(contact)
    }
}
}
new ContactsContainer()