import React from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

export default function App() {
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
  )
}
