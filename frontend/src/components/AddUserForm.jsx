import React, { useState } from 'react';

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    onAdd(name);
    setName('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input className='bg-black outline-1 rounded-md h-12 p-2 mr-2 max-w-54' value={name} onChange={(e) => setName(e.target.value)} placeholder="New User Name" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
