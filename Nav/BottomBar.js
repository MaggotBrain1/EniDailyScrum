import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";


const BottomBar = () =>{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.nav}>

            <TouchableOpacity onPress={()=>handleFeeling("tout vas biens")}>
                    <Image
                        style={{height:32, width:32}}
                        source={require('../assets/home.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handleFeeling("serein pour la suite")}>
                    <Image
                        style={{height:32, width:32}}
                        source={require('../assets/chat.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handleFeeling("j'avance et j'essai de comprendre")}>
                    <Image
                        style={{height:32, width:32}}
                        source={require('../assets/editer.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate("Profil")}>
                    <Image
                        style={{height:32, width:32}}
                        source={require('../assets/user.png')}
                    />
                </TouchableOpacity>
                </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav:{
        height:88,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:"row",
        backgroundColor:"white",
        marginTop:110
    }



});


export default BottomBar;