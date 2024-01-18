import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { useState } from "react"

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";

export default function LoginForm(){
    const router = useRouter()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        localStorage.clear();
        const res = signIn("credentials", {
            ...data,
            redirect: true,
            callbackUrl: "/dashboard"
        })
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

            const res = signIn("credentials", {
                ...data,
                redirect: true,
                callbackUrl: "/dashboard"
            })
        }
    
        setValidated(true);
      };

    return (
        <>
        <Container fluid>
        <Form noValidate  onSubmit={loginUser}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="text"
                    onChange={(e)=> { setData({...data, email:e.target.value}) }}
                    // placeholder="First name"
                    // defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    onChange={(e)=> { setData({...data, password:e.target.value}) }}
                    // placeholder="Last name"
                    // defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
            </Row>
      

            <Button type="submit">Submit form</Button>
        </Form>
        </Container>
        </>

    )
}