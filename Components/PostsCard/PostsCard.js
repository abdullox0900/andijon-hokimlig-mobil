import { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { WrapperPosts, PostsCard, PostTextWrap, PostText, PostDesc, PostImg } from "./Style.js"
import axios from 'axios';

export default function DetailsScreen({ navigation }) {

    const [data, setData] = useState();
    const [loader, setLoader] = useState(true)

    const axiosPosts = () => {
        setLoader(true)
        axios.get(`https://backend.digitalpark.uz/api/posts`)
            .then(res => setData(res.data.data))
            .finally(() => {
                setLoader(false)
            })
    }

    useEffect(() => {
        axiosPosts()
    }, [])


    return (
        <WrapperPosts>
            <ScrollView refreshControl={<RefreshControl refreshing={loader} onRefresh={axiosPosts} />}>
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
                                                {item?.title_uz.slice(0, 60)}...
                                            </PostText>
                                            <PostDesc>
                                                {item?.description_uz.slice(0, 80)}
                                            </PostDesc>
                                        </PostTextWrap>
                                    </PostsCard>
                                </TouchableOpacity>
                            )
                        })
                    )
                }
            </ScrollView>
        </WrapperPosts>
    );
}