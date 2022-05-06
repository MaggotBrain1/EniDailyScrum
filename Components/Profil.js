import * as React from "react";
import {StyleSheet,Text, View} from "react-native";
import PhotoItem from "./PhotoItem";

const Profil = () =>{

    return(
        <View style={styles.container}>
            <PhotoItem/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default Profil ;