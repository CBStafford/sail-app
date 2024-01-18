// "use client"
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import NavLinks from "./navLinks";

export default async function NavBar(){
    const session = await getServerSession(options)
   
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <strong>Simple Fantasy Football <br /></strong>&nbsp;&nbsp; UR { session ? session.user.name : "not Logged In!"} &nbsp;
          <NavLinks  />
        </div>
        </nav>
    )
}