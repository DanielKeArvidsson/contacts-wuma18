let listener = listen('click', 'a', function(e){
    console.log(e)
   let link = this.getAttribute('href');
    if(link.indexOf('/') === 0){
      e.preventDefault(); // no hard reload of page
      history.pushState(null, null, link); // change url (no reload)
      frontendRouter(link); // tell the router
    }
})
   
  // Listen to back/forward
    
  window.addEventListener("popstate", () => {
    frontendRouter(location.pathname);
  });
  // On page load
  