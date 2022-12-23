import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostInner from "../PostsCard/PostInner/PostInner.js";
import PostsCard from "../PostsCard/PostsCard.js";

const Stack = createNativeStackNavigator();

export const PostNavigatin = () => {
    return <Stack.Navigator >
        <Stack.Screen name={'Yangliklar'} component={PostsCard} />
        <Stack.Screen name={'PostInner'} component={PostInner} />
    </Stack.Navigator>
}