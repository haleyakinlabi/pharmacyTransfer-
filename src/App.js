import logo from './logo.svg';
import './App.css';
import PharmacySelect from './components/PharmacySelect';

function App() {
  return (
    <div className="App">
      <h1>Prescription Transfer Heber City</h1>

      <form>

        <fieldset>
          <label for="email">Email:</label>
          <input type="email" placeholder="user@example.com"></input>
        </fieldset>
        
        <fieldset>
          <label for="prescriptions">Prescriptions:</label>
          <textarea placeholder="medicine name(s)"> </textarea>
        </fieldset>

        <PharmacySelect label="current pharmacy"></PharmacySelect>

        <PharmacySelect label="new pharmacy"></PharmacySelect>

        <fieldset>
          <label for="startDate">Start Date:</label>
          <input id="startDate" type="date"></input>
        </fieldset>

        <fieldset>
          <label for="endDate">End Date:</label>
          <input id="endDate" type="date"></input>
        </fieldset>

        <button>transfer my prescriptions</button>

      </form>
      
    </div>
  );
}

export default App;

//Pharmacy App
//1. List of Pharmacies (Heber)
//2. Form
//-email
//-to and from
//-length of time(start and end)
//-list of medicine(text)

