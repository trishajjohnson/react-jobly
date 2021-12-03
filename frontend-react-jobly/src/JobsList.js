import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import JobCardList from './JobCardList';
import './JobsList.css';

function JobsList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJobs() {
            const endpoint = 'jobs';
            let res = await JoblyApi.request(endpoint);
       
            setJobs(res.jobs);
        }
        getJobs();
    
    }, []);


    return (
        <div className="JobsList">
            <h1>All Jobs</h1>
            <div className="JobsList-list">
                <JobCardList jobs={jobs} />      
            </div>
        </div>
    );
}

export default JobsList;