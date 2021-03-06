import './App.css';
import AddContact from'./AddContact';
import Header from'./Header';
import ContactList from './ContactList';
import React,{ useState, useEffect} from 'react';
function App() {
  const LOCAL_STORAGE_KEY="contacts"; 
  const [contacts , setContacts] = useState([])
  const  addContactHandler = (contact) =>{
  console.log(contact);
  setContacts([...contacts, contact]);
  };
  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])
  return (
    <div className="ui container">
      <Header/>
       <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
