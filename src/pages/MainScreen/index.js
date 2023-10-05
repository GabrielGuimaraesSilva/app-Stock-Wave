import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function MainScreen(){

    const navigation = useNavigation();

    return(
        
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
            <Text style={styles.message}>Stok-wave</Text>
                <View style={styles.iconbuttonuser} >
                    <TouchableOpacity style={styles.buttonUser} onPress={ () => navigation.navigate('User')} >
                            <AntDesign name="bars" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Animatable.View animation="fadeInUp" style={styles.containerbotons}>
           
            </Animatable.View>
            </Animatable.View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#333344',
    },
    containerHeader:{
        marginTop: '5%',
        marginBottom: '5%',
        paddingStart: '5%',

    },
    textomenu:{
        color: '#38a69d'
    },
    botao:{
        alignItems:'center',
        position: 'absolute',
        right: 40,
    },
    iconbutton:{
        alignItems:'center',
        position: 'absolute',
        right: 40,
        marginVertical: '8%'
    },
    iconbuttonuser:{
        alignItems:'center',

        right: -280,
    },
    message:{
         fontSize: 28,
         fontWeight: 'bold',
         color: '#fff'
    },
    containerbotons:{

        borderTopLeftRadius: 0,
        borderTopRightRadius:0,
        paddingStart: '2%',
        paddingEnd: '2%'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex:1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        //paddingStart: '2%',
        //paddingEnd: '2%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#c0c0c0',
        width: '100%',
        paddingVertical: 40,
        marginTop: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    buttonUser:{
        width: '90%',
        paddingHorizontal: 10,
        marginTop: -32,
    },
   
    buttonText:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        paddingStart: '5%',
    },
    buttonTextcima:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        paddingStart: '10%',
   
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'

    },
    registerText:{
        color:'#a1a1a1'
    }

})