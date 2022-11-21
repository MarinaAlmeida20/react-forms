import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register } = useForm();

    const onSubmit = () => { }

    return (
        <div className='app-container'>
            <div className='form-group'>
                <label>Name</label>
                <input type="text"
                    placeholder='Your name' {...register('name')} />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="email"
                    placeholder='Your email' {...register('email')} />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password"
                    placeholder='Password' {...register('password')} />
            </div>
            <div className='form-group'>
                <label>Profession</label>
                <select {...register('profession')}>
                    <option value='0'>Select your profession</option>
                    <option value='developer'>Developer</option>
                    <option value='other'>Other</option>
                </select>
            </div>
            <div className='form-group'>
                <div className='checkbox-group'>
                    <input type="checkbox"
                        placeholder='privacy-policy' {...register('privacyTerms')} />
                    <label>I agree with the privacy terms.</label>
                </div>
            </div>

            <div className='form-group'>
                <button onClick={onSubmit}>Sign up</button>
            </div>
        </div>
    )
}

export default Form