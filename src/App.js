import React, { useState, useEffect } from 'react';

//import components
import CardButton from './components/card-button/card-button.component';
import AddLog from './components/add-log-form/add-log-form.component';
import ViewLog from './components/view-log/view-log.component';

//import firebase utils
import { collection, getDocs, db } from './firebase/firebase.util';

function App() {

  const [logs, setLogs] = useState([]);

  //useEffect Hook - get all logs
  useEffect(async () => {
    let logData = []
    const snapshot = await getDocs(collection(db, 'logs'));
    snapshot.forEach((doc) => {
      logData.push(doc.data());
    })
    setLogs(logData)
  }, [])

  const [toggleAddLog, setToggleAddLog] = useState(false);
  const [toggleViewLog, setToggleViewLog] = useState(false);

  return (
    <div className="App container">
      <h1>Log Book</h1>

      <div onClick={() => setToggleAddLog(!toggleAddLog)} className="card-button-container">
        <CardButton primary>New Log</CardButton>
      </div>

      <div onClick={() => setToggleViewLog(!toggleViewLog)} className="card-button-container">
        <CardButton secondary>View Logs</CardButton>
      </div>

      {toggleAddLog ? <AddLog /> : ''}
      {toggleViewLog ? <ViewLog data={logs} /> : ''}
    </div>
  );
}

export default App;
