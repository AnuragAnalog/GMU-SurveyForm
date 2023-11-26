import { useEffect, useState } from "react";

import EditableText from "/src/components/EditableText"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from '../../firebase'

import "/src/App.css";

function SurveyItem(props) {
    var { survey } = props
    const [isExpanded, setIsExpanded] = useState(false);

    function changeFirstName(firstName) {
        survey["firstName"] = firstName
    }

    function changeLastName(lastName) {
        survey["lastName"] = lastName
    }

    function changeDateOfSurvey(dateOfSurvey) {
        survey["dateOfSurvey"] = dateOfSurvey
    }

    function changeStreetAddress(streetAddress) {
        survey["streetAddress"] = streetAddress
    }

    function changeCity(city) {
        survey["city"] = city
    }

    function changeState(state) {
        survey["state"]
    }

    function changeZipCode(zipCode) {
        survey["zipCode"] = zipCode
    }

    function changePhoneNumber(phoneNumber) {
        survey["phoneNumber"] = phoneNumber
    }

    function changeEmail(email) {
        survey["email"] = email
    }

    function changeCampus(campus) {
        survey["campus"] = campus
    }

    function changeInterest(interest) {
        survey["interest"] = interest
    }

    function changeRecommend(recommend) {
        survey["recommend"] = recommend
    }

    function changeComments(comments) {
        survey["comments"] = comments
    }

    async function deleteSurvey(surveyId) {
        const docRef = doc(db, "survey", surveyId)
        await deleteDoc(docRef)
    }

    return <>
        <div className="survey-item">
            <p className="survey-item-element">
                <EditableText 
                        text={props.survey.firstName}
                        updateText={changeFirstName} /> 
                <EditableText 
                        text={props.survey.lastName}
                        updateText={changeLastName} />
                <EditableText 
                        text={props.survey.dateOfSurvey}
                        updateText={changeDateOfSurvey} />
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
                {/* <p className="survey-item-element"> {props.survey.streetAddress} </p>
                <p className="survey-item-element"> {props.survey.city}, {props.survey.state} {props.survey.zipCode} </p>
                <p className="survey-item-element"> {props.survey.phoneNumber}, {props.survey.email} </p>
                <p className="survey-item-element"> {props.survey.campus} </p>
                <p className="survey-item-element"> {props.survey.interest} </p>
                <p className="survey-item-element"> {props.survey.recommend} </p>
                <p className="survey-item-element"> {props.survey.comments} </p> */}
                <EditableText
                        text={props.survey.streetAddress}
                        updateText={changeStreetAddress} />
                <EditableText
                        text={props.survey.city}
                        updateText={changeCity} />
                <EditableText
                        text={props.survey.state}
                        updateText={changeState} />
                <EditableText
                        text={props.survey.phoneNumber}
                        updateText={changePhoneNumber} />
                <EditableText
                        text={props.survey.email}
                        updateText={changeEmail} />
                <EditableText 
                        text={props.survey.campus}
                        updateText={changeCampus} />
                <EditableText 
                        text={props.survey.interest}
                        updateText={changeInterest} />
                <EditableText 
                        text={props.survey.recommend}
                        updateText={changeRecommend} />
                <EditableText 
                        text={props.survey.comments}
                        updateText={changeComments} />
            </div>}
        </div>
    </>
}

export default SurveyItem;