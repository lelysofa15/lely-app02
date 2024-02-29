import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/images/login3.jpg')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={styles.textHeader}>Simplifying Home Care, One Tap at a Time!</Text>
        <Text style={styles.textDesc}>Effortlessly book top-notch cleaning services with skilled professionals, all through this app. Enjoy a sparkling clean home without the stress, only with Lely Cleaning.</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width: 450,
        height: 450,
        marginTop: 120,
        // marginVertical: 'auto',
        // borderWidth: 2,
        // borderColor: Colors.black,
        // borderRadius: 15,
    },
    subContainer: {
        // width: '100%',
        // height: '70%',
        marginTop:-30,
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // backgroundColor: Colors.blue,
        padding: 20,
    },
    textHeader: {
        fontSize: 27,
        color: Colors.black,
        // textAlign: 'center',
        fontWeight: 'bold',
        // fontFamily: 'Nunito',
    },
    textDesc: {
        fontSize: 16,
        color: '#999999',
        marginTop: 20,
        lineHeight: 22,
    },
    button: {
        padding: 10,
        backgroundColor: Colors.color4,
        borderRadius: 70,
        marginTop: 50,
        width: 90,
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        // alignContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold',
    }
        
})