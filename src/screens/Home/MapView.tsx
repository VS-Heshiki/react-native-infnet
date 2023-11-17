import { useContext } from 'react'
import { Text } from 'react-native'
import { MapPressEvent, Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

import { ButtonNewMarker, MapViewContainer, MapViewStyle } from './styles'
import { LocationsContext } from '@contexts/LocationsContext'

export function MapViewHome () {
    const { location, marker, addLocation, setAddLocationState } = useContext(LocationsContext)

    const navigation = useNavigation()

    const handleGetLocation = (event: MapPressEvent) => {
        setAddLocationState(event.nativeEvent.coordinate)
    }

    const handleAddLocationNavigation = () => {
        navigation.navigate('RegisterLocation', { location: addLocation })
    }

    const handleDetailsLocationNavigation = (id: string) => {
        navigation.navigate('Details', { id })
    }

    return (
        <MapViewContainer>
            {
                location &&
                <MapViewStyle initialRegion={ {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                } }
                    onPress={ handleGetLocation }>
                    <Marker pinColor='#BCA7E8'
                        coordinate={ {
                            latitude: addLocation ? addLocation.latitude : location.latitude,
                            longitude: addLocation ? addLocation.longitude : location.longitude
                        } } />
                    <Marker
                        coordinate={ {
                            latitude: location.latitude,
                            longitude: location.longitude
                        } } />
                    { marker.map(item => {
                        return (
                            <Marker pinColor='#00B37E'
                                onPress={ () => handleDetailsLocationNavigation(item.id) }
                                key={ item.id }
                                coordinate={ {
                                    latitude: item.latitude,
                                    longitude: item.longitude
                                } } />
                        )
                    }) }
                </MapViewStyle>
            }
            <ButtonNewMarker disabled={ !addLocation } onPress={ handleAddLocationNavigation } >
                <Text style={ { fontSize: 18, color: '#fff' } }>Add new marker</Text>
            </ButtonNewMarker>
        </MapViewContainer >
    )
}
