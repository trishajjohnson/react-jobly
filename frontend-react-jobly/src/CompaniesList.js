import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import './CompaniesList.css';

function CompaniesList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            const endpoint = 'companies';
            let res = await JoblyApi.request(endpoint);
       
            setCompanies(res.companies);
        }
        getCompanies();
    
    }, []);


    return (
        <div className="CompaniesList">
            <h1>All Companies</h1>
            <div className="CompaniesList-list">
            {companies.map(c => (
                <CompanyCard company={c} />
            ))}      
            </div>
        </div>
    );
}

export default CompaniesList;