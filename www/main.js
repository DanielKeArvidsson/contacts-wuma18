if (location.pathname.indexOf('edit') > -1){
  let main = document.querySelector('main')
  let contact = document.querySelector('.contact')
  contact ? contact.hidden = true : ""
  main.classList.remove('contact')
  main.classList.add('editContact')
  new EditContact(location.pathname.split("/").pop())
}
else{
  let main = document.querySelector('main')
  history.pushState(null, null, '/');
  main.classList.remove('editContact')
  main.classList.add('contact')
}

   // change url (no reload)

  // On page load

  function reactOnRoute(){
    let main = document.querySelector('main')

    if(location.pathname.includes('/edit/')){
      main.classList.remove('contact')
      if(!main.classList.contains('editContact')){

        new EditContact()
      }
    }
    else {
      main.classList.remove('editContact')
      main.classList.add('contact')
    }
  }


  window.addEventListener('popstate', reactOnRoute);
  reactOnRoute();
  