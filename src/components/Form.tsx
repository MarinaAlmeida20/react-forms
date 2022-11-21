import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    profession: string;
    privacyTerms: boolean;
}

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    console.log({ errors })

    // console.log('RENDER');

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className='app-container'>

            <div className='form-group'>
                <label>Name</label>
                <input
                    className={errors?.name && 'input-error'}
                    type="text"
                    placeholder='Your name'
                    {...register('name',
                        { required: true })}
                />
                {errors?.name?.type === 'required' && (
                    <p className='error-message'>
                        Name is required.
                    </p>
                )}
            </div>

            <div className='form-group'>
                <label>Email</label>
                <input
                    className={errors?.email && 'input-error'}
                    type="email"
                    placeholder='Your email'
                    {...register('email',
                        { required: true })}
                />
                {errors?.email?.type === 'required' && (
                    <p className='error-message'>
                        Email is required.
                    </p>
                )}
            </div>

            <div className='form-group'>
                <label>Password</label>
                <input
                    className={errors?.password && 'input-error'}
                    type="password"
                    placeholder='Password'
                    {...register('password',
                        { required: true, minLength: 7 })}
                />
                {errors?.password?.type === 'minLength' && (
                    <p className='error-message'>
                        Password must have at least 7 characters.
                    </p>
                )}
                {errors?.password?.type === 'required' && (
                    <p className='error-message'>
                        Password is required.
                    </p>
                )}
            </div>

            <div className='form-group'>
                <label>Profession</label>
                <select
                    {...register('profession',
                        {
                            validate: (value) => {
                                return value !== '0';
                            }
                        })}
                    className={errors?.profession && 'input-error'}
                >
                    <option value='0'>Select your profession</option>
                    <option value='developer'>Developer</option>
                    <option value='other'>Other</option>
                </select>
                {errors?.profession?.type === 'validate' && (
                    <p className='error-message'>
                        Profession in required.
                    </p>
                )}
            </div>

            <div className='form-group'>
                <div className='checkbox-group'>
                    <input
                        type="checkbox"
                        name='privacy-policy'
                        {...register('privacyTerms',
                            { required: true })}
                    />
                    <label>
                        I agree with the privacy terms.
                    </label>
                </div>
                {errors?.privacyTerms?.type === 'required' && (
                    <p className='error-message'>
                        You must agree with the privacy terms.
                    </p>
                )}
            </div>

            <div className='form-group'>
                <button onClick={() => handleSubmit(onSubmit)()}>Sign up</button>
            </div>
        </div>
    )
}

export default Form