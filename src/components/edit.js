import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const [state,setState] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(()=>{
        if(id){
            getSingleContact(id);
        }
    }, [id])

    async function getSingleContact(id) {
        const response = await axios.get(`http://localhost:3001/contact/${id}`);
      if (response.status ===200){
        setState({...response.data[0]});
      }
    }

    function handleInputChange(e){
        let {name, value} = e.target;
        setState({...state,[name]:value})
      }

      function handleSubmit(e){
        e.preventDefault();
        editContact(state, id);
      }
      async function editContact(data,id) {
        const response = await axios.put(`http://localhost:3001/contact/${id}`, data);
        if (response.status ===200){
          alert(response.data);
        }
        navigate(-1);
      }

  return (
        <div id = 'edit' className='container'>
            <button className= 'btn back_btn' onClick = {() => {navigate(-1)}}>Back</button>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type = "text" id = "name" name = "name" onChange = {handleInputChange} defaultValue = {state.name} />
          <label>Email</label>
          <input type = "text" id = "email" name = "email" onChange = {handleInputChange} defaultValue = {state.email} />
          <label>Phone</label>
          <input type = "text" id = "phone" name = "phone" onChange = {handleInputChange} defaultValue = {state.phone} />
          <label>Address</label>
          <input type = "text" id = "address" name = "address" onChange = {handleInputChange} defaultValue = {state.address} />
          <input type = "submit" value = "Edit" className='btn'/>
        </form>
    </div>
  )
}

export default Edit