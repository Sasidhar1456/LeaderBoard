import React, { useEffect, useState } from 'react';
import { getUsers, addUser, claimPoints, getHistory } from './api';
import UserSelector from './components/UserSelector';
import Leaderboard from './components/Leaderboard';
import AddUserForm from './components/AddUserForm';
import HistoryList from './components/HistoryList';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [lastClaimed, setLastClaimed] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchAll = async () => {
    const usersRes = await getUsers();
    const historyRes = await getHistory();
    setUsers(usersRes.data);
    setHistory(historyRes.data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleAddUser = async (name) => {

    if (name.trim() === "") {
      toast('Give a valid Name',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      return;
    }

    await addUser(name);
    toast('User ' + name + " added successfully",
      {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    fetchAll();
  };

  const handleClaim = async () => {
    if (!selectedUser) {
      toast('Select a valid User',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      return;
    };
    const res = await claimPoints(selectedUser);
    setLastClaimed(res.data.points);
    toast(lastClaimed + ' points awarded!',
      {
        icon: '🎉',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    fetchAll();
  };

  return (
    <div className='w-[100%] accent-[#242424] '>
      <div><Toaster position="top-center" reverseOrder={false} toastOptions={{
        duration: 2000, // auto-close after 3s
        style: {
          background: '#333',
          color: '#fff',
        },
      }}
        limit={1} /></div>
      <div className='w-[100vw] p-[1rem] flex flex-col items-center  border-blue gap-14'>
        <h1 className='text-2xl md:text-4xl'>🎯 Leaderboard Challenge</h1>

        <div className='flex flex-col md:flex-row justify-between gap-10  '>
          <AddUserForm onAdd={handleAddUser} />


          <UserSelector users={users} selected={selectedUser} setSelected={setSelectedUser} handleClaim={handleClaim} />

        </div>

        <div className='flex flex-col md:flex-row md:justify-between gap-10  '>



          <Leaderboard users={users} />
          <HistoryList history={history} />
        </div>
      </div>
    </div>
  );
}

export default App;
