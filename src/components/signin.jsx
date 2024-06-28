import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRepasswordChange(e) {
    setRepassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== repassword) {
      console.error("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/signin', {
        userName,
        email,
        password
      });
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error("Error signing up", error);
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9'
      }}>
        <input
          type="text"
          placeholder="Username"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            boxSizing: 'border-box'
          }}
          value={userName}
          onChange={handleUserNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            boxSizing: 'border-box'
          }}
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            boxSizing: 'border-box'
          }}
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Re-enter Password"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            boxSizing: 'border-box'
          }}
          value={repassword}
          onChange={handleRepasswordChange}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signin;
