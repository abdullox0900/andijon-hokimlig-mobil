import * as React from 'react';
import styled from "styled-components/native";
import StyleSheet from 'react-native'


const TopWrapper = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 95px;
    background-color: #fff;
`

const TopText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    padding: 44px 0 5px 0;
    text-align: center;
    color: #000;
`

export default function CustomTopNavigation({ title }) {
    return (
        <TopWrapper style={{
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity:  0.4,
            shadowRadius: 3,
            elevation: 5,
        }}>
            <TopText>{title}</TopText>
        </TopWrapper>
    )
}


