import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const BottomMenu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab} onPress={()=>navigation.navigate('LoginPage')}>
                <FontAwesomeIcon name="home" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <FontAwesomeIcon name="compass" size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('VeriEkle')}>
                <FontAwesomeIcon name="plus" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
                <FontAwesomeIcon name="search" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Profile')}>
                <FontAwesomeIcon name="user" color='black' size={25} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 60,
        bottom: 0,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white'
    },
    tab: {

        alignItems: 'center',
    },
    tabText: {
        marginTop: 5,
    },
});

export default BottomMenu;
