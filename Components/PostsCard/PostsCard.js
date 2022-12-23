import { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { WrapperPosts, PostsCard, PostTextWrap, PostText, PostDesc, PostImg } from "./Style.js"
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DetailsScreen({ navigation }) {

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

    let myIcon = <Ionicons name={'calendar'} color={"#cacaca"} style={{ marginRight: '10px' }} />;

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={loader} onRefresh={axiosPosts} />}>
            <WrapperPosts>
                {
                    loader ? (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator />
                            <Text>Yuklanmokda..</Text>
                        </View>
                    ) : (
                        data?.map((item) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('PostInner')}>
                                    <PostsCard>
                                        <PostImg source={{
                                            uri: `${'https://backend.digitalpark.uz/'}${item?.image}`,
                                        }} />
                                        <PostTextWrap>
                                            <PostText>
                                                {item?.title_uz.slice(0, 80)}...
                                            </PostText>
                                            <PostDesc>
                                                {myIcon}{`${item?.created_at.slice(11, 16)} / ${item?.created_at.slice(8, 10)}.${item?.created_at.slice(5, 7)}.${item?.created_at.slice(0, 4)}`}</PostDesc>
                                        </PostTextWrap>
                                    </PostsCard>
                                </TouchableOpacity>
                            )
                        })
                    )
                }
            </WrapperPosts>
        </ScrollView>
    );
}