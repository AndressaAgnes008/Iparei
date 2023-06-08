import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import api from '../services/api';

function Profile({ navigation }){
    const _id = '5fbadf2ca6a57d27743e1814'//navigation.getParam('_id');
    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [endereco, setEndereco] = useState(estabelecimentos);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [obs, setObs] = useState('');

    useEffect(() => {
        async function loadInitialPosition(){
            const response = await api.get('/profile' , {
                params: {
                    _id,
                }
            });
            
            console.log(_id)
            
            setEstabelecimentos(response.data.estas);
        }

        loadInitialPosition();
    }, []);

    // `https://github.com/${nomeUsuario}`

    async function loadProfile() {
        // const {latitude, longitude} = currentRegion;

        const response = await api.get('/profile' , {
            params: {
                _id,
            }
        });
        
        console.log(_id)
        
        setEstabelecimentos(response.data.estas);
        
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {estabelecimentos.map(estabelecimento => (
                <ScrollView 
                key={estabelecimento._id} > 
                <View style={styles.viewImage}>
                    <Image source={{ uri: `${estabelecimento.foto}` }} style={styles.image} />
                   
                </View>

                <View>
                    <View style={styles.viewTxtNome}>

                        <Text style={styles.textImage}>{estabelecimento.nome}</Text>
                    </View>
                    <Text onPress={loadProfile} style={styles.txtPrincipal}>Endereço: <Text style={styles.txtSecundario}> {estabelecimento.endereco}</Text></Text>
                    <Text style={styles.txtPrincipal}>Email: <Text style={styles.txtSecundario}> {estabelecimento.email}</Text></Text>
                    <Text style={styles.txtPrincipal}>CNPJ: <Text style={styles.txtSecundario}> {estabelecimento.cnpj} </Text></Text>
                    <Text style={styles.txtPrincipal}>Telefone: <Text style={styles.txtSecundario}> (11) 4707-7623 </Text></Text>
                    <Text style={styles.txtPrincipal}>Observação: <Text style={styles.txtSecundario}> {estabelecimento.obs} </Text></Text>
                </View>

            </ScrollView>
            ))}
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewImage: {
        //flex: 1,
        height: 300,
        //justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#bfbfbf',
    },

    image: {
        width: 400, 
        height: 300, 
        
        alignItems: 'center',
        alignContent: 'center',
       
    },

    textImage: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        alignContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    viewTxtNome: {
        alignContent: 'center',
        alignItems: 'center', 
        alignContent: 'center', 
        justifyContent: 'center', 
    },

    txtPrincipal: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 8
    },  

    txtSecundario: {
        fontWeight: 'normal',
        fontSize: 14,
        color: '#666',
        textAlign: 'justify'
        
    },

   



});

export default Profile;