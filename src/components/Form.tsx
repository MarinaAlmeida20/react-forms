import React from 'react'
import { useForm } from 'react-hook-form'

import validator from 'validator';

interface FormData {
    fullName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    profession: string;
    privacyTerms: boolean;
}

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch // to monitor password
    } = useForm<FormData>();

    const watchPassword = watch("password");

    // console.log({ errors })

    const onSubmit = (data: FormData) => {
        // console.log(data);
        alert(JSON.stringify(data))
    }

    return (
        <div className='app-container'>

            <div className='form-group'>
                <label>Full Name</label>
                <input
                    className={errors?.fullName && 'input-error'}
                    type="text"
                    placeholder='Your Full Name'
                    {...register('fullName',
                        {
                            required: true
                        })}
                />
                {errors?.fullName?.type === 'required' && (
                    <p className='error-message'>
                        Full Name is required.
                    </p>
                )}
            </div>

            <div className='form-group'>
                <label>Email</label>
                <input
                    className={errors?.email && 'input-error'}
                    type="email"
                    placeholder='Your email'
                    {...register('email', {
                        required: true,
                        validate: (value) => validator.isEmail(value)
                    })}
                />
                {errors?.email?.type === 'required' && (
                    <p className='error-message'>
                        Email is required.
                    </p>
                )}
                {errors?.email?.type === 'validate' && (
                    <p className='error-message'>
                        Email is invalid.
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
                <label>Confirm Password</label>
                <input
                    className={errors?.passwordConfirmation && 'input-error'}
                    type="password"
                    placeholder='Confirm Password'
                    {...register("passwordConfirmation", {
                        required: true,
                        validate: (value) => value === watchPassword,
                    })}
                />

                {errors?.passwordConfirmation?.type === "required" && (
                    <p className="error-message">
                        Password confirmation is required.
                    </p>
                )}

                {errors?.passwordConfirmation?.type === "validate" && (
                    <p className="error-message">
                        Passwords does not match.
                    </p>
                )}
            </div>

            <div className='form-group'>
                <label>Profession</label>
                <select
                    className={errors?.profession && 'input-error'}
                    defaultValue='0'
                    {...register('profession',
                        {
                            validate: (value) => {
                                return value !== '0';
                            }
                        })}
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
                        {...register("privacyTerms", {
                            validate: (value) => value === true,
                        })}
                    />
                    <label>
                        I agree with the privacy terms.
                    </label>
                </div>

                {errors?.privacyTerms?.type === "validate" && (
                    <p className="error-message">
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