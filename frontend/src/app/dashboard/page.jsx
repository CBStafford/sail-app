'use client'
import { useSession } from "next-auth/react"
import Link from 'next/link'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { getProfile } from "../../../api";

export default function Component() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const[profileRes, setProfileRes] = useState([])
 
  const DashboardProfile = async (e)  => {
    // console.log(session);
    var uuuuu = session.user.id
    var acToken = session.accessToken
    const profile = await getProfile(uuuuu, acToken)

    setProfileRes(profile)
  }

  useEffect(() => {
    if (status !== "authenticated" && status !== "loading") {
        router.push("/")
        return
      }
    
     if(status === "authenticated"){
      DashboardProfile()
     } 
  }, [status]);  


  localStorage.setItem("profileStuff", JSON.stringify(profileRes));
  console.log(profileRes);

  return(
    <div>
        <h2>Dashboard</h2>
        <Container >


        </Container>

    </div>
  )
}
