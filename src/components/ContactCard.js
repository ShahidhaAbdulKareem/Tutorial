import React from 'react';
import user from '../images/trash.png';
const ContactCard = (props) => {
    const {id,name,email}=props.contact
    return (
        <div className='item'>
            <img className='ui avatar image ' src={user} alt="user" width="12px" height="12px"/>
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div> 
               
            </div>
            <i className='trash alternate outline icon' style={{color:"red",margintop:"7px"}}></i>
        </div>
    );
};

export default ContactCard;