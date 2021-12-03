import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from './api';
import JobCardList from './JobCardList';
import './CompanyDetail.css';

function CompanyDetail() {
    const [company, setCompany] = useState([]);
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
    }, [handle]);
    
    console.log("company", company)
    return (
        
        <div className="CompanyDetail">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <div className="JobsList">  
                <JobCardList jobs={company.jobs} /> 
            </div>                
        </div>         
        
    );
}

export default CompanyDetail;