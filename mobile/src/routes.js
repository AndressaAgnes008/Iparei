import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';

import Main from './screens/Home/Main';
import Profile from './screens/Home/Profile';
import Login from './Login';
import index from './index'
import Cadastrar from './cadastrar';

const Routes = createAppContainer(
    createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                title: '',
                headerLeft: null,
                headerTransparent: true,
            },
        },
        index: {
            screen: index,
            navigationOptions: {
                title: 'IParei',
                headerLeft: null
            },
            headerStyle:{
                
            }
        },
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'IParei'
            },
            
        },
        Profile,
        Cadastrar,

    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontStyle: 'normal'
                //textAlign: 'center'
            },
            headerStyle: {
                backgroundColor: '#DD3A06'
            }
        },
    })
    // createSwitchNavigator({
    //     Login,
    //     index,
    //     Main,
    //     Profile,
        
    // })

);

export default Routes;