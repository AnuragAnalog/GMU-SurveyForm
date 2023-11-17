import "/src/App.css"

function Welcome(props) {
    return <>
        <div className="welcome">
            <h1 className="heading"> George Mason University - Survey Form </h1>
            <ul className="team-list">
                <li className="team-member"> Anurag Peddi - G01394826 </li>
                <li className="team-member"> Akash Ponnam - G </li>
                <li className="team-member"> Manideep Akula - G </li>
                <li className="team-member"> Naga Shiva Sai Myneni - G </li>
            </ul>
            <button className="survey-btn" onClick={() => props.setIsSurvey("survey")}> Survey Link </button>
        </div>
    </>
}

export default Welcome;