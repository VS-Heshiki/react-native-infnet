import { TextInput, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

export const TextInputContainer = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: 18px;
    padding: 16px;

    border-radius: 6px;
    margin: 18px;
`

export const ButtonAddMarker = styled(TouchableOpacity)`
    min-height: 56px;
    max-height: 56px;

    align-items: center;
    justify-content: center;
    background-color: ${({ disabled, theme }) => disabled ? theme.COLORS.GRAY_200 : theme.COLORS.PURPLE_500};;
    border-radius: 6px;

    margin: 18px;
`
