import React from 'react';


const Form = (props) => {
    return (
        <div className='input-form'>
            <form onSubmit={props.onSubmit} id='myForm'>
                <input  className='input' 
                type='text' 
                placeholder='Add to-do'  
                onChange={props.onChange}
                />
                <button className="fas fa-plus-circle add"></button>
            </form>
        </div>
    )    
}
   

export default Form;