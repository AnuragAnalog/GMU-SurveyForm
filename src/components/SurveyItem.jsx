import { useEffect, useState } from "react";

import EditableInput from "/src/components/EditableInput"
import { doc, setDoc, deleteDoc } from "firebase/firestore"
import { db } from '../../firebase'

import "/src/App.css";

function SurveyItem(props) {
    const [data, setData] = useState(props.survey)
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        updateSurvey(data)
    }, [data])

    async function updateSurvey(survey) {
        const docRef = doc(db, "survey", survey["id"])
        await setDoc(docRef, survey, { merge: true })
    }

    function changeFirstName(firstName) {
        setData({ ...data, "firstName": firstName})
    }

    function changeLastName(lastName) {
        setData({ ...data, "lastName": lastName})
    }

    function changeDateOfSurvey(dateOfSurvey) {
        setData({ ...data, "dateOfSurvey": dateOfSurvey})
    }

    function changeStreetAddress(streetAddress) {
        setData({ ...data, "streetAddress": streetAddress})
    }

    function changeCity(city) {
        setData({ ...data, "city": city})
    }

    function changeState(state) {
        setData({ ...data, "state": state})
    }

    function changeZipCode(zipCode) {
        setData({ ...data, "zipCode": zipCode})
    }

    function changePhoneNumber(phoneNumber) {
        setData({ ...data, "phoneNumber": phoneNumber})
    }

    function changeEmail(email) {
        setData({ ...data, "email": email})
    }

    function changeCampus(campus) {
        setData({ ...data, "campus": campus})
    }

    function changeInterest(interest) {
        setData({ ...data, "interest": interest})
    }

    function changeRecommend(recommend) {
        setData({ ...data, "recommend": recommend})
    }

    function changeComments(comments) {
        setData({ ...data, "comments": comments})
    }

    async function deleteSurvey(surveyId) {
        const docRef = doc(db, "survey", surveyId)
        await deleteDoc(docRef)
    }

    return <>
        <div className="survey-item">
            <p className="survey-item-element">
                <EditableInput 
                        text={props.survey.firstName}
                        updateValue={changeFirstName}
                        updateType="text" /> 
                <EditableInput 
                        text={props.survey.lastName}
                        updateValue={changeLastName}
                        updateType="text" />
            </p>
            <p className="survey-item-element">
                <EditableInput 
                        text={props.survey.dateOfSurvey}
                        updateValue={changeDateOfSurvey}
                        updateType="date" />
            </p>
            <div className="survey-item-buttons">
                <button className="details-btn" onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
                    {isExpanded ? "Hide Details" : "Show Details"}
                </button>
                <button className="delete-btn" onClick={() => deleteSurvey(props.survey.id)}>
                    Delete
                </button>
            </div>
            {isExpanded && <div className="survey-item-details">
                <h3 className="survey-item-heading"> Survey Details </h3>
                <p className="survey-item-element">
                    <EditableInput
                            text={props.survey.streetAddress}
                            updateValue={changeStreetAddress}
                            updateType="text" />
                </p>
                <p className="survey-item-element">
                    <EditableInput
                            text={props.survey.city}
                            updateValue={changeCity}
                            updateType="text" />
                    <EditableInput
                            text={props.survey.state}
                            updateValue={changeState}
                            updateType="text" />
                    <EditableInput
                            text={props.survey.zipCode}
                            updateValue={changeZipCode}
                            updateType="number" />
                </p>
                <p className="survey-item-element">
                    <EditableInput
                            text={props.survey.phoneNumber}
                            updateValue={changePhoneNumber}
                            updateType="number" />
                    <EditableInput
                            text={props.survey.email}
                            updateValue={changeEmail}
                            updateType="email" />
                </p>
                <p className="survey-item-element">
                    <EditableInput
                            text={props.survey.campus}
                            updateValue={changeCampus}
                            updateType="text" />
                    <EditableInput
                            text={props.survey.interest}
                            updateValue={changeInterest}
                            updateType="text" />
                    <EditableInput
                            text={props.survey.recommend}
                            updateValue={changeRecommend}
                            updateType="text" />
                </p>
                <p className="survey-item-element">
                    <EditableInput 
                            text={props.survey.comments}
                            updateValue={changeComments}
                            updateType="text" />
                </p>
            </div>}
        </div>
    </>
}

export default SurveyItem;