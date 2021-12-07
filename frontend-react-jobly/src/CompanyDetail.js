import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import JobCardList from './JobCardList';
import LoadingSpinner from "./LoadingSpinner";
import './CompanyDetail.css';

function CompanyDetail() {
    const [company, setCompany] = useState(null);
    const {handle} = useParams();
    console.log(handle);
    console.log(typeof handle);
    
    useEffect(() => {
        async function getCompanyDetails() {
            console.log("before AJAX call")
            let res = await JoblyApi.getCompany(handle);
            console.log("res", res);
            setCompany(res);
        }
        getCompanyDetails();
    }, []);
    

    if(!company) return <LoadingSpinner />;

    return (

        <div>

            <div className="CompanyDetail">
                <h4>{company.name}</h4>
                <p>{company.description}</p>
                <div className="JobsList">  
                    <JobCardList jobs={company.jobs} /> 
                </div>                
            </div> 

        </div>
        
    );
}

export default CompanyDetail;