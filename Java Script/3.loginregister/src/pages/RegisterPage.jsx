/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <section className="register-page">
      <article className="text-center flex justify-center items-center h-screen flex-col">
        <h2 className=' text-blue-500 text-4xl p-10'>Create your account</h2>
        <RegisterInput register={onRegister} />
        <p>
          Already have an account?
          {' '}
          <Link to="/" className='text-red-500 hover:text-blue-500'>Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
