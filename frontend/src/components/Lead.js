import React from 'react'

const Lead = ({ lead }) => {
    return (
        <li>{lead.name} - {lead.email} - {lead.message}</li>
    )
}

export default Lead