import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LeadList from './components/LeadList'
import LeadForm from './components/LeadForm'

const App = () => {
    const [leads, setLeads] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios
            .get('api/lead/')
            .then(response => {
                setLeads(response.data)
            })
            .catch(error => {
                alert('The house is on fire')
            })
    }, [])

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    const addLead = (event) => {
        event.preventDefault()
        const leadObject = {
            name: name,
            email: email,
            message: message
        }
        axios
            .post('http://127.0.0.1:8000/api/lead/', leadObject)
            .then(response => {
                setLeads(leads.concat(response.data))
                setName('')
                setEmail('')
                setMessage('')
            })
    }
    return (
        <div>
            <h1>Leads</h1>
            <LeadForm
                addLead={addLead}
                handleNameChange={handleNameChange}
                handleEmailChange={handleEmailChange}
                handleMessageChange={handleMessageChange}
            />
            <LeadList leads={leads} />
        </div>
    )
}

export default App