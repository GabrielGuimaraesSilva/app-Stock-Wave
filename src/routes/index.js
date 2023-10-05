import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import MainScreen from '../pages/MainScreen';


const Stack = createNativeStackNavigator();


export default function Routes(){
return(

    <Stack.Navigator>

        <Stack.Screen
        name="SingIn"
        component={SignIn}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
        />

   </Stack.Navigator>

);
}