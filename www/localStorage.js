let store;
try {
 store = JSON.parse(localStorage.store);
}
catch(e){
 store = {};
}
 
store.save = function(){
  localStorage.store = JSON.stringify(this);
};
if(!store.contacts){
    // This should only run once
    // because on next page load there should
    // be a saved admin in the store
    store.contacts = []
    store.save();
  }