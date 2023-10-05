import React, { useState} from 'react';
import {ScrollView,Text,StyleSheet,TouchableOpacity,TextInput,View,FlatList,Button} from 'react-native';
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

import {Picker} from '@react-native-picker/picker'

export default function Register(){

    const navigation = useNavigation();

    const [selectedValue, setSelectedValue] = useState("java");

    const [data, setData] = useState({})
    

    return(

        <ScrollView style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

            <Text style={styles.titletop}>Nome</Text>
            <TextInput
                placeholder="Nome"
                style={styles.input}

            />

            <Text style={styles.title}>Estado</Text>
            
            <View style={styles.containepicker}>
                <Button title="obter Estados" onPress={recebeEstados}/>
                <FlatList 
                    data={data}
                    renderItem={({item,index}) =>{
                        return(
                            <View onPress={() => alert(item.sigla)} style={styles.containepicker}>
                                <Text>{item.nome}</Text>
                            </View>
                        )
                    }}
                />
            </View>

            <Text style={styles.title}>Cidade</Text>

            <View style={styles.containepicker}>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 190 , borderColor: '#38a69d'}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Montes Claros" value="js1" />
            <Picker.Item label="Espinosa" value="js2" />
            <Picker.Item label="São Paulo" value="js3" />
            <Picker.Item label="Rio de Janeiro" value="js4" />
            <Picker.Item label="Distrito Federal" value="js5" />
            </Picker>
            </View>

            <Text style={styles.title}>Email</Text>
            <TextInput
                placeholder="Seu Email"
                style={styles.input}
                secureTextEntry={true}

            />
            <Text style={styles.title}>Senha</Text>
            <TextInput
                placeholder="Sua senha"
                style={styles.input}
                secureTextEntry={true}

            />

            <Text style={styles.title}>Confirme a Senha</Text>
            <TextInput
                placeholder="Confirme a Senha"
                style={styles.input}
                secureTextEntry={true}

            />
            
            
            <TouchableOpacity 
            style={styles.button}
          
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('SingIn')}>
                <Text style={styles.registerText}>Entrar</Text>
            </TouchableOpacity>

            </Animatable.View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d',
    },
    containepicker: {
        flex: 1,
        paddingTop: 5,
        borderRadius: 4,
        paddingVertical: 8,
        width: '55%',
        borderBottomWidth: 1,
      },
    containerHeader:{
        marginTop: '14%',
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
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    titletop:{
        fontSize: 20,
        marginTop: 20,
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
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
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
        alignSelf: 'center',
        marginBottom: 70

    },
    registerText:{
        color:'#a1a1a1'
    }

})