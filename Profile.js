import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import BottomMenu from "./component/Bottom";
import { useEffect, useState } from "react";
import { getDoc, doc } from 'firebase/firestore';
import { db, auth } from './firebase';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Kullanıcının giriş yapmış olup olmadığını kontrol et
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                // Kullanıcı giriş yapmışsa, Firestore'dan kullanıcı verilerini al
                const userDoc = doc(db, 'users', user.email);

                try {
                    const userSnapshot = await getDoc(userDoc);
                    if (userSnapshot.exists()) {
                        // Eğer belge varsa, kullanıcı adını güncelle
                        setUsername(userSnapshot.data().username);
                    }
                } catch (error) {
                    console.error('Kullanıcı verileri alınırken hata:', error);
                }
            } else {
                // Kullanıcı giriş yapmamışsa, giriş sayfasına yönlendir
                navigation.navigate('LoginPage');
            }
        });

        // Bileşen sonlandığında aboneliği kapat
        return () => unsubscribe();
    }, [navigation]);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.background}>
                    <Image style={styles.profileBackground} source={require('./assets/profilebackground.jpg')}></Image>
                    <View style={styles.profileHeader}>
                        <View>
                            <Image style={styles.profileImg} source={require('./assets/profil1.jpg')}></Image>
                            <FontAwesomeIcon name='plus' color='black' size={10} style={{
                                position: 'absolute', right: 10, paddingLeft: 11, paddingTop: 11, width: 30, height: 30, top: 30, borderRadius: 100,
                                backgroundColor: '#eff396', borderWidth: 2, borderColor: 'white'
                            }} />
                            <Text style={{ fontWeight: 'bold', top: -32 }}>
                                {username}
                            </Text>
                            <Text style={{ top: -32, color: '#a9a9a9' }}>natalie.e</Text>
                        </View>

                        <TouchableOpacity style={styles.profileButton}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Düzenle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.profileButton}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Takip Et</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileContent}>✨ Kiev, Ukraine</Text>
                    <Text style={styles.profileContent}> 🌊 Swimming</Text>
                </View>

                <View style={{ paddingLeft: 20, paddingRight: 20, flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.userInfo}>200</Text>
                        <Text>Gönderi</Text>
                    </View>
                    <View>
                        <Text style={styles.userInfo}>97.5K</Text>
                        <Text >Takip</Text>
                    </View>
                    <View>
                        <Text style={styles.userInfo}>121</Text>
                        <Text>Takipçi</Text>
                    </View>
                    <View>
                        <Text style={styles.userInfo}>2.25M</Text>
                        <Text>Beğeni</Text>
                    </View>
                </View>
                <View style={styles.paylasimlar}>
                    <View>
                        <TouchableOpacity>
                            <FontAwesomeIcon name='trello' size={25} color={'black'} />
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity>
                            <FontAwesomeIcon name='film' size={25} color={'black'} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <FontAwesomeIcon name='bookmark' size={25} color={'black'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingRight: 20, paddingLeft: 20, flexDirection: 'row', width: '100%', marginTop: 20, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                    <Image style={styles.sharedPost} source={require('./assets/profil1.jpg')}></Image>
                </View>
            </ScrollView>
            <BottomMenu />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileBackground: {
        width: '100%',
        height: 250
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 20
    },
    profileImg: {
        width: 100,
        height: 100,
        top: -40,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'white'
    },
    profileButton: {
        backgroundColor: '#0C2D57',
        width: 100, height: 50,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInfo: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    profileContent: {
        top: -25,
        fontSize: 14,
    },
    userInfo: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    paylasimlar: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-around',
        marginTop: 30
    },
    sharedPost: {
        width: 110,
        height: 130,
        margin: 2,
    }
})

export default Profile;