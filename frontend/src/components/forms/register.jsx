import { useRouter } from "next/navigation"
import { useState } from "react"
import { registerUsers } from "api"

export default function RegisterForm() {
    const router = useRouter()
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e)  => {
        e.preventDefault()
        setIsLoading(true)
    
        const credentials = {name, email, password, password_confirmation}
        // console.log(credentials)
    
        const res = await registerUsers(credentials);

        if (res.status === 200) {
          router.refresh()
          router.push('/login') 
        }
        
      }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="mb-3">
                {/* <input name="csrfToken" type="hidden" defaultValue={token.value}/> */}
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    name="name"
                    type="text" 
                    className="form-control" 
                    id="name" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <div className="mb-3">
                {/* <input name="csrfToken" type="hidden" defaultValue={token.value}/> */}
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                    name="email"
                    type="email" 
                    className="form-control" 
                    id="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                    name="password"
                    type="password" 
                    className="form-control" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="confirmation_password" className="form-label">Confirm Password</label>
                <input 
                    name="confirmation_password"
                    type="password" 
                    className="form-control" 
                    id="password" 
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    value={password_confirmation}
                />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}