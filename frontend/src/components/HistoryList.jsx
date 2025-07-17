import React from 'react';

const HistoryList = ({ history }) => (
  <div >
    <h3 className='text-lg md:text-2xl mb-4 '>📜 Claim History</h3>
    <ul className='border p-3 h-[10rem] overflow-y-auto '>
      {history.map((h, idx) => (
        <li key={idx}>
          {h.userId.name} claimed {h.points} points on {new Date(h.claimedAt).toLocaleString()}
        </li>
      ))}
    </ul>
  </div>
);

export default HistoryList;
