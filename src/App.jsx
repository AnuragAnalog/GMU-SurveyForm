import { useState, useEffect } from 'react'

import Welcome from "/src/components/Welcome"
import Survey from "/src/components/Survey"
import SurveyList from "/src/components/SurveyList"

import '/src/App.css'

import { onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { surveyCollection, db } from '../firebase'

function App() {
  const [isSurvey, setIsSurvey] = useState("welcome")
  const [surveyOper, setSurveyOper] = useState("")
  const [surveys, setSurveys] = useState([])
  const [surveyId, setSurveyId] = useState(-1)

  useEffect(() => {
    if (surveyOper === "update") {
      console.log("Updated")
    }
  }, [surveys])

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
                        setSurveyId={setSurveyId}
                        setIsSurvey={setIsSurvey}
                        setSurveyOper={setSurveyOper} />
  } else if (isSurvey === "surveylist") {
    appDisplay = <SurveyList setIsSurvey={setIsSurvey}
                            surveys={surveys} />
  }

  async function updateSurvey(surveyId) {
    const docRef = doc(db, "survey", surveyId)
    await updateDoc(docRef)
  }

  return (
    <>
      {appDisplay}
    </>
  )
}

export default App
