import { Text, View } from 'react-native'
import styled from 'styled-components/native'

export const DetailsContainer = styled(View)`
    padding: 18px
`

export const DetailsBox = styled(View)`
    padding: 20px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
    gap: 28px;
`

export const TitleText = styled(Text)`
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 22px;
    margin-bottom: 8px;
    font-weight: bold;
`

export const ContentText = styled(Text)`
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: 16px;
`

export const Separator = styled(View)`
    height: 1px;
    margin-bottom: 1px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
