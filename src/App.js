import './App.css';
import { useState } from 'react';

function App() {

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'oct', 'Nov', 'Dec']

  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)

  function increamenthandler() {
    setStep(step + 1)
  }

  function countHandler() {
    setCount(count + step)
  }

  function decreamentthandler() {
    setStep(step - 1)
  }

  function countHandler2() {
    setCount(count - step)
  }

  const date = new Date()
  
  const futureDate = new Date()
  futureDate.setDate(date.getDate()+count)

  return (
    <div className="App-header">
      <h1>Step Counter</h1>
      <Button title='Step' value={step} onClick={increamenthandler} onclick2={decreamentthandler}/>
      <Button title='Count' value={count} onClick={countHandler} onclick2={countHandler2} />
      <h5><span style={{ color: 'red', fontSize: '1.3rem' }}>{count}</span> days from today: {days[futureDate.getDay()]} {Months[futureDate.getMonth()]} {futureDate.getDate()} {futureDate.getFullYear()}</h5>
    </div>
  );
}

export default App;


function Button({ title, value, onClick, onclick2 }) {



  return (
    <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
      <button onClick={onClick} style={{ width: '40px', height: '40px', cursor: 'pointer', fontSize: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>+</button>

      <h3>{title}: {value}</h3>

      <button onClick={onclick2} style={{ width: '40px', height: '40px', cursor: 'pointer', fontSize: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>-</button>
    </div>
  )
}
