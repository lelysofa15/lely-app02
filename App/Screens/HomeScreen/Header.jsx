import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const {user,isLoading}=useUser();
  return user&&(
    <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileMainCont}>
            <View style={styles.profileContainer}>
                <Image source={{uri:user?.imageUrl}}
                style={styles.userImage} />
                <View >
                    <Text style={{color:Colors.whiteBlue, fontFamily:'nunito'}}>Welcome,</Text>
                    <Text style={{color:Colors.whiteBlue, fontSize: 20, fontFamily:'nunito'}}>{user.fullName}</Text>
                </View>
            </View>
            <FontAwesome name="bookmark-o" size={27} color={Colors.whiteBlue} />
        </View>
        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Search'
            style={styles.textInput} />
            <FontAwesome name="search" style={styles.searchBtn} size={24} color={Colors.blue} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: Colors.blue,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileMainCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.whiteBlue,
        borderRadius: 10,
        width: '85%',
        fontSize: 16,
        fontFamily: 'nunito',
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 8,
    },
    userImage:{
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    searchBtn: {
        backgroundColor: Colors.whiteBlue,
        padding: 10,
        borderRadius: 10,
    },
})