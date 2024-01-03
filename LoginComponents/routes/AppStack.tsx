import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppwriteContext } from '../appwrite/AppwriteContext'

export const AppStack = () => {
    const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);
    const handleLogout = () => {
        appwrite.logout()
            .then(() => {
                setIsLoggedIn(false);
            })
    };
    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <Text>AppWrite Login Successfull</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});