import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"


const Container = styled.div`
    width:100%;
    height:100px;
    background-color:lightgrey;
    position:fixed;
    top:0;
`

const Ul = styled.ul`
    color:black;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
`

const StyledLink = styled(Link)`
    color:black;
`

const Li = styled.li`
    margin-top:2rem;
`

export default function Nav(){


    return(
        <Container>
            
                <Ul>
                    <Li>
                        <StyledLink to='/'>Login</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to='/signup'>Sign Up</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to='/account'>Account</StyledLink>
                    </Li>
                </Ul>
        </Container>
    )
}