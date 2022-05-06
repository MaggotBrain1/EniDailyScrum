import * as React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Home} from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Profil from "../Components/Profil";

function Nav() {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Profil" component={Profil}/>


            </Stack.Navigator>
    );
}

export default Nav;