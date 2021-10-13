import styled from "styled-components";
import { Link } from "react-router-dom";

function NewLink({ ...props }) {
    return <Link {...props} />;
}

export const StyledLink = styled(NewLink)`
    text-decoration: none;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    background-color: #dfe6ed;
`

export const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 150px);
    grid-column-gap: 100px;
    grid-row-gap: 100px;
`

// export const Container = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 1253px;
//     height: 100vh;
//     margin: 0 auto;
//     padding: 50px 0;
//     flex-direction: column;
// `

// export const RecommendContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

export const ContentContainer = styled.div`
    width: 80%;
    height: 350px;
    border-style: solid;
    padding: 0 30px 0 30px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const Image = styled.img`
    height: 100%;
    width: 240px;
`

export const Button = styled.button`
    height: 100px;
    width: 100px;
`

export const Input = styled.input`

`