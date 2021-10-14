import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from '@mui/material/Slider';
import InfiniteScroll from 'react-infinite-scroll-component';

function NewLink({ ...props }) {
    return <Link {...props} />;
}

export const StyledLink = styled(NewLink)`
    text-decoration: none;
    width: 250px;
`

function NewSlider({ ... props }) {
    return <Slider {...props} />;
}

export const StyledSlider = styled(NewSlider)`

`

function NewInfiniteScroll({ ...props }) {
    return <InfiniteScroll {...props} />;
}

export const StyledInfiniteScroll = styled(NewInfiniteScroll)`
    margin-top: 120px;   
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    /* background-color: #dfe6ed; */
`

export const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 250px);
    grid-column-gap: 10px;
    grid-row-gap: 100px;
    /* width: 150vh; */
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
    border-radius: 20px;
    box-shadow: 5px 5px 5px;
    margin-bottom: 10px;
`

export const ConditionContainer = styled.div`
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
`

export const Title = styled.h1`
    position: absolute;
    left: 500px;
    font-size: 60px;
`

export const SliderBox = styled.div`
    width: 30vh;
    margin-right: 20px;
    position: absolute;
    right: 300px;
    top: 70px;
`

export const Button = styled.button`
    height: 50px;
    width: 110px;
    position: absolute;
    right: 150px;
    top: 60px;
    border-radius: 10px;
    font-weight: bold;
    /* font-size: 30px; */
    /* color: white; */
    background-color: white;

    :hover {
        background-color: #e82b0c;
        cursor: pointer;
        color: white;
    }
`
