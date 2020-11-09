/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

// const userToken = async () => {
//     await AsyncStorage.getItem('userToken');
// };

const HomeScreen = () => {
    global.currentScreenIndex = 'HomeScreen';

    fetch('http://duyphamdev.xyz:8111/student/ĐP20150919000000', {
        method: 'GET',
        // body: JSON.stringify({ email: 'duy@gmail.com', password: '123456' }),
        headers: {
            //Header Defination
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'fastm eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkdXlAZ21haWwuY29tIiwiaWF0IjoxNjAzMjg5Nzc0LCJleHAiOjE2MDMzNzYxNzR9.sD6id50sdfpwZmhH8AdvRwUGDln0aqzO70j2uBGXk2R9LJJ8OrMrkmn1_8J7wOAzwtE5HVbE2dTnpM9E01WMwQ'
        },
    }).then(response => response.json())
        .then(responseJson => {
            //Hide Loader
            setLoading(false);
            console.log(responseJson);
            // If server response message same as Data Matched
            if (responseJson.status == 200) {
                console.log(responseJson);
                // AsyncStorage.setItem('userToken', responseJson.data.accessToken);
                // AsyncStorage.setItem('username', responseJson.data.username);
                // AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
                // console.log(responseJson.data);
                // props.navigation.navigate('DrawerNavigationRoutes');
            } else {
                setErrortext('Please check your email id or password');
                console.log('Please check your email id or password');
            }
        })
        .catch(error => {
            //Hide Loader
            setLoading(false);
            console.error(error);
        });

    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
            <Text style={{ fontSize: 23, marginTop: 10 }}>Home Screen</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Welcome!!!
            </Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>https://aboutreact</Text>
        </View>
    );
};
export default HomeScreen;
