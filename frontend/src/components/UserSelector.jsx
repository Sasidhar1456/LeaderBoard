import React from 'react';

const UserSelector = ({ users, selected, setSelected, handleClaim }) => (
  
  <div>
  <select value={selected} onChange={(e) => setSelected(e.target.value)} className='bg-black border-gray-300 outline-1 rounded-md h-12 p-2 mr-2  max-w-54'>
    <option value="">Select a user</option>
    {users.map(user => (
      <option key={user._id} value={user._id}>{user.name}</option>
    ))}
  </select>
  <button onClick={handleClaim}>🎁 Claim</button>
  </div>
);

export default UserSelector;
