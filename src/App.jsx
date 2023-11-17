import { useState, useEffect } from 'react'

import Welcome from "/src/components/Welcome"
import Survey from "/src/components/Survey"
import SurveyList from "/src/components/SurveyList"

import '/src/App.css'

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

  const [isSurvey, setIsSurvey] = useState("welcome")
  const [surveys, setSurveys] = useState(localStorage.getItem("survey"))

  useEffect(() => {
    localStorage.setItem("survey", JSON.stringify(surveys))
  }, [surveys])

  var appDisplay = <Welcome setIsSurvey={setIsSurvey} />

  if (isSurvey === "welcome") {
    appDisplay = <Welcome setIsSurvey={setIsSurvey} />
  } else if (isSurvey === "survey") {
    appDisplay = <Survey setSurveys={setSurveys} setIsSurvey={setIsSurvey} />
  } else if (isSurvey === "surveylist") {
    appDisplay = <SurveyList setIsSurvey={setIsSurvey} />
  }

  return (
    <>
      {appDisplay}
    </>
  )
}

export default App
