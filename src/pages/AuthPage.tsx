import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../redux/actions/auth';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

type IFormInput = {
  email:string
  password:string
}

const schema = yup.object().shape({
  email:yup.string().email('Некорректный адрес электронной почты').required(),
  password:yup.string().matches(/^\S*$/, 'Whitespace is not allowed').matches(/[A-Z]/).min(8, 'Пароль должен содержать не менее 8 символов без пробелов с одной заглавной буквой').required()
})

export const Login:React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loadingForm, setLoadingForm] = React.useState<boolean>(false)
  const [data, setData] = React.useState<IFormInput>({email:'', password:''})
  const auth = useTypedSelector(state => state.auth.auth)
  
  const setValues = <T extends IFormInput>(values:T):void => {
    setData(({
      ...data,
      ...values
    }))
  }

  const [darkMode, setDarkMode] = React.useState(false)
   
  React.useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.form-theme-input')!
    if(darkMode === true) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    defaultValues: {
      email:data.email,
      password:data.password
    },
    mode:'onBlur',
    resolver:yupResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoadingForm(true)
      setTimeout(() => {
        setValues(data)
        navigate('/')
        reset()
      }, 3000)
  };

  const handlerChangeAuth = () => {
    setTimeout(() => {
      dispatch(setAuth(!auth))
    }, 3000)
  }   

  return (
    <>
      <div className='container'>
      <div className="form-check form-switch form-theme">
        <input 
          onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} 
          className="form-check-input form-theme-input" 
          type="checkbox"/>
      </div>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <div className='text-center'>
          <h3 className='text-center'>Авторизация</h3>
          {loadingForm ? <h3 className='mt-3 mb-3'>Идет загрузка, подождите пожалуйста.</h3> : ''}
            <div className="mb-3 text-center">
              <div>
                <label className="form-label">Электронная почта</label>
              </div>
                <input
                  disabled={loadingForm}
                  placeholder='Email...'
                  {...register('email')} 
                  id='email' 
                  type="email" 
                  className="form-input ps-2"
                />
              {errors.email && <div className='text-left'><span className='text-danger'>Некорректный адрес электронной почты</span></div>}
            </div>
            <div className="mb-3">
              <div>
                <label className="form-label">Пароль</label>
              </div>
              <input
                disabled={loadingForm}
                {...register('password')}
                placeholder='Password...'
                id='password' 
                type="password" 
                className="form-input ps-2"
              />
              {errors.password && <div><span className='text-danger'>Пароль должен содержать не менее 8 символов без пробелов с одной заглавной буквой</span></div>}
            </div>
            <div className='text-center'>
              <button onClick={handlerChangeAuth} type="submit" className="btn btn-primary">Авторизация</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
