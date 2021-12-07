import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import './JobsList.css';

function JobsList() {
    const [jobs, setJobs] = useState([]);

    useEffect(function getJobsOnPageLoad() {
        search();
    }, []);


    async function search(title) {
        let res = await JoblyApi.getJobs(title);
        setJobs(res);
    }

    return (
        <div className="JobsList">
            <SearchForm searchFor={search} />
            {jobs.length ? 
                (
                    <div className="JobsList-list">
                        <JobCardList jobs={jobs} />      
                    </div>
                ) : (
                    <p>No results found.</p>
                )}
        </div>
    );
}

export default JobsList;