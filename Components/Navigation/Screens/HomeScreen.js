import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { MyCarousel } from '../../Slider/Slider';

export default function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Bosh Sahifa kljmnkjsdnckjsdnckjsdnckjsdnckjsdnckdsjcnksdjcnksjdcnksdjcnksdjcnksdjcnsdjkcnkdsjcnsdkj</Text>
        </View>
    );
}