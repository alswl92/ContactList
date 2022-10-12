import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Contacts = ()=> {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getContacts();
  },[]);

  async function getContacts() {
    const response = await axios.get('http://localhost:3001/contacts');
    if (response.status ===200){
      setData(response.data);
    }
  };

  async function deleteContact(id){
    if (window.confirm("Are you sure you want to delete this contact?")){
      const response = await axios.delete(`http://localhost:3001/contact/${id}`);
      if (response.status ===200){
        alert(response.data);
        getContacts();
      }
    }
  }

  return (
    <div id = 'contacts' className='container contacts_container'>
      <h2>My Contacts</h2>
      <table>
        <thead>
          <tr>
            <th> No.</th>
            <th> Name</th>
            <th> Email</th>
            <th> Phone </th>
            <th> Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item,index) => {
            return (
              <tr key ={index}>
                <th scope = 'row'>{index +1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td className='actionList'>
                  <Link to={`/edit/${item.id}`}>
                    <button className='btn btn-edit'>Edit</button>
                  </Link>
                  <button className='btn btn-delete' onClick={ () => {deleteContact(item.id)}}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Link to={`/add`}>
          <button className='btn btn-edit'>Add New Contact</button>
      </Link>
    </div>
  )
}

export default Contacts
