// import React from 'react';
// import { useForm } from 'react-hook-form';

// interface IForm {
//     email: string;
//     password: string;
// }

// export const LoggedOutRouter = () => {
//     const { register, watch, handleSubmit, formState: { errors } } = useForm<IForm>();
//     const onSubmit = () => {
//         console.log(watch());
//     }
//     const onInvalid = () => {
//         console.log('cant create account');
//     }
//     return (
//         <div>
//             <h1>Logged out</h1>
//             <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
//                 <div>
//                     <input {...register("email", {
//                         required: 'this is required',
//                         pattern: /^[A-Za-z0-9._%+=]+@gmail.com$/,
//                     })} name='email' type='email' placeholder='email' />
//                     {errors.email?.message && <span className='font-bold text-red-600'>{errors.email?.message}</span>}
//                     {errors.email?.type === 'pattern' && (
//                         <span className='font-bold text-red-600'>Only gmail allowd</span>
//                     )}
//                 </div>
//                 <div>
//                     <input {...register("password", {
//                         required: true,
//                     })} name='password' type='password' placeholder='password' />
//                 </div>
//                 <button className='bg-yellow-300 text-white'>Submit</button>
//             </form>
//         </div>
//     )
// }
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreateAccount } from '../pages/create-account';
import { Login } from '../pages/login';

export const LoggedOutRouter = () => {
    return <Router>
        <Switch>
            <Route path="/create-account">
                <CreateAccount />
            </Route>
        <Route path="/">
            <Login />
        </Route>
        </Switch>
    </Router>;
};

//types이 뭘까