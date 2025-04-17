import { RiGoogleFill } from "@remixicon/react";
import { auth, googleProvider } from "../Auth/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, googleProvider);
            const user = response.user;
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/dashboard');
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="flex flex-col items-center justify-center gap-10 w-100 h-60 rounded-lg border-1 border-black px-3 py-6">
                <h1 className="text-4xl font-bold">Login</h1>

                <button className="google-login flex items-center justify-center gap-10 rounded-4xl border-1 border-gray-800 px-5 py-3 hover:cursor-pointer hover:bg-gray-100"
                onClick={signInWithGoogle}>
                    <RiGoogleFill size={50} />
                    <h3 className="text-2xl">Google</h3>
                </button>
            </div>
        </div>
    )
}