import { useState, useEffect } from 'react'

import Welcome from "/src/components/Welcome"
import Survey from "/src/components/Survey"
import SurveyList from "/src/components/SurveyList"

import '/src/App.css'

import { onSnapshot, addDoc, doc, deleteDoc, setDoc, updateDoc } from "firebase/firestore";
import { surveyCollection, db } from '../firebase'

function App() {
  localStorage.setItem("survey", JSON.stringify([{
    firstName: "Anurag",
    lastName: "Peddi",
    streetAddress: "4309F, Ramona Drive",
    city: "Fairfax",
    state: "VA",
    zipCode: 22030,
    phoneNumber: 7034596402,
    email: "anurag.peddi1998@gmail.com",
    dateOfSurvey: "12/30/1998",
    campus: ["Campus"],
    interest: "Football",
    recommend: "Yes",
    comments: "Good"
  }, {
    firstName: "Theertha",
    lastName: "CT",
    streetAddress: "H.No: 342, Ward No: 17, Cheriyytil, Nadapuram, Kummankode",
    city: "Kozhikode",
    state: "Kerala",
    zipCode: 673504,
    phoneNumber: 8921679656,
    email: "cttheertha1998@gmail.com",
    dateOfSurvey: "1/1/1998",
    campus: ["Campus"],
    interest: "Cricket",
    recommend: "Yes",
    comments: "Very Good"
  }
  ]))

  var surveyIds = []
  const [isSurvey, setIsSurvey] = useState("welcome")
  const [surveyOper, setSurveyOper] = useState("")
  const [surveys, setSurveys] = useState([])
  const [surveyId, setSurveyId] = useState(-1)

  useEffect(() => {
    if (surveyOper === "add") {
      addSurvey()
    } else if (surveyOper === "update") {
      console.log("Updated")
    } else if (surveyOper === "delete") {
      deleteSurvey()
    }
  }, [surveys])

  useEffect(() => {
    const unsubscribe = onSnapshot(surveyCollection, function(snapshot) {
      const surveyArr = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })

      surveyIds = surveyArr.map((survey) => {
        return survey.id
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
                            surveys={surveys}
                            setSurveyOper={setSurveyOper}
                            setSurveyId={setSurveyId} />
  }

  async function addSurvey() {
    for (var i; i < surveys.length; i++) {
        if (!surveyIds.includes(surveys[i].id)) {
          await addDoc(surveyCollection, surveys[i])
        }
    }
    // const newSurvey = surveys.filter((survey) => survey.id === surveyId)
    // console.log(newSurvey)

    // await addDoc(surveyCollection, newSurvey[0])
    // setSurveyId(-1)
  }

  async function updateSurvey(surveyId) {
    const docRef = doc(db, "survey", surveyId)
    await updateDoc(docRef)
  }

  async function deleteSurvey() {
    const docRef = doc(db, "survey", surveyId)
    setSurveyId(-1)
    await deleteDoc(docRef)
  }

  return (
    <>
      {appDisplay}
    </>
  )
}

export default App
