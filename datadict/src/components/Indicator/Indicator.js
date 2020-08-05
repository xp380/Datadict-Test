import React from 'react';


const Indicator = (props) => {
    return (
        <div className='header'>
            <h3>{`You have  
            ${props.number}  
            ${props.number === 1 ? " task" : " tasks" }`}
            </h3>
        </div>
    ) 
}
       

export default Indicator;