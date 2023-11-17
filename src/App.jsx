import { useState } from 'react'

import Welcome from "/src/components/Welcome.jsx"
import Survey from "/src/components/Survey.jsx"
import '/src/App.css'

function App() {
  const [isSurvey, setIsSurvey] = useState(false)

  return (
    <>
      {isSurvey ? (
        <Survey
          setIsSurvey={setIsSurvey}
        />
      ) : (
        <Welcome 
          setIsSurvey={setIsSurvey}
        />
      )}
    </>
  )
}

export default App
