import React from 'react';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  return (
    <form className="login-input flex flex-col">
      <input className='px-4 py-2 border rounded m-2' type="text" value={name} onChange={setName} placeholder="Name" />
      <input className='px-4 py-2 border rounded m-2' type="text" value={email} onChange={setEmail} placeholder="example@dwi.com" />
      <input className='px-4 py-2 border rounded m-2' type="password" value={password} onChange={setPassword} placeholder="Password" />
      <button className='m-2 bg-stone-400 rounded-lg px-4 py-2 hover:text-white hover:bg-blue-700' type="button" onClick={() => register({ name, email, password })}>Register</button>
    </form>
  );
}

export default RegisterInput;
