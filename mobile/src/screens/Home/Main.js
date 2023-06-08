import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../services/api';
import { connect, disconnect, subscribeToNewEsta } from '../services/socket';

function Main({ navigation }) {
    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [currentRegion, setCurrentRegion] = useState(null);
    const [idEstabelecimento, setIdEstabelecimento] = useState('');
    const [endereco, setEndereco] = useState('');


    useEffect(async () => {
        try {
            //console.log("id teste : " + _id)
            // AsyncStorage.getItem('user').then(user => {
            //     setIdUser(user);
            //     //_id = "5fbadf2ca6a57d27743e1814"
            //     console.log("ajuste 2 id: " + _id)
            // })


            loadAjuste()
            //loadSearchEsta()
        }
        catch (error) {
            console.log("Erro Ajustes useEffect: " + error)
        }

    }, []);

    async function loadAjuste() {


        try {
            //console.log("reponse id :::: " + _id)
            const response = await api.get('/estabelecimentos');
            // console.log("reponse :::: " + response)
            // console.log('ID: ' + _id);
            // console.log(ajusteUser.nome)
            // console.log(response.data);
            setEstabelecimentos(response.data);
            //console.log("log: "+response.data[0]);
        } catch (error) {
            console.log("ERRO AJUSTE: " + error)
        }

    }

    async function loadSearchEsta() {


        try {
            //console.log("reponse id :::: " + _id)
            const {latitude, longitude} = currentRegion;
           
            const response = await api.get('/search', {
                params: {
                    "longitude":latitude,
                    "latitude":longitude,
                    "endereco":endereco
                }
            });
            // console.log("reponse :::: " + response)
            // console.log('ID: ' + _id);
            // console.log(ajusteUser.nome)
            
            setEstabelecimentos(response.data.estas);
            setupWebsocket();
        } catch (error) {
            console.log("ERRO AJUSTE2: " + error)
        }

    }









    
    useEffect(() => {
        try{
            
            async function loadInitialPosition(){
                try{
                    const { granted } = await requestForegroundPermissionsAsync();
                    
                    if(granted){
                        const { coords } = await getCurrentPositionAsync({
                            enableHightAccuracy: true,
                        });
                        
                        const { latitude, longitude } = coords;
        
                        setCurrentRegion({
                            latitude,
                            longitude,
                            latitudeDelta: 0.02,
                            longitudeDelta: 0.02,
                        })
                    }
                }
                catch(error){
                    console.log("Erro map6: " + error)
                }
                
    
            }
            
            loadInitialPosition();
            
            useEffect(() => {
                try{
                    subscribeToNewEsta(esta => setEstabelecimentos([...estabelecimentos, esta]));
                    //loadSearchEsta()

                }
                catch(error){
                    console.log("erro map2: " + error)
                }
                
            }, 
            [estabelecimentos])
        }
        catch(error){
            console.log("erro map1: " + error)
        }
        
        
    }, []);

    useEffect(() => {
        try{
            subscribeToNewEsta(esta => setEstabelecimentos([...estabelecimentos, esta]));
            //loadSearchEsta()
 
           
        }
        catch(error){
            console.log("erro map2: " + error)
        }
        
    }, 
    [estabelecimentos])

    function setupWebsocket() {
        try{
            disconnect();

            const { latitude, longitude } = currentRegion;
    
            connect(
                latitude, 
                longitude,
                endereco,
            );
        }
        catch(error){
            console.log("erro map5: " + error)
        }
        
    };

    
    async function loadEstabelecimentos() {
        try
        {
            const {latitude, longitude} = currentRegion;
            //console.log("endereco API: " + api.getUri().toString())
            //console.log("latitude: " + latitude)
            //console.log("longitude: " + longitude)
            const response2 = await api.get('/search' , {
                params: {
                    "latitude": longitude,
                    "longitude": latitude,
                    "endereco": endereco,
                }
            });
           
            // console.log("TESTE res: " + response2);
            // console.log("TESTE resw: " + response2.MapView);
            // console.log("TESTE: " + response2.data[0]);
            // //setEstabelecimentos(response2.data);
            setupWebsocket();
        }
        catch(error)
        {
            console.log("erro map3: " + error)
        }

        
    }

    
    function handleRegionChange(region){
        try{
            //console.log(region);
            setCurrentRegion(region);
            loadSearchEsta();
        }
        catch(error){
            console.log("erro map4: " + error)
        }
        
    }



    if(!currentRegion){
        return null;
    }


    return (
        <>
        <MapView onRegionChangeComplete={handleRegionChange} initialRegion={currentRegion} style={styles.map}>
            {estabelecimentos.map(estabelecimento => (
                <Marker
                    key={estabelecimento._id} 
                    coordinate={{ 
                        longitude: estabelecimento.location.coordinates[0],
                        latitude: estabelecimento.location.coordinates[1], 
                    }} 
                    //onPress={navigation.navigate('Profile', estabelecimento._id)}
                    >
                    <Image style={styles.avatar} source={{ uri: estabelecimento.foto }}  />

                    <Callout 
                    // onPress={() => {
                    //     // navegação
                    //     navigation.navigate('Profile');
                    // }} 
                    >
                        <View style={styles.callout}>
                            <Text style={styles.estaName} >{estabelecimento.nome}</Text>
                            <Text style={styles.estaEndereco}>{estabelecimento.endereco}</Text>
                            <Text style={styles.estaObs}>{estabelecimento.obs.join(', ')}</Text>
                        </View>
                    </Callout>
                </Marker>
            ))}
        </MapView> 

        <View style={styles.searchForm} >
            <TextInput 
                style={styles.searchInput} 
                placeholder="Buscar por Endereço..."
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={endereco}
                onChangeText={text => setEndereco(text)}
                onSubmitEditing={Keyboard.dismiss}
                onKeyPress={loadSearchEsta}
              
            />
            
            <TouchableOpacity onPress={loadSearchEsta} style={styles.loadButton} >
                <MaterialIcons 
                    name="my-location" 
                    size={20} 
                    color="#FFF"
                />

                
            </TouchableOpacity>

        </View>
        
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
    },

    callout: {
        width: 260,
    },

    estaName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    estaEndereco: {
        color: '#666',
        fontSize: 16,
    },

    estaObs: {
        marginTop: 5
    },

    searchForm: {
        position: 'absolute',
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
        height: 50,
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#009900',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },


});

export default Main;