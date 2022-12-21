import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PostInner from "./Screens/Posts/PostInner/PostInner";
import PostsCard from "../PostsCard/PostsCard.js";

const Stack = createNativeStackNavigator();

export const PostNavigatin = () => {
    return <Stack.Navigator>
        <Stack.Screen name={'Yanglikl'} component={PostsCard} />
        <Stack.Screen name={'Yangliklar'} component={PostInner} />
    </Stack.Navigator>
}