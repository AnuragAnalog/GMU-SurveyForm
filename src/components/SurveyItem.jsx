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

    async function deleteSurvey(surveyId) {
        const docRef = doc(db, "survey", surveyId)
        await deleteDoc(docRef)
    }

    return <>
        <div className="survey-item">
            <p className="survey-item-element">
                <EditableInput 
                        survey={data}
                        updateFunc={setData}
                        updateName="firstName"
                        updateType="text" /> 
                <EditableInput 
                        survey={data}
                        updateFunc={setData}
                        updateName="lastName"
                        updateType="text" />
            </p>
            <p className="survey-item-element">
                <EditableInput 
                        survey={data}
                        updateFunc={setData}
                        updateName="dateOfSurvey"
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
                            survey={data}
                            updateFunc={setData}
                            updateName="streetAddress"
                            updateType="text" />
                </p>
                <p className="survey-item-element">
                    <EditableInput
                            survey={data}
                            updateFunc={setData}
                            updateName="city"
                            updateType="text" />
                    <EditableInput
                            survey={data}
                            updateFunc={setData}
                            updateName="state"
                            updateType="text" />
                    <EditableInput
                            survey={data}
                            updateFunc={setData}
                            updateName="zipCode"
                            updateType="number" />
                </p>
                <p className="survey-item-element">
                    <EditableInput
                            survey={data}
                            updateFunc={setData}
                            updateName="phoneNumber"
                            updateType="number" />
                    <EditableInput
                            survey={data}
                            updateFunc={setData}
                            updateName="email"
                            updateType="email" />
                </p>
                <p className="survey-item-element">
                    <EditableInput
                            survey={data}
                            updateFunc={setData}
                            updateName="campus"
                            updateType="text" />
                    <EditableInput
                            survey={data}
                            updateFunc={setData}
                            updateName="interest"
                            updateType="text" />
                    <EditableInput
                            survey={data}
                            updateFunc={setData}
                            updateName="recommend"
                            updateType="text" />
                </p>
                <p className="survey-item-element">
                    <EditableInput 
                            survey={data}
                            updateFunc={setData}
                            updateName="comments"
                            updateType="text" />
                </p>
            </div>}
        </div>
    </>
}

export default SurveyItem;