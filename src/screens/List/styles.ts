import { IMarkers } from '@contexts/types'
import { ContentText, TitleText } from '@screens/Details/styles'
import { FlatList, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

export const TitleTextList = styled(TitleText)`
    margin-left: 9px;
`

export const ListContainer = styled(View)`
    padding: 18px
`

export const ItemListContainer = styled(View)`
    margin-bottom: 16px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`

export const ItemList = styled(TouchableOpacity)`
    flex: 1;
    padding: 18px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
`

export const TrashButton = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.COLORS.RED};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 56px;
    height: 56px;
`
