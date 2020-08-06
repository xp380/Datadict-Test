import React from 'react';

import styled from 'styled-components'

// const form = styled.div`
//     height: 40px;
//     display: flex;
//     padding: 10px;
// `;
const Wrapper = styled.section`
    width: 100%;
    margin-bottom: 2%;
`;
const Input = styled.input`
    display: block;
    width: 50%;
    height: 40px;
    margin-right: 5%;
    padding: 2%;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 2%;
    background-color: rgba(200, 219, 241, 0.7);
`;
// const add = styled.div`
//     background: none;
//     border: none;
//     color: rgba(200, 219, 241, 0.7);
//     margin-top: 6%;
//     font-size: large;
// `;
const Button = styled.button`
    height: 50px;
    width: 150px;
    text-align: center;
    display: block;
`;
const Form = (props) => {
    return (
        <Wrapper>
            <form onSubmit={props.onSubmit} id='myForm'>
                <Input  
                type='text' 
                placeholder='Add to-do'  
                onChange={props.onChange}
                />
                <Button>enter</Button>
            </form>
        </Wrapper>
    )    
}
   

export default Form;