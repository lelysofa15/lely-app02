import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall({business}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={{fontSize: 17, fontFamily: 'nunito-semibold',}}>{business?.name}</Text>
        <Text style={{fontSize: 13, fontFamily: 'nunito-medium',color:Colors.grey}}>{business?.contactPerson}</Text>
        <Text style={{fontSize: 10, fontFamily: 'nunito', padding: 3, color:Colors.darkBlue, backgroundColor: Colors.lightBlue, borderRadius:3, alignSelf:'flex-start', paddingHorizontal: 7}}>{business?.category.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: Colors.white,
        borderRadius: 10,
    },
    image:{
        width: 160,
        height: 100,
        borderRadius:10
    },
    infoContainer:{
        padding: 7,
        display: 'flex',
        gap: 3
    }
})