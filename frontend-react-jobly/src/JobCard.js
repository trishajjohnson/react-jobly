import React, { useState, useContext, useEffect } from "react";
import currentUserContext from "./currentUserContext";
import './JobCard.css';

function JobCard({job}) {
    const { hasApplied, applyToJob } = useContext(currentUserContext);
    const [applied, setApplied] = useState();

    useEffect(function updateAppliedStatus() {
        setApplied(hasApplied(job.id));
    }, [job.id, hasApplied]);
    
    function handleClick(evt) {
        evt.preventDefault();
        if(hasApplied(job.id)) return; 
        applyToJob(job.id);
        setApplied(true);
    }

    return (
        
        <div className="JobCard">
            <div className="JobCard-body">  
                <h6 className="card-title">
                    {job.title}
                </h6>
                <p>{job.companyName}</p>  
                <div>
                    <small>Salary: {job.salary}</small>    
                </div>  
                <div>
                    <small>Equity: {job.equity}</small>    
                </div>
                <button 
                onClick={handleClick}
                disabled={applied}
                className="apply"
                >
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>            
        </div>         
        
    );
}

export default JobCard;