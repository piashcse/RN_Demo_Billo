/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import GalleryDetail from '../screens/gallery-detail/GalleryDetail';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Billo" component={Home}/>
                <Stack.Screen name="Post" component={GalleryDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
