import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';

function CompanyCard({company}) {

    return (
        <Link to={`/companies/${company.handle}`}>
            <div className="CompanyCard">
                <div className="CompanyCard-body">  
                    <h6 className="card-title">
                        {company.name}
                    </h6>
                    <p>{company.description}</p>    
                </div>
                
            </div>         
        </Link> 

    );
}

export default CompanyCard;
