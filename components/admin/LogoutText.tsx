'use client'
import { logout } from "@/app/login/actions";

const LogoutText = () => {
    return <a className="mx-auto cursor-pointer block w-fit" onClick={() => logout()}>Log out</a>;
}

export default LogoutText;
