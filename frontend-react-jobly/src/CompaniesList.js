import React, { useState, useEffect } from "react";
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import LoadingSpinner from "./LoadingSpinner";
import './CompaniesList.css';

function CompaniesList() {
    const [companies, setCompanies] = useState([]);

    const companiesList = [
        {
            handle: "anderson-arias-morrow",
            name: "Anderson, Arias and Morrow",
            description: "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
            numEmployees: 245,
            logoUrl: "/logos/logo3.png",
        },
        {
            handle: "arnold-berger-townsend",
            name: "Arnold, Berger and Townsend",
            description: "Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.",
            numEmployees: 795,
            logoUrl: null,
        },
        {
            handle: "ayala-buchanan",
            name: "Ayala-Buchanan",
            description: "Make radio physical southern. His white on attention kitchen market upon. Represent west open seven. Particularly subject billion much score thank bag somebody.",
            numEmployees: 309,
            logoUrl: null,
        },
        {
            handle: "baker-santos",
            name: "Baker-Santos",
            description: "Compare certain use. Writer time lay word garden. Resource task interesting voice.",
            numEmployees: 225,
            logoUrl: "/logos/logo3.png",
        },
        {
            handle: "bauer-gallagher",
            name: "Bauer-Gallagher",
            description: "Difficult ready trip question produce produce someone.",
            numEmployees: 862,
            logoUrl: null,
        }
    ];

    setCompanies(companiesList);

    // useEffect(() => {
    //     async function getCompanies() {
    //         const endpoint = 'companies';
    //         let res = await JoblyApi.request(endpoint);
       
    //         setCompanies(res.companies);
    //     }
    //     getCompanies();
    
    // }, []);


    // if (!companies) return <LoadingSpinner />;

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