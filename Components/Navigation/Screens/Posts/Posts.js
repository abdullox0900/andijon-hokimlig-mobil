import { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { WrapperPosts, PostsCard, PostTextWrap, PostText, PostDesc, PostImg } from "./PostsStyle.js"
import axios from 'axios';

export default function DetailsScreen({ navigation }) {

    const [data, setData] = useState();

    axios.get(`https://backend.digitalpark.uz/api/posts`)
        .then(res => setData(res.data.data));

    return (
        <WrapperPosts>
            <ScrollView>
                {
                    data?.map((item) => {
                        return (
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
                        )
                    })
                }
            </ScrollView>
        </WrapperPosts>
    );
}