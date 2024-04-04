import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";
import { useRecoilState } from "recoil";
import { stLogin } from "./StAtom";

export default function Login() {
    // useEffect(()=>{ // localStorage 배우기: set, get, remove
    //     // localStorage.setItem('user','sjkim9621@gmail.com'); // ('key','value')
    //     localStorage.removeItem('user');
    //     const tm = localStorage.getItem('user');
    //     console.log(tm);
    // },[]);
    const [user, setUser] = useState();
    const [isLogin, setIsLogin] = useRecoilState(stLogin); //useRecoilState(초깃값 설정)

    const handleLogin = (userIn)=>{
        localStorage.setItem('user', userIn);
        setUser(userIn);
        setIsLogin(true);
        if(isLogin){
            setUser(null);
            setIsLogin(false);
        }
    };

    const handleLogout = ()=>{
        localStorage.removeItem('user');
        setUser(null);
        setIsLogin(false);
    }

    useEffect(()=>{
        const tmUser = localStorage.getItem('user');

        if(isLogin){
            setUser(tmUser);
            setIsLogin(false);
        };
    },[])

    return (
        <div className="w-full h-full justify-center items-center flex flex-col">
            { user ? <LogoutForm user={user} onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
        </div>
    )
}
