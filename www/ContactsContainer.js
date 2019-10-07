class ContactsContainer{
    constructor(){
        this.createDiv()
    }
    createDiv(){
    console.log(this)
    let body = document.querySelector('body');
    let contactContainer = document.createElement('div');
    contactContainer.innerHTML = '';
    contactContainer.setAttribute('class', 'container')
    body.append(contactContainer);
    store.first = {name: "assadf", phone: ["07477222", "02029444"], email: ["asd@asd.com"]}
    console.log(store.save())
}
}
new ContactsContainer()