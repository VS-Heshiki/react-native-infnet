import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import MapView from 'react-native-maps'
import styled from 'styled-components/native'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export const HeaderContainer = styled(View)`
    padding: 20px ;
    padding-top: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TitleView = styled(View)`
    flex-direction: row;
    align-items: center;
`

export const Title = styled(Text)`
    font-size: 24px;
    font-weight: bold;
`

export const MapViewContainer = styled(View)`
    flex: 1;
`

export const MapViewStyle = styled(MapView)`
    flex: 1;
    position: relative;
`

export const ButtonNewMarker = styled(TouchableOpacity)`
    position: absolute;
    bottom: 5%;
    left: 25%;
    width: 50%;

    background-color: ${({ disabled, theme }) => disabled ? theme.COLORS.GRAY_200 : theme.COLORS.PURPLE_500};
    align-items: center;
    justify-content: center;

    padding: 20px;
    border-radius: 6px;
`
