import React, {useState} from 'react'
import styled from "styled-components"
import axios from "axios"

const H1 = styled.h1`
    color:black;
    margin-top:1rem;
`

const FormContainer = styled.div`
    width:800px;
    height:600px;
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
    const [fname, setFname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [lname, setLname] = useState("")
    const [zip, setZip] = useState("")
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")



    async function registerUser(e) {
        e.preventDefault()
        const response = axios.post('http://localhost:1337/api/register', {
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fname,
                lname,
                password,
                city,
                zip,
                state,
                address,
            })
        })
        const data = await response.json()
        console.log(data)
    }

    return(
        <FormContainer>
            <H1>Sign Up</H1>
            <Form onSubmit={registerUser}>
                <Label>
                    First Name:
                    <Input 
                    type="text" 
                    placeholder="Username" 
                    value={fname} 
                    onChange={(e) => setFname(e.target.value)}></Input>
                </Label>
                <Label>
                    Last Name:
                    <Input 
                    type="text" 
                    placeholder="Last Name" 
                    value={lname} 
                    onChange={(e) => setLname(e.target.value)}></Input>
                </Label>
                <Label>
                    Email:
                    <Input 
                    type="text" 
                    placeholder="email" 
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
                <Label>
                    Address:
                    <Input 
                    type="text" 
                    placeholder="Address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)}></Input>
                </Label>
                <Label>
                    City:
                    <Input 
                    type="text" 
                    placeholder="city" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}></Input>
                </Label>
                <Label>
                    State:
                    <Input 
                    type="text" 
                    placeholder="state" 
                    value={state} 
                    onChange={(e) => setState(e.target.value)}></Input>
                </Label>
                <Label>
                    Zip:
                    <Input 
                    type="text" 
                    placeholder="zip" 
                    value={zip} 
                    onChange={(e) => setZip(e.target.value)}></Input>
                </Label>
                <Submit type="submit">Submit</Submit>
            </Form>
        </FormContainer>
    )
}