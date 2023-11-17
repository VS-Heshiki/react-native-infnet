import { useContext } from 'react'
import { SafeAreaView, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { LocationsContext } from '@contexts/LocationsContext'
import { ContentText, DetailsBox, DetailsContainer, Separator, TitleText } from '@screens/Details/styles'

export type RouteParamsDetails = {
    id: string
}

export function Details () {
    const { marker } = useContext(LocationsContext)

    const route = useRoute()
    const { id } = route.params as RouteParamsDetails

    const location = marker.filter(item => item.id === id)

    return (
        <SafeAreaView>
            <DetailsContainer>
                <DetailsBox>
                    <View>
                        <TitleText>Name</TitleText>
                        <ContentText>{ location[0].name }</ContentText>
                    </View>
                    <Separator />
                    <View>
                        <TitleText>Description</TitleText>
                        <ContentText>{ location[0].description }</ContentText>
                    </View>
                </DetailsBox>
            </DetailsContainer>
        </SafeAreaView>
    )
}
