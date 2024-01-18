import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function CheckSession() {
    const { data: session, status } = useSession()
    const router = useRouter()

        if(!session){
            router.push("/")
            // console.log("No Session!!")
            return
        }

}