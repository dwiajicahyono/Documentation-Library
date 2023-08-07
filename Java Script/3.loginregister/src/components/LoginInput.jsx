import React from 'react';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  return (
    <form className="login-input flex flex-col">
      <input className='px-4 py-2 border rounded m-2' type="email" value={email} onChange={setEmail} placeholder="email" />
      <input className='px-4 py-2 border rounded m-2' type="password" value={password} onChange={setPassword} placeholder="Password" />
      <button className='m-2 bg-stone-400 rounded-lg px-4 py-2 hover:text-white hover:bg-blue-700' type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

export default LoginInput;
