import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './styles'

import { Header } from './Header'
import { MapViewHome } from './MapView'

export function Home () {
    return (
        <SafeAreaView style={ styles.container }>
            <Header />
            <MapViewHome />
        </SafeAreaView>
    )
}
