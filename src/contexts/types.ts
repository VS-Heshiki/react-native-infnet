import { LatLng } from 'react-native-maps'

export type IMarkers = {
    id: string
    longitude: number
    latitude: number
    description: string
    name: string
}

export type LocationsContextProviderTypes = {
    createNewMarker: ({ description, latitude, longitude, name }: IMarkers) => void
    setLocationState: (locationState: LatLng) => void
    setAddLocationState: (addLocationState: LatLng | null) => void
    deleteMarker: (id: string) => void
    location: LatLng | null
    addLocation: LatLng | null
    marker: IMarkers[]
}
