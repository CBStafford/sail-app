// import { NextResponse } from "next/server";
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

const url = 'http://localhost:8000/api/v1/';

export async function loginUsers(credentials){
    // console.log(credentials)
    try{
        const res = await fetch(url + 'login', {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),  
            next:{ revalidate:0 } //use 0 (zero) to stop cacheing the data.
        });
        // console.log(res)

        return res.json();
    }catch (err){
        return err
    }
    
}

export async function registerUsers(credentials){

        const res = await fetch('http://localhost:8000/api/v1/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),  
            next:{ revalidate:0 } //use 0 (zero) to stop cacheing the data.
        });

        return res;

}

export async function getUser(credentials){

    const getSessionStuff = async () => {
        const session = await getServerSession(options);
        return session.user.id;
    };
    
    try{
        sessionId = getSessionStuff;
        const res = await fetch('http://localhost:8000/api/v1/user/'+ sessionId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(credentials),  
            // next:{ revalidate:0 } //use 0 (zero) to stop cacheing the data.
        });

            return res.json();
    }
    catch(err){
        console.log(err)
        // return NextResponse.json(err)
        return
    }

}

export async function getProfile(id, acToken){

    
    try{
        const res = await fetch('http://localhost:8000/api/v1/profile/'+ id, {  
        
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${acToken}`
            },
        });

        // console.log(" ***** " + res + " **** ")

            return res.json();
    }
    catch(err){
        console.log(err)
        return NextResponse.json(err)
        // return
    }

 
}

