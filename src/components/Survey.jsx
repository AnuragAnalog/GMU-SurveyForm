// Importing necessary hooks and components from React and Firebase
import { useState } from "react"
import { addDoc } from "firebase/firestore";
import { surveyCollection } from '../../firebase'

// Importing a CSS file for styling (assuming it contains styles for this component)
import "/src/App.css"

// Functional component named Survey
function Survey(props) {
    // State variable using the useState hook to manage user information for the survey
    const [userInfo, setUserInfo] = useState({
        // Initial state object with various fields for survey information
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: 0,
        phoneNumber: 0,
        email: "",
        dateOfSurvey: "",
        campus: [],
        interest: "",
        recommend: "",
        comments: ""
    })

    // Function to handle changes in form input fields
    function handleChange(event) {
        // Extracting 'name' and 'value' from the input field
        const { name, value } = event.target

        // Updating the 'userInfo' state using functional updates
        setUserInfo(prevUserInfo => {
            return {
                ...prevUserInfo,
                [name]: value // Updating the field specified by 'name' with the provided 'value'
            }
        })
    }

    // Asynchronous function to add a survey to the Firestore database
    async function addSurvey(newSurvey) {
        await addDoc(surveyCollection, newSurvey) // Adding the new survey to Firestore
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault() // Preventing the default form submission behavior

        // Updating the surveys state in the parent component using 'setSurveys'
        props.setSurveys(prevSurveys => [...prevSurveys, userInfo])

        // Adding the survey to the Firestore database
        addSurvey(userInfo)

        event.target.reset() // Resetting the form after submission
    }

    // Function to reset the form fields
    function resetForm() {
        // Resetting the 'userInfo' state to clear all form fields
        setUserInfo({
            firstName: "",
            lastName: "",
            streetAddress: "",
            city: "",
            state: "",
            zipCode: 0,
            phoneNumber: 0,
            email: "",
            dateOfSurvey: "",
            campus: [],
            interest: "",
            recommend: "",
            comments: ""
        })
    }

    return <>
        <form className="survey" onChange={handleChange} onSubmit={handleSubmit}>
            <h1 className="heading"> Survey Form </h1>
            <input className="survey-input" type="text" name="firstName" placeholder="First Name" required/>
            <input className="survey-input" type="text" name="lastName" placeholder="Last Name" required/>
            <input className="survey-input" type="text" name="streetAddress" placeholder="Street Address" required/>
            <input className="survey-input" type="text" name="city" placeholder="City" required/>
            <input className="survey-input" type="text" name="state" placeholder="State" required/>
            <input className="survey-input" type="number" name="zipCode" placeholder="Zip Code" required/>
            <input className="survey-input" type="number" name="phoneNumber" placeholder="Phone Number" required/>
            <input className="survey-input" type="email" name="email" placeholder="Email" required/>
            <input className="survey-input" type="date" name="dateOfSurvey" placeholder="Date of Survey" required/>

            <h4 className="subheading"> What do you like the most about the Campus. </h4>
            <label className="campus">
                <input className="survey-check" type="checkbox" name="campus" value="students"/>
                Students
            </label>
            <label className="campus">
                <input className="survey-check" type="checkbox" name="campus" value="location"/>
                Location
            </label>
            <label className="campus">
                <input className="survey-check" type="checkbox" name="campus" value="campus"/>
                Campus
            </label>
            <label className="campus">
                <input className="survey-check" type="checkbox" name="campus" value="atmosphere"/>
                Atmosphere
            </label>
            <label className="campus">
                <input className="survey-check" type="checkbox" name="campus" value="dorm-rooms"/>
                Dorm Rooms
            </label>
            <label className="campus">
                <input className="survey-check" type="checkbox" name="campus" value="sports"/>
                Sports
            </label>

            <h4 className="subheading"> How they became interested in the University </h4>
            <label className="interest">
                <input className="survey-radio" type="radio" name="interest" value="friends"/>
                Friends
            </label>
            <label className="interest">
                <input className="survey-radio" type="radio" name="interest" value="internet"/>
                Internet
            </label>
            <label className="interest">
                <input className="survey-radio" type="radio" name="interest" value="school"/>
                School
            </label>
            <label className="interest">
                <input className="survey-radio" type="radio" name="interest" value="sports"/>
                Sports
            </label>
            <label className="interest">
                <input className="survey-radio" type="radio" name="interest" value="other"/>
                Other
            </label>

            <h4 className="subheading"> Would you recommend to other Students </h4>
            <select className="survey-select" name="recommend">
                <option value="very-likely"> Very Likely </option>
                <option value="likely"> Likely </option>
                <option value="unlikely"> Unlikely </option>
            </select>

            <h4 className="subheading"> Additional Comments </h4>
            <textarea className="survey-textarea" name="comments" placeholder="Additional Comments" />

            <div className="survey-buttons">
                <button className="submit-btn"> Submit </button>
                <button className="cancel-btn" onClick={resetForm}> Clear </button>
            </div>
        </form>
        <button className="back-btn" onClick={() => props.setIsSurvey("welcome")}> Back </button>
    </>
}

export default Survey;