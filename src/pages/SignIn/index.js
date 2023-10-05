import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,} from 'react-native';

import * as Animatable from 'react-native-animatable'

import {FontAwesome} from '@expo/vector-icons'

import {useNavigation} from '@react-navigation/native'

export default function SignIn(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.titletop}>Email</Text>
            <FontAwesome name="user" size={30} color="#3c3c3c"/>
            <TextInput
                placeholder="Digite um email..."
                style={styles.input}
            />
            <Text style={styles.title}>Senha</Text>
            <FontAwesome name="lock" size={30} color="#3c3c3c"/>
            <TextInput
                placeholder="Sua senha"
                style={styles.input}
                secureTextEntry={true}

            />

            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('MainScreen')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#333344'
    },
    containerHeader:{
        marginTop: '5%',
        marginBottom: '8%',
        paddingStart: '5%',

    },
    message:{
         fontSize: 28,
         fontWeight: 'bold',
         color: '#fff'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:1,
        borderTopLeftRadius:0,
        borderTopRightRadius: 0,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    titletop:{
        fontSize: 20,
        marginTop: 30,
    },
    title:{
        fontSize: 20,
        marginTop: 5,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#333344',
        width: '100%',
        borderRadius: 0,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'

    },
    registerText:{
        color:'#a1a1a1'
    }

})