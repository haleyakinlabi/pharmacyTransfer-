import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import PharmacySelect from './components/PharmacySelect'

function App () {
  const [currentPharmacy, setCurrentPharmacy] = useState()
  const [newPharmacy, setNewPharmacy] = useState()

  useEffect(() => {
    document.title = `${currentPharmacy} -> ${newPharmacy}`
  })

  const pharmacyChanged = event => {
    const selectElement = event.target
    const optionElements = selectElement.querySelectorAll('option')
    const selectedIndex = selectElement.selectedIndex
    const selectedOption = optionElements[selectedIndex]
    const selectedValue = selectedOption.value

    if (selectElement.id === 'current-pharmacy')
      setCurrentPharmacy(selectedValue)

    if (selectElement.id === 'new-pharmacy') setNewPharmacy(selectedValue)
  }

  return (
    <div className='App'>
      <h1>Prescription Transfer Heber City</h1>

      <p>The current pharmacy is {currentPharmacy}</p>
      <p>The new pharmacy is {newPharmacy}</p>

      <form>
        <PharmacySelect
          id='current-pharmacy'
          label='current pharmacy'
          onPharmacyChanged={pharmacyChanged}
        ></PharmacySelect>

        <PharmacySelect
          id='new-pharmacy'
          label='new pharmacy'
          onPharmacyChanged={pharmacyChanged}
        ></PharmacySelect>
      </form>
    </div>
  )
}

export default App

//Pharmacy App
//1. List of Pharmacies (Heber)
//2. Form
//-email
//-to and from
//-length of time(start and end)
//-list of medicine(text)

/*

        <fieldset>
          <label for='firstName'>First Name:</label>
          <input type='text' placeholder='John'></input>
        </fieldset>

        <fieldset>
          <label for='lastName'>Last Name:</label>
          <input type='text' placeholder='Doe'></input>
        </fieldset>

        <fieldset>
          <label for='email'>Email:</label>
          <input type='email' placeholder='user@example.com'></input>
        </fieldset>

        <fieldset>
          <label for='prescriptions'>Prescriptions:</label>
          <textarea placeholder='medicine name(s)'> </textarea>
        </fieldset>

        <PharmacySelect
          label='current pharmacy'
          onChange={pharmacyChanged}
        ></PharmacySelect>

        <PharmacySelect label='new pharmacy'></PharmacySelect>

        <fieldset>
          <label for='startDate'>Start Date:</label>
          <input id='startDate' type='date'></input>
        </fieldset>

        <fieldset>
          <label for='endDate'>End Date:</label>
          <input id='endDate' type='date'></input>
        </fieldset>
*/
