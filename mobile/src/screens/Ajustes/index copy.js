import React, {useState, useEffect} from 'react';
import { Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {AsyncStorage} from '@react-native-async-storage/async-storage'

import api from '../services/api';

export default function Ajustes() {
    const [_id, setIdUser] = useState('');
    const [ajusteUser, setAjusteUser] = useState('');

    useEffect(async () => {
        AsyncStorage.getItem('user').then(user => {
            setIdUser(user);
            //_id = "5fbadf2ca6a57d27743e1814"
            console.log("id: " + _id)
        })
        
        
        loadAjuste()
    }, []);
    console.log("id: " + _id)
    //})
    
    
    loadAjuste()
    async function loadAjuste() {

        const response = ""
try {
    response  = await api.get('/buscarUser', {
        params: {
            _id,
        }
    });
    console.log("reponse :::: " + response)
} catch (error) {
    console.log("ERRO AJUSTE: " + error)
}
        
        
        console.log('ID: ' + _id);
        console.log(response.data);
        setAjusteUser(response.data.usuario[0]);
        console.log(ajusteUser.nome)

        //setupWebsocket();
    }

    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: "#DD3A06"}}>
            <ScrollView>

            <View style={styles.viewImage}>
                <Image source={{ uri: ajusteUser.foto }} style={styles.image} />
                <Text style={styles.textImage}>{ajusteUser.nome}</Text>
            </View>

            <View style={{ backgroundColor: '#FFF' }} >
                <View style={ styles.viewTitulo }>
                    <Text style={ styles.textTitulo }>Minha conta</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Nome: {ajusteUser.nome}</Text>
                </View>
                
                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>CPF: {ajusteUser.CPF}</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Telefone: {ajusteUser.telefone}</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>E-mail: {ajusteUser.email}</Text>
                </View>
            </View>

            <View style={{ backgroundColor: '#FFF' }} >
                <View style={ styles.viewTitulo }>
                    <Text style={ styles.textTitulo }>Geral</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Precisa de ajuda?</Text>
                </View>
                
                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Sobre o IParei</Text>
                </View>

                <View style={ styles.viewPadrao}>
                    <Text style={ styles.textPadrao }>Desativar conta</Text>
                </View>

                
            </View>

            <View style={{ backgroundColor: '#DD3A06', height: 20 }} />

            <View style={{ backgroundColor: '#FFF' }} >
                <View style={ styles.viewPadrao }>
                    <Text style={ styles.textSair }>Sair</Text>
                </View>

            </View>
            

            
        
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewImage: {
        //flex: 1,
        height: 230,
        //justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#DD3A06',
    },

    image: {
        width: 150, 
        height: 150, 
        borderRadius: 200 / 2,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 30,
    },

    textImage: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },

    viewTitulo: {
        height: 30,
        backgroundColor: '#DD3A06',
        borderBottomWidth: 1,
        borderColor: '#DD3A06'
    }, 
    
    textTitulo: {
        fontSize: 15,
        color: '#FFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    }, 

    viewPadrao: {
        height: 50,
        //backgroundColor: '#009900',
        borderBottomWidth: 1,
        borderColor: '#DD3A06'
    }, 

    textPadrao: {
        fontSize: 15,
        color: '#000',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 12,
        paddingLeft: 5,
    }, 

    textSair: {
        fontSize: 15,
        color: '#DD3A06',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 12,
        paddingLeft: 5,
    }, 



});