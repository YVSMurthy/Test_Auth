import { useEffect, useState } from "react"
import { auth } from "../Auth/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    let [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const curr_user = JSON.parse(localStorage.getItem('user'));
        setUser(curr_user);
    }, [])

    const signout = async () => {
        signOut(auth).then(() => {
            localStorage.clear();
            navigate('/');
        })
        .catch(e => {
            console.log("Error: ",e)
        });
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            <h1 className="text-3xl text-black font-bold">Good Morning {user?.displayName}</h1>

            <button className="p-3 rounded-xl bg-red-500 hover:cursor-pointer"
            onClick={signout}>
                <h1 className="text-xl text-white">SignOut</h1>
            </button>
        </div>
    )
}