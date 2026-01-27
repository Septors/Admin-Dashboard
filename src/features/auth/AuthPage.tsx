import { useState } from "react"
import AuthForm from "./components/LoginForm"

const AuthPage = () => {

    const onSubmit = async (data) => {
        if (data.email && data.password) {
            localStorage.setItem("token", "mock-token");
            return true;
        }
        return false;
    };
    return (
        <div className="bg-[#4880FF] flex items-center justify-center min-h-screen w-full">
            <AuthForm onSubmit={onSubmit}/>

        </div>
    )
}

export default AuthPage