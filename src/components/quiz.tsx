import React from "react";
import "./quiz.css";

export default function Quiz() { 

    return (

        <div className="quiz">
            <div>which era?</div>
            <div>Today</div>
            <div onClick={() => {}}>2010s</div>
            <div>2000s</div>
            <div>90s</div>
            <div>80s</div>
            <div>70s</div>
            <div>60s</div>
            <div>Oldies</div>
            <div>Surprise Me</div>
        </div>
    )
}