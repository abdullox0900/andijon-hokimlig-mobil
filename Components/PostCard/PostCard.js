import styled from "styled-components/native"

const PostCard = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 0 15px 0 0;
    border: 1px;
    border-style: solid;
    border-color:rgba(159, 171, 185, 0.2);
    border-radius: 5px;
    height: 100px !important;
    box-sizing: border-box;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0px 5.5px 27.5px rgba(159, 171, 185, 0.16);
`

export const PostCardImg = styled.Image`
    width: 80px;
    height: auto;
    margin-right: 10px;
    border-radius: 5px;
`

export const PostCardTextWrap = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

export const PostCardText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`

export const PostCardDesc = styled.Text`
    font-size: 10px;
    font-weight: 400;
`
// ${'https://backend.digitalpark.uz/'}${item?.image}

export default function PostCardi({navigation}) {
    return (
        <PostCard>
            <PostCardImg source={{
                uri: `http://cdn.beta.qalampir.uz/uploads/kl/f_kRQqB9RvFQo32OkRVtU4dyJAfkT4P4.jpg`,
            }} />

            <PostCardTextWrap>
                <PostCardText>
                Shavkat Mirziyoyev:
                </PostCardText>
                <PostCardDesc>
                “Toshkentdagi hamma muammolarni shaxsan o‘zim kuzatib boraman. 
                </PostCardDesc>
            </PostCardTextWrap>
        </PostCard>
    )
}