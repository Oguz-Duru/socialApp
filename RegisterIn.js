import React, { useEffect, useState } from 'react';
import { db, auth } from './firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import { getFirestore, collection, query, getDoc, doc, setDoc, addDoc, add, updateDoc, onSnapshot } from "firebase/firestore";

const SignUp = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    const [username, setUsername] = useState(null)

    const navigation = useNavigation()

    const submitRegister = async () => {
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            setDoc(doc(db, 'users', email), {
                name: name,
                username: username,
                password: password, 
            })
            if (!user === null) {
                alert('kayıt oldunuz')
                navigation.navigate('RegisterPage')
            }
        })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 50, }}>
            <TextInput style={styles.input}
                placeholder="Ad Soyad"
                placholderTextColor="6fc276"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput style={styles.input}
                placeholder="Kullanıcı adı"
                placholderTextColor="6fc276"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput style={styles.input}
                placeholder="E-Posta"
                placholderTextColor="6fc276"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />
            <TextInput style={styles.input}
                placeholder="Password"
                placholderTextColor="6fc276"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={submitRegister} >
                <Text style={styles.btnText}>Kayıt Ol</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
                <Text>Giriş yap</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        padding: 8,
        margin: 5,
        width: '90%'
    },
    btn: {
        backgroundColor: '#756AB6',
        padding: 13,
        borderRadius: 20,
        margin: 5,
        width: '90%'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    }
})
export default SignUp;