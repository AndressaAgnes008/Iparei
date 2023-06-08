import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LogBox } from 'react-native';

import Home from './screens/Home/index'
import PayScreen from './screens/Pay/index'
import HistoricoScreen from './screens/Historico/index'
import AjusteScreen from './screens/Ajustes/index'

LogBox.ignoreAllLogs();



const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Pay: {
        lib: AntDesign,
        name: 'creditcard'
    },
    Historic: {
        lib: AntDesign,
        name: 'filetext1'
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    },
};

export default function Navigation(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#fff',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                },
                activeTintColor: '#DD3A06',
                inactiveTintColor: '#4d4d4d'


            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title: 'Inicio'
                }}
            />
            <Tab.Screen 
                name="Pay" 
                component={PayScreen} 
                options={{
                    title: 'Pagamento'
                }}
                />
            <Tab.Screen 
                name="Historic" 
                component={HistoricoScreen} 
                options={{
                    title: 'Historico'
                }}
                />
            <Tab.Screen 
                name="Settings" 
                component={AjusteScreen} 
                options={{
                    title: 'Ajustes'
                }}
                />
        </Tab.Navigator>
    );
};