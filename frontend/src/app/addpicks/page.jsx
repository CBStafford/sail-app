'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

import SubmitPicksForm from "@/components/forms/picks";
import DynamicForm from "@/components/forms/hookForm";

export default function AddPicks() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [week, setWeek] = useState(searchParams.get('week'))

    const profile_Stuff = JSON.parse(localStorage.getItem('profileStuff'));
        // console.log(profile_Stuff)
        if(!profile_Stuff){
            router.push("/")
            // console.log("No Session!!")
            return
        }    

    return (
        <Container>
           <h1>Enter your predictions for week {week} </h1>

           <Row className="mt-3">
                {/* <SubmitPicksForm  officialScoreData={profile_Stuff.officialscores } userScoreData={profile_Stuff.scores } week={week}/> */}
                <DynamicForm  officialScoreData={profile_Stuff.officialscores } userScoreData={profile_Stuff.scores } week={week} />
            </Row>
        </Container>
    )
}
