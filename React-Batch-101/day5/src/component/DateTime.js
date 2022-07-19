import React, { useEffect, useState } from 'react'

const DateTime = () => {
    const [dateTime, setDateTime] = useState()
    const getCurrentDT = () => {
        const dt = new Date().toLocaleString() // using date object and converting it to a string
        setDateTime(dt)
    }

    const [refresh, setRefresh] = useState(0)
    const handleDTChange = () => {
        setRefresh(prev => prev + 1)
    }

    useEffect(() => {
        getCurrentDT()
    }, [refresh])

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "2rem", gap: "1rem" }}>
            <h2>Date Time</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                {dateTime && dateTime}
            </div>
            <button onClick={handleDTChange}>Refresh DateTime</button>
        </div>
    )
}

export default DateTime