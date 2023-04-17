import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const accountDetail = ({ isLoggedIn }) => {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/account?api_key=1e05d6c6fe757614cf08f4083d927aaf&session_id=ca23c1bcc9a8d350a4c4bcd017745fc5d643c940"
      );
      setAccount(response.data);
      console.log(response.data);
    };

    fetchAccount();
  }, []);

  return (
    <div className="account">
      <container>
        <h2>Welcome to Next-Stream </h2>
        <div className="account-content">
          {account ? (
            <>
              <img
                src={`https://www.themoviedb.org/t/p/w150_and_h150_face${account.avatar.tmdb.avatar_path}`}
                alt="Gravatar"
              />
              <div className="account-detail">
                <h4>Username : {account.username}</h4>
                <h4>Name : {account.name}</h4>
                <h4>ID : {account.id}</h4>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </container>

      <button
        className="logout-button"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("session_id");
          navigate("/");
          alert("You Will Be Logout!");
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default accountDetail;
