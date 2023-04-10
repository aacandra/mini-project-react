import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const AccountDetail = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/account?api_key=1e05d6c6fe757614cf08f4083d927aaf&session_id=f150def54c1cb5e8529bfbc0dba258a3e78d1699');
      setAccount(response.data);
      console.log(response.data)
    };

    fetchAccount();
  }, []);

  return (
    <div className='account'>
        <container>
            <h2>Welcome to NextStream </h2>
         <div className='account-content'>
      {account ? (
        <>
          <img
            src={`https://www.gravatar.com/avatar/${account.avatar.gravatar.hash}`}
            alt="Gravatar"
          />
           <div className='account-detail'>
            <h4>Username : {account.username}</h4>
            <h4>Name : {account.name}</h4>
            </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
         </div>
      </container>
    </div>
    
  );
};

export default AccountDetail;
