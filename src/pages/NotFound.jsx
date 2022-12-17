import React from "react";
import NotFound404 from '@logos/error-not-found.png';
import '@styles/NotFound.scss';

const NotFound = () => {
    //tod create  a 404 page
    return(
        <main className="container-error">
            <div className="error-image-container">
                <img className="error-image" src={NotFound404} alt="error 404" />
            </div>
            
        </main>
    )
}

export default NotFound;