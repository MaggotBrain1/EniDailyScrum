import {View,Image,Text,StyleSheet,TouchableOpacity} from "react-native";
import React, {useState} from 'react';

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";


const PhotoItem =() => {
    const [image, setImage] = useState(null);

    const selectPicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const img = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 3],
            quality: 1,
            allowsEditing: true,
        });
        setImage(img)
    }
    return(

        <View style={styles.main_container}>
            <TouchableOpacity onPress={selectPicture}
            >
                {
                    image ?
                        image && <Image source={{uri: image.uri}} style={styles.image}/>
                        :
                        <View style={styles.imageEmpty}>
                            <Image style={styles.icon} source={require('../assets/user.png')} />
                        </View>

                }
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    image: {
        width: 350,
        height: 200,
        marginTop:60,
        backgroundColor: 'gray',
        borderRadius:10,
        marginLeft:20,
    },
    imageEmpty:{
        width: 350,
        height: 200,
        marginTop:60,
        backgroundColor: 'transparent',
        borderRadius:10,
        marginLeft:20,
        alignItems:'center',

    },

    icon:{
        height:100,
        width: 100,
        top:50


    },
})
export default PhotoItem

