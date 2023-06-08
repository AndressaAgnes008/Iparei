import React from 'react';
import { Text, View, SafeAreaView, LogBox } from 'react-native';
LogBox.ignoreAllLogs();

import { Wrapper } from './styles'
import Routes from '../../routes'
import Main from './Main'

export default function Home() {
    return(
        <Wrapper>

            <Main />
        </Wrapper>
        
    );

}