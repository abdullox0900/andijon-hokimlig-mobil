import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

// Screens
import HomeScreen from './Screens/HomeScreen/HomeScreen.js';
import DetailsScreen from './Screens/Posts/Posts.js';
import SettingsScreen from './Screens/VideoScreen/SettingsScreen.js';
import MuneScreen from './Screens/MenuScreen/MenuScreen.js';


//Screen names
const homeName = "Bosh Sahifa";
const detailsName = "Yangliklar";
// const newsName = "Yangliklar";
const settingsName = "Maruzalar";
const menuName = "Menu";

const Tab = createBottomTabNavigator();

function MainContainer() {

    return (
        <>
            <NavigationContainer >
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                        tabBarStyle: styles.tabBarStyle,
                        headerShown:false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === homeName) {
                                iconName = focused ? 'home' : 'home-outline';

                            } else if (rn === detailsName) {
                                iconName = focused ? 'newspaper' : 'newspaper-outline';

                            } else if (rn === settingsName) {
                                iconName = focused ? 'albums-sharp' : 'albums-outline';
                            } else if (rn === menuName) {
                                iconName = focused ? 'apps-sharp' : 'apps-outline';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={"#0B0B92"} />;
                        },

                    })}
                    tabBarOptions={{
                        activeTintColor: '#0B0B92',
                        inactiveTintColor: '#0B0B92',
                        padding: '10px',
                        labelStyle: { paddingBottom: 10, fontSize: 12, },
                        style: { padding: 15, height: 70, backgroundColor: '#000' },
                    }}>

                    <Tab.Screen name={homeName} component={HomeScreen} />
                    <Tab.Screen name={detailsName} component={DetailsScreen} />
                    <Tab.Screen name={settingsName} component={SettingsScreen} />
                    <Tab.Screen name={menuName} component={MuneScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = {
    tabBarStyle: {
        backgroundColor: '#fff',
        height: 70,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    cardStyle: {
        backgroundColor: '#000',
    },
    tabBarItemStyle: {
        backgroundColor: '#00ff00',
        margin: 5,
        borderRadius: 10,
    }
};

export default MainContainer;