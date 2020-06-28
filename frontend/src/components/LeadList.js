import React from 'react'
import Lead from './Lead'

const LeadList = ({ leads }) => {

    return (
        <ul>
            {leads.map(lead =>
                <Lead key={lead.id} lead={lead} />
            )}
        </ul>
    )
}

export default LeadList