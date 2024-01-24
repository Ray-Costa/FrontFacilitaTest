import {useForm} from 'react-hook-form';
import {registerformSchema} from './registerform.schema.js';
import {zodResolver} from '@hookform/resolvers/zod';
import ErrorToast from '../Toast/index.jsx';
import {useState} from 'react';
import {AcessRouterModal} from '../AcessRouterModal/index.jsx';



export const RegisterForm = ({onSubmit}) => {

    const {
        register, handleSubmit, reset, formState: {errors},
    } = useForm(
        {
            resolver: zodResolver(registerformSchema),
        }
    );


    const _onSubmit = async (data) => {
        try {
            await onSubmit(data);
            reset();
        } catch (error) {
            console.log(error);
            return <ErrorToast message={error} />;
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit(_onSubmit)}>
            <div className="divForm">
                <div className="div">
                    <label className="label" htmlFor="">Nome</label>
                    <input className="input" type="text" {...register('name')}/>
                    {errors ? <p className="error">{errors.name?.message}</p> : null}
                </div>
                <div className="div">
                    <label className="label" htmlFor="">Email</label>
                    <input className="input" type="text" {...register('email')}/>
                    {errors ? <p className="error">{errors.email?.message}</p> : null}
                </div>
                <div className="div">
                    <label className="label" htmlFor="">Telefone</label>
                    <input className="input" type="text" {...register('phoneNumber')}/>
                    {errors ? <p className="error">{errors.phoneNumber?.message}</p> : null}
                </div>
                <div className="div">
                    <label className="label" htmlFor="">X</label>
                    <input className="input" type="text" {...register('x')}/>
                    {errors ? <p className="error">{errors.x?.message}</p> : null}
                </div>
                <div className="div">
                    <label className="label" htmlFor="">Y</label>
                    <input className="input" type="text" {...register('y')}/>
                    {errors ? <p className="error">{errors.y?.message}</p> : null}
                </div>
                <button className="button" type="submit">Cadastrar</button>

            </div>

        </form>
    );
};
