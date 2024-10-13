import {React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../ui";
import { loginUserStart } from "../../slice/auth";
const Login = () => {
    const [oyna , setOyna] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)
    console.log(isLoading);


    const loginHandler = (e) => {
        e.preventDefault()
         dispatch(loginUserStart())
    }
  
    
    
  return (
    <div className="h-[92.5vh] w-auto flex items-center justify-center bg-black">
      <form className="max-w-sm mx-auto bg-slate-600 text-slate-900 p-7 border-spacing-3 radius">
      <h4 className="text-center text-white">PLEASE LOGIN</h4>

        <div className="mb-5">
          <Input label={"Username"} state={name} setState={setName}/>
          <Input label={"Email address"} state={email} setState={setEmail}/>
          <Input label={"Password"} type={'password'} state={password} setState={setPassword}/>
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button disabled={isLoading} onClick={loginHandler} 
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
