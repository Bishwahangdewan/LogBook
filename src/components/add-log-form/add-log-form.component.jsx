import React, { useState } from 'react';

//import firebase utilities
import { collection, addDoc, db } from '../../firebase/firebase.util';

//import styles
import './add-log-form.styles.scss';

//import components
import CustomButton from '../custom-button/custom-button.component';

const AddLog = () => {

    const [log, setLog] = useState('');
    const [date, setDate] = useState('');
    const [productiveHr, setProductiveHr] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //add to firebase
        const data = {
            log,
            date,
            productiveHr
        }


        try {
            const docRef = await addDoc(collection(db, 'logs'), data);
            alert("Log added")
        } catch (err) {
            console.log(err.message);
        }

    }

    return (
        <div className="add-log-container">
            <h2>Add Log</h2>

            <form onSubmit={(e) => handleSubmit(e)} >
                <div className="form-group">
                    <label className="form-label">Today's Log:</label>
                    <textarea className='form-input' value={log} onChange={(e) => setLog(e.target.value)}></textarea>
                </div>

                <div className='form-group'>
                    <label className="form-label">Date:</label>
                    <input type="date" onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="form-label">Productive Hrs:</label>
                    <input type="int" onChange={(e) => setProductiveHr(e.target.value)} />
                </div>

                <CustomButton type="submit" primary>Add Log</CustomButton>

            </form>
        </div>
    )
}

export default AddLog;