import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Pay() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const { width } = Dimensions.get('screen');

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Solicitando permissão de câmera</Text>;
    }
    if (hasPermission === false) {
        return <Text>Por favor, libere o acesso a câmera</Text>;
    }

    const leftTop = {
        borderLeftWidth: 5,
        borderTopWidth: 5,
        borderColor: 'white',
        borderTopLeftRadius: 15,
    };
    const leftBottom = {
        borderLeftWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white',
        borderBottomLeftRadius: 15,
    };
    const rightTop = {
        borderRightWidth: 5,
        borderTopWidth: 5,
        borderColor: 'white',
        borderTopRightRadius: 15,
    };
    const rightBottom = {
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white',
        borderBottomRightRadius: 15,
    };

    return (
        <View style={styles.background}>

            <View style={styles.viewTexto}>
                <Text style={styles.textView}>
                    PAGAMENTO
                </Text>

            </View>

            <View
                style={styles.viewQR}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                
                <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center',  }}>
                    <View style={{ width: width /2, height: width /2, }}>
                        <View style={{ flex: 1, flexDirection:'row', }} >
                            <View style={{ flex: 1, ...leftTop,  }} />
                            <View style={{ flex: 1, }} />
                            <View style={{ flex: 1, ...rightTop,  }} />
                        </View>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 1, flexDirection:'row', }} >
                            <View style={{ flex: 1, ...leftBottom,  }} />
                            <View style={{ flex: 1, }} />
                            <View style={{ flex: 1, ...rightBottom, }} />
                        </View>
                    </View>
                </View>

                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>

            <View style={styles.viewTexto}>
                {/* <Text>
                    PAGAMENTO
                </Text> */}

            </View>

        </View>
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
    viewTexto:{
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
    },
    viewQR: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
    },
    textView: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
      },
});