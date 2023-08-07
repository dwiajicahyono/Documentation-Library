/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section class="border border-blue-500">
      <article className="text-center flex justify-center items-center h-screen flex-col">
      <h1 className=' text-blue-500 text-4xl p-10'>Selamat datang, <br/> silahkan masuk untuk melanjutkan</h1>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register" className='text-red-500 hover:text-blue-500'>Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
