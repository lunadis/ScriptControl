import React from 'react'
import { View,
         Text,
         StyleSheet,
          Picker, } from 'react-native'
import {widthPercentageToDP as wp,
        heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Card() {

    return (
        <View style={styles.Container}>
            <>
            <View style={styles.Form}>
                <Text>From</Text>
            </View>
            <View style={styles.Form}>
                <Text>Result</Text>
            </View>
            </>
        </View>
    )
}


const styles = StyleSheet.create({

    Container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.59,
        },
        shadowOpacity: 0.29,
        shadowRadius: 5.65,
        elevation: 7,
        height: hp("80%"),
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: 'row',
        flexGrow: 0.    
    },
    Form:{
       height: hp("80%"),
       flexGrow: 1,
    },
    
})