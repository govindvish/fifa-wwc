import React from 'react';
import './spinner.css';

function Spinner(props){
    return (
        <div className="text-center pt-5">
            <div className="lds-dual-ring text-center"></div>
        </div>
        )
    }
    
export default Spinner;