import React, { useContext } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

import { IMarkers } from '@contexts/types'
import { LocationsContext } from '@contexts/LocationsContext'
import { ContentText } from '@screens/Details/styles'
import { ItemList, ItemListContainer, ListContainer, TitleTextList, TrashButton } from '@screens/List/styles'

export function List () {
    const { marker, deleteMarker } = useContext(LocationsContext)

    return (
        <SafeAreaView>
            <ListContainer>
                <TitleTextList>Name</TitleTextList>
                <FlatList<IMarkers>
                    data={ marker }
                    keyExtractor={ item => item.id }
                    renderItem={ ({ item }) => (
                        <ItemListContainer key={ item.id }>
                            <ItemList>
                                <ContentText>{ item.name }</ContentText>
                            </ItemList>
                            <TrashButton onPress={ () => deleteMarker(item.id) }>
                                <EvilIcons name="trash" size={ 30 } color="white" />
                            </TrashButton>
                        </ItemListContainer>
                    ) }
                />
            </ListContainer>
        </SafeAreaView>
    )
}
