import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LocationsContextProvider } from '@contexts/LocationsContext'
import { Details } from '@screens/Details'
import { Home } from '@screens/Home'
import { defaultTheme } from './src/theme'
import { RegisterLocation } from '@screens/RegisterLocation'
import { List } from '@screens/List'

const Stack = createNativeStackNavigator()

export default function App () {
    return (
        <ThemeProvider theme={ defaultTheme }>
            <LocationsContextProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='Home' options={ { headerShown: false } } component={ Home } />
                        <Stack.Screen name='RegisterLocation' component={ RegisterLocation } options={ { title: 'Register Location' } } />
                        <Stack.Screen name='Details' component={ Details } />
                        <Stack.Screen name='List' component={ List } />
                    </Stack.Navigator>
                </NavigationContainer>
            </LocationsContextProvider>
        </ThemeProvider>
    )
}
