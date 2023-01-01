
import styled from "styled-components/native"

export const WrapperPosts = styled.View`
    padding: 10px;
    height: 100%;
    width: 100%;
`

export const PostsCard = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 0 15px 0 0;
    border: 1px;
    border-style: solid;
    border-color:rgba(159, 171, 185, 0.2);
    border-radius: 5px;
    height: 130px !important;
    box-sizing: border-box;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0px 5.5px 27.5px rgba(159, 171, 185, 0.16);
`

export const PostImg = styled.Image`
    width: 80px;
    height: auto;
    margin-right: 10px;
    border-radius: 5px;
`

export const PostTextWrap = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

export const PostText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`

export const PostDesc = styled.Text`
    font-size: 10px;
    font-weight: 400;
`
