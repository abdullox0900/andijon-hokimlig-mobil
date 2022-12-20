import styled from "styled-components/native"

export const WrapperPosts = styled.View`
    padding: 15px;
    height: 100%;
    width: 100%;
    border: 1px solid red;
`

export const PostsCard = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 15px;
    border: 1px;
    border-style: solid;
    border-color: #cacaca;
    border-radius: 5px;
    height: auto !important;
    box-sizing: border-box;
    margin-bottom: 20px;
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
