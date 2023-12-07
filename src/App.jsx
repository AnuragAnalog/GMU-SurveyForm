import { useState, useEffect } from 'react'

import Welcome from "/src/components/Welcome"
import Survey from "/src/components/Survey"
import SurveyList from "/src/components/SurveyList"

import '/src/App.css'

import { onSnapshot } from "firebase/firestore";
import { surveyCollection } from '../firebase'

function App() {
  const [isSurvey, setIsSurvey] = useState("welcome")
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(surveyCollection, function(snapshot) {
      const surveyArr = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })

      setSurveys(surveyArr)
    })

    return unsubscribe
  }, [])

  var appDisplay = <Welcome setIsSurvey={setIsSurvey} />

  if (isSurvey === "welcome") {
    appDisplay = <Welcome setIsSurvey={setIsSurvey} />
  } else if (isSurvey === "survey") {
    appDisplay = <Survey setSurveys={setSurveys}
                        setIsSurvey={setIsSurvey} />
  } else if (isSurvey === "surveylist") {
    appDisplay = <SurveyList setIsSurvey={setIsSurvey}
                            setSurveys={setSurveys}
                            surveys={surveys} />
  }

  return (
    <>
      {appDisplay}
    </>
  )
}

export default App
