import React from 'react';

const ViewLog = ({ data }) => {
    console.log(data)
    return (
        <div className="view-log-container">
            <h2>ViewLog</h2>

            {data.map((log, index) => (
                <p key={index}>{log.log}</p>
            ))}
        </div>
    )
}

export default ViewLog;