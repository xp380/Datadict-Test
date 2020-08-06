import React from 'react';
import ToDo from '../ToDo/ToDo.js';
import styled from 'styled-components'


const mylist = styled.div`
    margin-top: 15%;
`;
const ToDoList = (props) => {
    const toDoList = props.lists.map(list => {
        return (
            <ToDo key={list.id} task={list.task} index={list.id} onDelete={props.onDelete}/>
        )
    })
    
    return (
        <div className='mylist'>
            { toDoList }
        </div>
    )
}

export default ToDoList;