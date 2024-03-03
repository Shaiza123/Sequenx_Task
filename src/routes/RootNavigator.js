import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/index';
import Product from '../screens/Product/index';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{
                headerTitleAlign:'center',
        }}>
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'Product'} component={Product}/>
        </Stack.Navigator>
    )
}

export default Router