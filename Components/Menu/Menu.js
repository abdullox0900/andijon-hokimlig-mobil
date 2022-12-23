import * as React from 'react';
import { MenuWrapper, MenuItem, MenuImg, MenuText } from "./Style.js"
import Main from '../../assets/Icons/icon-xizmatlar.png';
import CustomTopNavigation from '../CustomTopNavigation/CustomTopNavigation.js';
import { ScrollView } from 'react-native-gesture-handler';

export default function Menu() {

    const data = [
        {
            name: 'Xizmatlar',
            img: Main,
        },
        {
            name: 'Foydali Saytlar',
            img: Main,
        },
        {
            name: 'Ish kun tartibi',
            img: Main,
        },
        {
            name: 'Xokimlar',
            img: Main,
        },
        {
            name: 'Kengashlar',
            img: Main,
        },
        {
            name: `Ochik ma'lumotlar`,
            img: Main,
        },
        {
            name: 'Davlat dasturlari',
            img: Main,
        },
        {
            name: 'Ijtimoi tarmoklar',
            img: Main,
        },
        {
            name: 'Manzil',
            img: Main,
        },
    ]

    return (
        <>
            <CustomTopNavigation title={'Andijon Hokimligi'} />
            <ScrollView>
                <MenuWrapper>
                    {
                        data.map((item, index) => {
                            return (
                                <MenuItem key={index}>
                                    <MenuImg
                                        source={item?.img}
                                    />
                                    <MenuText>{item?.name}</MenuText>
                                </MenuItem>
                            )
                        })
                    }
                </MenuWrapper>
            </ScrollView>
        </>
    )
}