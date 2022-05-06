import * as React from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';


const Register = () =>{
    const navigation = useNavigation();

    const [mail,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [samePassword,setSamePassword] = useState(null)
    const [titre,setTitre] = useState(null)


    const handleLogin = () =>{
        navigation.navigate("Home")
    }

    return(
        <View style={styles.container}>

            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover"  style={{width: '100%', height: '100%'}}>
                <Image
                    style={styles.img}
                    source={require('../assets/logoEni.png')}
                />
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={mail}
                        placeholder="E-mail"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Choisissez votre mot de passe"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Comfirmer mot de passe"
                    />
                    <View style={styles.select}
                    >
                        <RNPickerSelect
                            placeholder="Quel titre ?"
                            doneText={"selectionner"}
                            onValueChange={(titre) => setTitre(titre)}
                            items={[
                                { label: 'D2WM', value: 'D2WM' },
                                { label: 'CDA', value: 'CDA' },
                            ]}

                        />
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}>
                        <Text style={styles.txt}>Connection</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 60,
        width:350,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderColor:'#136DC1',
        borderRadius:10,
        backgroundColor:'white',
        textAlign:"center",
    },
    img:{
        height:160,
        width:160,
        borderRadius:100,
        alignItems: 'center',
        alignSelf:'center',
        margin:100
    },
    btn:{
        height:60,
        width:130,
        backgroundColor:"#124B7F",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        marginTop:22,
    },
    btn2:{

        height:60,
        width:130,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        marginTop:22,
    },
    txt:{
        color:"white",
    },
    txt2:{
        color:"#124B7F",
    },
    select:{
        height: 60,
        width:350,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderColor:'#136DC1',
        borderRadius:10,
        backgroundColor:'white',
        textAlign:"center",
        justifyContent: 'center',


    }

});


export default Register;


