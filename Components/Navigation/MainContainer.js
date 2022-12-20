import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/Posts/Posts';
import SettingsScreen from './Screens/SettingsScreen';

//Screen names
const homeName = "Bosh Sahifa";
const detailsName = "Yangliklar";
const settingsName = "Yordamchi";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === detailsName) {
                            iconName = focused ? 'list' : 'list-outline';

                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={"#0B0B92"} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#0B0B92',
                    inactiveTintColor: '#0B0B92',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 25, height: 70 }
                }}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={detailsName} component={DetailsScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;