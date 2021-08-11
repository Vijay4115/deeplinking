import React from 'react'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Settings from '../Screens/Settings'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const StackNavigator =()=>{
    const linking = {
        prefixes: ['deeplinking://','https://myapp.com',"myapp://"],

        config:{
            screens:{
            Settings:{
                path:'Settings/:message'
            },
            Profile:{
                path:'Profile/:message'
            }
        }
        }
      };
        return(
        <NavigationContainer  linking={linking}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Settings" component={Settings}/>
            </Stack.Navigator>
        </NavigationContainer>
        )
}


//Check on terminal for deeplinks works or not::
//Ios: 
//xcrun simctl openurl booted myapp://Profile/yes

//android:
//adb shell am start -W -a android.intent.action.VIEW -d "myapp://Settings/android_deeplinking" com.deeplinking
// adb shell am start -W -a android.intent.action.VIEW -d "myapp://Profile/android_deeplinking" com.deeplinking  
export default StackNavigator;