import React, { useState, useEffect, useContext } from "react";
import JoblyApi from './api';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import currentUserContext from "./currentUserContext";
import LoadingSpinner from "./LoadingSpinner";
import { Redirect } from "react-router-dom";
import './JobsList.css';

function JobsList() {
    const { currentUser } = useContext(currentUserContext);
    const [jobs, setJobs] = useState([]);

    useEffect(function getJobsOnPageLoad() {
        search();
    }, []);


    async function search(title) {
        let res = await JoblyApi.getJobs(title);
        setJobs(res);
    }

    if (!jobs) return <LoadingSpinner />;

    if (!currentUser) {
        return <Redirect to="/login" />
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