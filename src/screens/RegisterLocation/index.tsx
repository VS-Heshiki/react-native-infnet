import React, { useContext, useState } from 'react'
import { Alert, SafeAreaView, Text } from 'react-native'
import { LatLng } from 'react-native-maps'
import { v4 as uuidv4 } from 'uuid'
import { useNavigation, useRoute } from '@react-navigation/native'

import { LocationsContext } from '@contexts/LocationsContext'
import { ButtonAddMarker, TextInputContainer } from './styles'


type RouterParamsLocation = {
    location: LatLng
}

export function RegisterLocation () {
    const { createNewMarker, setAddLocationState } = useContext(LocationsContext)
    const [locationName, setLocationName] = useState<string>('')
    const [locationDescription, setLocationDescription] = useState<string>('')
    const navigation = useNavigation()

    const route = useRoute()
    const { location } = route.params as RouterParamsLocation

    const handleAddLocation = () => {
        createNewMarker({
            id: uuidv4(),
            latitude: location.latitude,
            longitude: location.longitude,
            name: locationName,
            description: locationDescription
        })

        Alert.alert('Success', 'Marker Added')
        setAddLocationState(null)

        navigation.navigate('Home')
    }

    return (
        <SafeAreaView>
            <TextInputContainer
                placeholder='Name'
                onChangeText={ name => setLocationName(name) }
                defaultValue={ locationName }
            />
            <TextInputContainer
                placeholder='Description'
                onChangeText={ description => setLocationDescription(description) }
                defaultValue={ locationDescription }
            />

            <ButtonAddMarker disabled={ !locationName || !locationDescription } onPress={ handleAddLocation }>
                <Text style={ { fontSize: 18, color: '#fff' } }>ADD NEW MARKER!</Text>
            </ButtonAddMarker>
        </SafeAreaView>
    )
}
