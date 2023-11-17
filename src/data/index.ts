import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export type IMarkers = {
    id: string
    longitude: number
    latitude: number
    description: string
    name: string
}

export const markers: IMarkers[] = [
    {
        id: uuidv4(),
        longitude: -46.6397184,
        latitude: -23.555521,
        description: 'Lorem ipsum dolor sit amet',
        name: 'Sao Paulo'
    },
    {
        id: uuidv4(),
        longitude: -46.6151789,
        latitude: -23.5444167,
        description: 'Lorem ipsum dolor sit amet',
        name: 'Bras'
    }, {
        id: uuidv4(),
        longitude: -46.6533634,
        latitude: -23.5519209,
        description: 'Lorem ipsum dolor sit amet',
        name: 'Consolacao'
    },
]
