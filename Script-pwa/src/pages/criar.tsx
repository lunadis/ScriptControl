import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Card from '../componente/Card';

export default function Criar() {
    return (
        <View style={styles.Container}>
            <Card/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
        
    }
})
