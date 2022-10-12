import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const initialState = {
  name: "",
  email: "",
  phone: "",
  address:""
}

function Add_Contact(){
  const [state,setState] = useState(initialState);
  const {name,email,phone, address} = initialState;
  const navigate = useNavigate();

function handleSubmit(e){
  e.preventDefault();
  addContact(state);
}

async function addContact(data) {
  const response = await axios.post('http://localhost:3001/contact', data);
  if (response.status ===200){
    alert(response.data);
  }
  navigate(-1);
}

function handleInputChange(e){
  let {name, value} = e.target;
  setState({...state,[name]:value})
}

  return (
    <div id = 'add' className='container add_container'>
        <button className= 'btn back_btn' onClick = {() => {navigate(-1)}}>Back</button>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type = "text" id = "name" name = "name" placeholder='Enter Name' onChange = {handleInputChange} defaultValue = {name} />
          <label>Email</label>
          <input type = "text" id = "email" name = "email" placeholder='Enter Email' onChange = {handleInputChange} defaultValue = {email} />
          <label>Phone</label>
          <input type = "text" id = "phone" name = "phone" placeholder='Enter Phone Number' onChange = {handleInputChange} defaultValue = {phone} />
          <label>Address</label>
          <input type = "text" id = "address" name = "address" placeholder='Enter Address' onChange = {handleInputChange} defaultValue = {address} />
          <input type = "submit" value = "Add" className='btn'/>
        </form>

    </div>
  )
}

export default Add_Contact
