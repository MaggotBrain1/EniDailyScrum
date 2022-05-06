import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image,TextInput,ImageBackground} from 'react-native';
import Student from "../Entity/Student";
import {PostFeel} from "../ApiService";
import {useNavigation} from "@react-navigation/native";
import BottomBar from "../Nav/BottomBar";


export const Home = () =>{
    const navigation = useNavigation();

    const [workYesterday,setWorkYesterday] = useState(null)
    const [workToday,setWorkToday] = useState(null)
    const [feeling,setFeeling] = useState(null)
    const [observation,setObservation] = useState(null)

    let student = new Student;

    const handleFeeling = (humeur)=>{
        setFeeling(humeur);
    };

    const valideForm = async () =>{
        if(feeling && workYesterday && workToday && observation){
            student.name = "toto";
            student.feeling = feeling;
            student.workYesterday = workYesterday;
            student.workToday = workToday;
            student.Observation = observation;
            await PostFeel(student)
        }else{
            alert("Tout les champs doivent être remplis ")
        }
        navigation.navigate("Login")
    };

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')} resizeMode="cover"  style={{width: '100%', height: '100%'}}>

            <View style={styles.form}>
                <Text style={styles.title}>Mon Humeur Du Jour</Text>
                <View style={styles.formHead}>
                    <TouchableOpacity onPress={()=>handleFeeling("tout vas biens")}>
                        <Image
                            style={{height:80, width:80}}
                            source={require('../assets/nice.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>handleFeeling("serein pour la suite")}>
                        <Image
                            style={{height:80, width:80}}
                            source={require('../assets/good.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>handleFeeling("j'avance et j'essai de comprendre")}>
                        <Image
                            style={{height:80, width:80}}
                            source={require('../assets/doubt.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>handleFeeling("je ne comprend pas ce que je fais")}>
                        <Image
                            style={{height:80, width:80}}
                            source={require('../assets/help.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleFeeling("Oskoooour")}>
                        <Image
                            style={{height:80, width:80}}
                            source={require('../assets/wtf.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.formBody}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWorkYesterday}
                        value={workYesterday}
                        placeholder="Ce Que J'ai Fais Hier ?"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setWorkToday}
                        value={workToday}
                        placeholder="Ce Que Je Fais Aujourd'hui ?"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setObservation}
                        value={observation}
                        placeholder="Mes Questions et Observations ?"
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>valideForm()}>
                    <Text style={styles.txt}>Soumettre</Text>
                </TouchableOpacity>
            </View>

            <BottomBar style={styles.btmbar}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
        marginTop:190,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color:"white",
        fontSize:44,
        marginBottom:20
    },
    formHead:{
        flexDirection:"row",
        marginBottom:20

    },
    formBody:{
        alignItems: 'center',
        justifyContent: 'center'
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
    btn:{
        height:60,
        width:130,
        color:"white",
        backgroundColor:"#124B7F",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20,
        marginTop:22
    },
    txt:{
        color:'white',
        fontSize:18,
    },



});