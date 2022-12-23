import styled from "styled-components/native";

export const MenuWrapper = styled.View`
    display: flex;
    /* flex-direction: row; */
    /* justify-content: center; */
    /* flex-wrap: wrap; */
    width: 100%;
    padding: 30px 8px 8px 8px;
    margin: -10px;
`

export const MenuItem = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 80px;
    margin: 8px;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(11, 11, 146, 0.1);
    border-radius: 10px;
`

export const MenuImg = styled.Image`
    width: 40px;
    height: 40px;
    /* margin-bottom: 15px; */
`

export const MenuText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
`