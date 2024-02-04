import { useState } from 'react';
import {styled} from 'styled-components';
import Button from './Button';
import CustomInput from './Input';



const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full mx-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col grap-2 mb-6'>
        <CustomInput 
            label = "Eamil"
            type="email"
            invalid = {emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
        />

        <CustomInput 
            label = "Password"
            type="password"
            invalid = {passwordNotValid}
            onChange={(event) => handleInputChange('password', event.target.value)}
        />

      </div>
      <div className="flex justify-end gap-4">
        <button className='text-amber-400 hover:text-amber-500'>
          Create a new account
        </button>
        <Button onClick={handleLogin}>
            Sign In
        </Button>
      </div>
    </div>
  );
}
