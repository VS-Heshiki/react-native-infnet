import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { LatLng } from 'react-native-maps'
import 'react-native-get-random-values'

import { LocationsContextProviderTypes } from './types'
import { IMarkers, markers } from '@data/index'

interface LocationsContextProviderProps {
    children: ReactNode
}

export const LocationsContext = createContext({} as LocationsContextProviderTypes)

export function LocationsContextProvider ({ children }: LocationsContextProviderProps) {
    const [location, setLocation] = useState<LatLng | null>(null)
    const [addLocation, setAddLocation] = useState<LatLng | null>(null)
    const [marker, setMarker] = useState<IMarkers[]>(markers)

    const requestPermission = async () => {
        const { granted } = await requestForegroundPermissionsAsync()
        if (granted) {
            const { coords } = await getCurrentPositionAsync()
            setLocation({ latitude: coords.latitude, longitude: coords.longitude })
        }
    }

    const setLocationState = (locationState: LatLng) => {
        setLocation(locationState)
    }

    const setAddLocationState = (addLocationState: LatLng | null) => {
        setAddLocation(addLocationState)
    }

    const deleteMarker = (id: string) => {
        const filteredMarker = marker.filter(item => item.id !== id)
        setMarker(filteredMarker)
    }

    const createNewMarker = ({ id, description, latitude, longitude, name }: IMarkers) => {
        const newMarkerData: IMarkers = {
            id,
            description,
            latitude,
            longitude,
            name
        }

        setMarker((state) => [...state, newMarkerData])
    }

    useEffect(() => {
        requestPermission()
    }, [])

    return (
        <LocationsContext.Provider
            value={ {
                location,
                addLocation,
                marker,
                setAddLocationState,
                deleteMarker,
                setLocationState,
                createNewMarker
            } }
        >
            { children }
        </LocationsContext.Provider>
    )
}
