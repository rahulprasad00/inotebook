import { React, useState } from 'react'
import noteimage from '../../assets/notes.jpg'
import { Link,useNavigate } from 'react-router-dom'
import {hosturl} from '../../url'

const Login = (props) => {

    const host = hosturl;

    const [credentials, setcredentials] = useState({ email: "", password: "" });

    let navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();                                   //To prevent page from reloading(very imp) otherwise it will give ncaught (in promise) TypeError: NetworkError when attempting to fetch resource.
        //API Call
        const response = await fetch(`${host}api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();  //Parsing the json
        console.log(json)

        if(json.success)
        {
            //Save auth token and redirect
            localStorage.setItem('token',json.authtoken);
            navigate("/");
        }
        else
        {
            props.setalert({message:"Invalid Credentials",type:""});
        }
    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleGuestClick = () => {
        setcredentials({ email:"guest@example.com" , password:"12345" })
    }
    
    return (
        <div className="flex flex-wrap">
            <div className="flex w-full flex-col md:w-1/2">
                <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
                    <Link to="about" className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900">iNotebook</Link>
                </div>
                <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                    <p className="text-left text-3xl font-bold">Welcome </p>
                    <p className="mt-2 text-left text-gray-500">Welcome back, please enter your details.</p>

                    <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col pt-4">
                            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                <input type="email" id="email" name='email' className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" value={credentials.email} placeholder="Email" onChange={onChange} required />
                            </div>
                        </div>
                        <div className="mb-12 flex flex-col pt-4">
                            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                <input type="password" id="password" name='password' className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" value={credentials.password} onChange={onChange} required minLength={5}/>
                            </div>
                        </div>
                        <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 my-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2" >Log in</button>
                        <button type="submit" className="w-full rounded-lg bg-gray-200 px-4 py-2 text-center text-base font-semibold text-black shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2" onClick={handleGuestClick}>Guest Login</button>
                    </form>
                    <div className="py-12 text-center">
                        <p className="whitespace-nowrap text-gray-600">
                            Don't have an account?
                            <Link to="/signup" className="underline-offset-4 font-semibold text-gray-900 underline">Sign up for free.</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
                <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
                    <p className="mb-8 text-3xl font-semibold leading-10">Unlock your productivity potential with our note-making app, your ultimate companion for capturing ideas on the go!</p>
                    <p className="mb-4 text-3xl font-semibold">Rahul Prasad</p>
                    <p className="">Web Developer,India</p>
                    <p className="mb-7 text-sm opacity-70">IIT Kharagpur</p>
                </div>
                <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src={noteimage} alt=''/>
            </div>
        </div>

    )
}

export default Login
