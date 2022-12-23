import { useEffect, useState } from 'react';
import { ScrollView } from "react-native"
import CustomTopNavigation from '../../../CustomTopNavigation/CustomTopNavigation';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostCardi from '../../../PostCard/PostCard';


const Wrap = styled.View`
    padding: 20px 8px 90px 8px;
`

const WrapContent = styled.View`
    border: 1px;
    border-style: solid;
    border-color:rgba(159, 171, 185, 0.2);
    border-radius: 5px;
    background-color: #fff;
`

const WrapImg = styled.Image`
    width: 100%;
    height: 170px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const WrapText = styled.Text`
    padding: 15px;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #919191;
`

const WrapTitleBox = styled.View`
    display: flex;
    flex-direction: row;  
    align-items: center;
    margin: 25px 0;
`

const WratTitle = styled.Text`
    margin-left: 4px;
    font-size: 16px;
    font-weight: 600;
    color: #0B0B92;
`

export default function HomeScreen({ navigation }) {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true)

    const axiosPosts = () => {
        setLoader(true)
        fetch('https://backend.digitalpark.uz/api/posts')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.data)
            })
            .finally(() => {
                setLoader(false)
            })
    }

    useEffect(() => {
        axiosPosts()
    }, [])

    let OvalIcon = <MaterialCommunityIcons name={'moon-new'} size={10} color={"#0B0B92"} style={{ fontWeight: 700 }} />;

    return (
        <>
            <CustomTopNavigation title={'Andijon Hokimligi'} />
            <Wrap>
                <ScrollView>
                    <WrapContent>
                        <WrapImg source={{ uri: `${'https://backend.digitalpark.uz/'}${data[0]?.image}` }} />
                        <WrapText>{data[0]?.title_uz}</WrapText>
                    </WrapContent>

                    <WrapTitleBox>
                        {OvalIcon}
                        <WratTitle>Songi Yangliklar</WratTitle>
                    </WrapTitleBox>

                    {
                        data.slice(0,4).map((item) => {
                            return (
                                <PostCardi data={item} />
                            )
                        })
                    }
                </ScrollView>
            </Wrap>
        </>
    );
}