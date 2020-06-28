import React from 'react'

const LeadForm = ({ addLead, handleNameChange, handleEmailChange, handleMessageChange }) => {
    return (
        <div>
            <form onSubmit={addLead}>
                <div>
                    Name: <input onChange={handleNameChange} />
                </div>
                <div>
                    Email: <input onChange={handleEmailChange} />
                </div>
                <div>
                    Message: <input onChange={handleMessageChange} />
                </div>
                <button type='submit'>Add</button>
            </form>
        </div >

    )
}

export default LeadForm