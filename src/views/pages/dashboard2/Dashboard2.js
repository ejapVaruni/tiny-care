import React, { useState, useEffect } from 'react'

const MyComponent = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await fetch('http://localhost:8108/sample/femalePatients')
        if (!response.ok) {
          // Handle non-successful responses
          throw new Error('Network response was not ok')
        }
        const jsonData = await response.json()
        setData(jsonData) // Update state with the fetched data
      } catch (error) {
        // Handle errors
        setError(error)
      } finally {
        setLoading(false) // Set loading to false regardless of success or failure
      }
    }

    fetchData() // Call the fetchData function when the component mounts
  }, []) // Empty dependency array means this effect runs only once after the component mounts

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  // Render the fetched data
  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  )
}

export default MyComponent
