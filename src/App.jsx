import { useState, useEffect } from 'react'

import Welcome from "/src/components/Welcome.jsx"
import Survey from "/src/components/Survey.jsx"
import SurveyList from '/src/components/SurveyList.jsx'

import '/src/App.css'

import { surveyCollection, db } from '../firebase'

function App() {
  const [isSurvey, setIsSurvey] = useState("welcome")
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    localStorage.setItem("survey", JSON.stringify(surveys))
  }, [surveys])

  var appDisplay = <Welcome setIsSurvey={setIsSurvey} />

  if (isSurvey === "welcome") {
    appDisplay = <Welcome setIsSurvey={setIsSurvey} />
  } else if (isSurvey === "survey") {
    appDisplay = <Survey setSurveys={setSurveys} setIsSurvey={setIsSurvey} />
  } else {
    appDisplay = <SurveyList />
  }

  return (
    <>
      {appDisplay}
    </>
  )
}

export default App
