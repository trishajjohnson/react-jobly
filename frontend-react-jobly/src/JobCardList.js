import React from "react";
import JobCard from './JobCard';
import './JobCardList.css';

function JobCardList({jobs}) {
    console.log("jobs", jobs)
    return (
        <div className="JobCardList">
            <div className="JobCardList-list">
                {jobs.map(j => (
                    <JobCard job={j} />
                ))}      
            </div>
        </div>
    );
}

export default JobCardList;