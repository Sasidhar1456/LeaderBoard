import React from 'react';

const Leaderboard = ({ users }) => (
  <div>
    <h3 className='text-lg md:text-2xl mb-4'>🏆 Leaderboard</h3>
    <ul className='border p-2 h-[10rem] overflow-y-auto'>
      {users.map((user, index) => (
        <li key={user._id}>
          {index + 1}. {user.name} - {user.totalPoints} pts
        </li>
      ))}
    </ul>
  </div>
);

export default Leaderboard;
