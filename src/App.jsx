// Importing necessary hooks and components from React and Firebase

import { useState, useEffect } from 'react'
import Welcome from "/src/components/Welcome"
import Survey from "/src/components/Survey"
import SurveyList from "/src/components/SurveyList"
import '/src/App.css' // Importing a CSS file for styling

// Importing Firestore functions and the surveyCollection from Firebase
import { onSnapshot } from "firebase/firestore";
import { surveyCollection } from '../firebase'

// Functional component named App
function App() {
  // State variables using the useState hook
  const [isSurvey, setIsSurvey] = useState("welcome") // State to manage the current view
  const [surveys, setSurveys] = useState([]) // State to manage survey data

  // useEffect hook to subscribe to changes in the surveyCollection from Firestore
  useEffect(() => {
    // Subscription to the 'surveyCollection' using onSnapshot
    const unsubscribe = onSnapshot(surveyCollection, function(snapshot) {
      // Mapping through the retrieved documents to create an array of survey data
      const surveyArr = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })

      // Setting the 'surveys' state with the updated array of survey data
      setSurveys(surveyArr)
    })

    // Cleanup function to unsubscribe from the snapshot listener when the component unmounts
    return unsubscribe
  }, []) // Empty dependency array ensures this effect runs only once after the initial render

  // Variable 'appDisplay' holds the JSX content to be displayed based on 'isSurvey'
  var appDisplay = <Welcome setIsSurvey={setIsSurvey} />

  // Conditionally setting 'appDisplay' based on the value of 'isSurvey'
  if (isSurvey === "welcome") {
    appDisplay = <Welcome setIsSurvey={setIsSurvey} />
  } else if (isSurvey === "survey") {
    appDisplay = <Survey setSurveys={setSurveys} setIsSurvey={setIsSurvey} />
  } else if (isSurvey === "surveylist") {
    appDisplay = <SurveyList setIsSurvey={setIsSurvey} setSurveys={setSurveys} surveys={surveys} />
  }

  // Return statement rendering the component content based on 'appDisplay'
  return (
    <>
      {appDisplay}
    </>
  )
}

// Exporting the App component as default
export default App