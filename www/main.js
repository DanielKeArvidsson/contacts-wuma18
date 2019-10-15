if (location.pathname.indexOf('edit') > -1){
  console.log("hej")
  let main = document.querySelector('main')
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
  