import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../features/userSlice"
import styled from "styled-components"

const H1 = styled.h1`
    color:black;
    margin-top:1rem;
`

const FormContainer = styled.div`
    width:600px;
    height:500px;
    background-color:lightgrey;
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
`

const Form = styled.form`
    width:100%;
    height:70%;
    border:1px solid black;
    display:flex;
    flex-flow:column wrap;
    color:black;
`

const Label = styled.label`
    display:flex;
    flex-flow:column wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top:4rem;
`

const Input = styled.input`
    margin:0.5rem;
`

const Submit = styled.button`
    width:100px;
    height:25px;
    margin-left:auto;
    margin-right:auto;
    margin-top:2.5rem;
    cursor:pointer;
`

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:email,
            password:password,
            loggedIn:true,
        }))
    }

    return(
        <FormContainer>
            <H1>Login</H1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Label>
                    Email:
                    <Input 
                    type="text" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}></Input>
                </Label>
                <Label>
                    Password:
                    <Input 
                    type="text" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}></Input>
                </Label>
                <Submit type="submit">Submit</Submit>
            </Form>
        </FormContainer>
    )
}