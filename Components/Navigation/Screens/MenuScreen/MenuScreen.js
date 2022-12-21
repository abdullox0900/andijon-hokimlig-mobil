import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default function MenuScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Menu</Text>
        </View>
    );
}