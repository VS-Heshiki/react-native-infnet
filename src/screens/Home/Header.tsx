import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { EvilIcons, Feather } from '@expo/vector-icons'

import { HeaderContainer, Title, TitleView, } from './styles'

export function Header () {
    const navigation = useNavigation()

    const handleListLocation = () => {
        navigation.navigate('List')
    }

    return (
        <HeaderContainer>
            <TitleView>
                <EvilIcons name="location" size={ 48 } color="black" />
                <Title>MapsNative</Title>
            </TitleView>
            <TouchableOpacity onPress={ handleListLocation }>
                <Feather name="menu" size={ 36 } color="black" />
            </TouchableOpacity>
        </HeaderContainer>
    )
}
