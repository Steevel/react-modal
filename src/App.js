import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {

  const [modalState, setModalState] = useState(false)

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal</h1>
      <button className="openModalBtn" onClick={() => setModalState(true)}>Open</button>
      {modalState && <Modal closeModal={setModalState} />}
    </div>
  );
}

export default App;
