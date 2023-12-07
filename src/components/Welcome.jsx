import "/src/App.css"

function Welcome(props) {
    return <>
        <div className="welcome">
            <h1 className="heading"> George Mason University - Survey Form </h1>
            <ul className="team-list">
                <li className="team-member"> Anurag Peddi - G01394826 </li>
                <li className="team-member"> Akash Ponnam - G01378189 </li>
                <li className="team-member"> Manideep Akula - G01380182 </li>
                <li className="team-member"> Naga Shiva Sai Myneni - G01399349 </li>
            </ul>
            <button className="survey-btn" onClick={() => props.setIsSurvey("survey")}> Survey Link </button>
            <button className="surveylist-btn" onClick={() => props.setIsSurvey("surveylist")}> Survey List </button>
        </div>
    </>
}

export default Welcome;