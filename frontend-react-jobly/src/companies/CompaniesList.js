import React, { useState, useEffect, useContext } from "react";
import JoblyApi from '../api';
import CompanyCard from './CompanyCard';
import LoadingSpinner from "../LoadingSpinner";
import SearchForm from '../SearchForm';
import currentUserContext from "../currentUserContext";
import { Redirect } from "react-router-dom";
import './CompaniesList.css';

function CompaniesList() {
    const { currentUser } = useContext(currentUserContext);
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnPageLoad() {
        // const endpoint = 'companies';
        // let res = await JoblyApi.getCompanies(endpoint);
        // setCompanies(res);
        search();
        // getCompanies(); 
    }, []);

    async function search(name) {
        let res = await JoblyApi.getCompanies(name);
        console.log("searching...");
        console.log(res);
        setCompanies(res);
    }

    if (!companies) return <LoadingSpinner />;

    if (!currentUser) {
        return <Redirect to="/login" />
    }

    return (
        <div className="CompaniesList">
            <SearchForm searchFor={search} />
            {companies.length ? 
                (
                    <div className="CompaniesList-list">
                    {companies.map(c => (
                        <CompanyCard company={c} />
                    ))}      
                    </div>
                ) : (
                    <p>No results found.</p>
                )}
        </div>
    );
}

export default CompaniesList;