import React from 'react';
import styles from './Register.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Register = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Create an account</h2>
        </div>
        <form className={styles.register}>
          <div className={styles.login}>
            <input type='text' id='login' placeholder='Login' minLength='6' required />
          </div>
          <div className={styles.email}>
            <input type='email' id='email' placeholder='E-mail' required />
          </div>
          <div className={styles.password}>
            <input
              type='password'
              id='confirm password'
              placeholder='Password'
              minLength='8'
              required
            />
            <FontAwesomeIcon icon={faEye} className={styles.icon} />
          </div>
          <div className={styles.password}>
            <input
              type='password'
              id='confirm password'
              placeholder='Confirm password'
              minLength='8'
              required
            />
            <FontAwesomeIcon icon={faEye} className={styles.icon} />
          </div>
          <Button className={styles.button} onClick={event => event.preventDefault()}>
            Sign up
          </Button>
        </form>
      </div>
    </div>
  </div>
);

export default Register;
