import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet, YellowBox, Image } from 'react-native';
import { mask as masker, unMask } from 'remask';

YellowBox.ignoreWarnings([
  'Unrecognize WebSocket',
  'YellowBox has been'
]);



  export default function Cadastrar() {
    

    return (
      <KeyboardAvoidingView style={styles.background} >

        <ScrollView style={{ width: '100%', }}>
          <View style={styles.ViewPrincipal}>
            <View style={styles.conteinerLogo}>
              <Image source={require('./images/logo.png')} style={{ width: 300, height: 200 }} />
            </View>

            <View style={styles.conteiner}>
              <TextInput style={styles.input} placeholder="Nome Completo" autoCorrect={false} onChangeText={() => { }} />
              <TextInput style={styles.input} maxLength={11} keyboardType="decimal-pad" placeholder="CPF" autoCorrect={false} onChangeText={() => { }} />
              <TextInput style={styles.input} maxLength={15} keyboardType="phone-pad" placeholder="Telefone" autoCorrect={false} onChangeText={() => { }} />
              <TextInput style={styles.input} keyboardType="email-address" placeholder="Email" autoCorrect={false} onChangeText={() => { }} />
              <TextInput style={styles.input} secureTextEntry={true} underlineColorAndroid="transparent" placeholder="Senha" autoCorrect={false} onChangeText={() => { }} />
              <TextInput style={styles.input} secureTextEntry={true}  placeholder="Confirmar Senha" autoCorrect={false} onChangeText={() => { }} />
              <TouchableOpacity style={styles.btnSubmit} >
                <Text style={styles.SubmitText}>Criar Conta</Text>
              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>





      </KeyboardAvoidingView>

    );
  }


  const styles = StyleSheet.create({
    background: {
      flex: 1,
      //alignItems: 'center',
      width: '100%',
      //justifyContent: 'center',
      backgroundColor: '#DD3A06',
    },
    ViewPrincipal: {
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: "center",
      width: '90%',
    },
    conteinerLogo: {
      flex: 1,
      justifyContent: 'center',
    },
    conteiner: {
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
      width: '100%',
      paddingBottom: 50,
    },
    input: {
      backgroundColor: '#FFF',
      width: '100%',
      marginBottom: 20,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
    },
    btnSubmit: {
      // backgroundColor: '#00ff80',
      backgroundColor: '#0052cc',
      width: '100%',
      height: 45,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    SubmitText: {
      color: '#FFF',
      fontSize: 18,
    },
  });