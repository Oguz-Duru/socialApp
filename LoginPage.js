import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Bottom from './component/Bottom';

const LoginPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/*TopBar Başlangıç */}
            <View style={styles.topBar}>
                <FontAwesomeIcon name='home' size={25} />

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        textAlign: 'center',
                        top: -10, right: -30, borderRadius: 20, width: 20, height: 20, color: 'white', zIndex: 99, color: 'white', fontWeight: 'bold',
                        backgroundColor: 'red', fontSize: 10,
                    }}> 1</Text>
                    <FontAwesomeIcon name='bell' size={25} />
                    <Text style={{
                        textAlign: 'center',
                        top: -10, right: -30, borderRadius: 20, width: 20, height: 20, color: 'white', zIndex: 99, color: 'white', fontWeight: 'bold',
                        backgroundColor: 'red',
                        fontSize: 10,
                    }}> 1</Text>
                    <FontAwesomeIcon name='user' color='black' size={25} />
                </View>
            </View>
            {/**TopBar Bitiş */}

            {/*Hikayeler Kısmı */}
            <View style={{ backgroundColor: 'white', paddingBottom: 10 }}>
                <ScrollView horizontal={true} >
                    <View style={styles.stories}>
                        <View style={styles.story}>
                            <Image style={styles.storyImage} source={require('./assets/meprofil.jpg')}></Image>
                            <FontAwesomeIcon name='plus' color='black' size={10} style={{
                                position: 'absolute', right: 0, paddingLeft: 11, paddingTop: 11, width: 30, height: 30, top: 40, borderRadius: 100,
                                backgroundColor: '#eff396', borderWidth: 2, borderColor: 'white'
                            }} />
                            <Text style={styles.storyName}> Hikayen </Text>
                        </View>
                        <View style={styles.story}>
                            <Image style={styles.storyImage} source={require('./assets/profil1.jpg')}></Image>
                            <Text style={styles.storyName}> natalie.e </Text>
                        </View>
                        <View style={styles.story}>
                            <Image style={styles.storyImage} source={require('./assets/profil2.jpg')}></Image>
                            <Text style={styles.storyName}> razeh </Text>
                        </View>
                        <View style={styles.story}>
                            <Image style={styles.storyImage} source={require('./assets/profil3.jpg')}></Image>
                            <Text style={styles.storyName}> lucifermic </Text>
                        </View>
                        <View style={styles.story}>
                            <Image style={styles.storyImage} source={require('./assets/mert.jpg')}></Image>
                            <Text style={styles.storyName}> hnrlmert</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
            {/* Hikayeler*/}

            {/**Kaydırmalı Post */}
            <ScrollView>
                <View style={styles.posts}>
                    <View style={styles.post}>
                        <View style={styles.postTopBar}>
                            <View style={styles.postInfo}>
                                <Image style={styles.postUserImg} source={require('./assets/profil1.jpg')}></Image>
                                <View>
                                    <Text style={styles.postName}>natalie.e</Text>
                                    <Text style={{ color: '#a9a9a9', marginLeft: 5, fontSize: 11 }}>1 dakika önce</Text>
                                </View>
                            </View>
                            <View>
                                <FontAwesomeIcon name='bars' size={25} color={'#B4B4B8'} />
                            </View>
                        </View>
                        <View>
                            <Image style={styles.postImg} source={require('./assets/post.jpg')}></Image>
                            <View style={styles.postLiked}>
                                <Text> 👻 liked by</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 3, marginRight: 3 }}>razeh</Text>
                                <Text>and</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>others</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <Text style={styles.postDescription}>When life gives you lines, arrange them in When life gives you lines, arrange them in When life gives you lines, arrange them in</Text>
                            </View>
                        </View>
                        <View style={styles.postBottom}>
                            <FontAwesomeIcon name='heart' size={25} style={{ margin: 5 }} />
                            <FontAwesomeIcon name='comment' size={25} style={{ margin: 5 }} />
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postTopBar}>
                            <View style={styles.postInfo}>
                                <Image style={styles.postUserImg} source={require('./assets/profil1.jpg')}></Image>
                                <View>
                                    <Text style={styles.postName}>natalie.e</Text>
                                    <Text style={{ color: '#a9a9a9', marginLeft: 5, fontSize: 11 }}>1 dakika önce</Text>
                                </View>
                            </View>
                            <View>
                                <FontAwesomeIcon name='bars' size={25} color={'#B4B4B8'} />
                            </View>
                        </View>
                        <View>
                            <Image style={styles.postImg} source={require('./assets/post.jpg')}></Image>
                            <View style={styles.postLiked}>
                                <Text> 👻 liked by</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 3, marginRight: 3 }}>razeh</Text>
                                <Text>and</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>others</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <Text style={styles.postDescription}>When life gives you lines, arrange them in When life gives you lines, arrange them in When life gives you lines, arrange them in</Text>
                            </View>
                        </View>
                        <View style={styles.postBottom}>
                            <FontAwesomeIcon name='heart' size={25} style={{ margin: 5 }} />
                            <FontAwesomeIcon name='comment' size={25} style={{ margin: 5 }} />
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postTopBar}>
                            <View style={styles.postInfo}>
                                <Image style={styles.postUserImg} source={require('./assets/profil1.jpg')}></Image>
                                <View>
                                    <Text style={styles.postName}>natalie.e</Text>
                                    <Text style={{ color: '#a9a9a9', marginLeft: 5, fontSize: 11 }}>1 dakika önce</Text>
                                </View>
                            </View>
                            <View>
                                <FontAwesomeIcon name='bars' size={25} color={'#B4B4B8'} />
                            </View>
                        </View>
                        <View>
                            <Image style={styles.postImg} source={require('./assets/post.jpg')}></Image>
                            <View style={styles.postLiked}>
                                <Text> 👻 liked by</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 3, marginRight: 3 }}>razeh</Text>
                                <Text>and</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>others</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                <Text style={styles.postDescription}>When life gives you lines, arrange them in When life gives you lines, arrange them in When life gives you lines, arrange them in</Text>
                            </View>
                        </View>
                        <View style={styles.postBottom}>
                            <FontAwesomeIcon name='heart' size={25} style={{ margin: 5 }} />
                            <FontAwesomeIcon name='comment' size={25} style={{ margin: 5 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/**Kaydırmalı Post */}


            <Bottom />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    stories: {
        marginTop: 20,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    story: {
        width: 75,
        margin: 5,
        display: 'flex',
        alignItems: 'center'

    },
    storyImage: {
        borderWidth: 3,
        borderColor: '#EFF396',
        width: 70,
        height: 70,
        borderRadius: 100,
        objectFit: 'cover'
    },
    storyName: {
        fontSize: 12
    },
    posts: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    post: {
        marginTop: 20,
        width: '95%',
        padding: 12,
        height: '550',
        backgroundColor: 'white',
        borderRadius: 20
    },
    postTopBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    postUserImg: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    postName: {
        marginLeft: 6,
        fontWeight: 'bold'
    },
    postInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postImg: {
        marginTop: 10,
        width: '100%',
        height: 300,
        borderRadius: 20
    },
    postLiked: {
        marginTop: 5,
        flexDirection: 'row',
    },
    postDescription: {
        width: '100%',

    },
    postBottom: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    }
})

export default LoginPage;