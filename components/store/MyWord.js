import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/color';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const MyWord = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.wordContainer}
                onPress={props.onViewWord}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.star} onPress={props.onEditWord}>
                <FontAwesome5 name="edit" size={20} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sound} onPress={props.onDelete}>
                <MaterialCommunityIcons name="delete-forever-outline" size={30} color={Colors.primary} />
            </TouchableOpacity>
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.line,
            }}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 330,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: Colors.line,
        flexDirection: 'row',
        alignItems: 'center',
    },
    wordContainer: {
        height: 50,
        paddingLeft: 12,
        justifyContent: 'center',
        flex: 6,
    },
    text: {
        color: Colors.primary,
        fontSize: 20,
        fontFamily: 'baloo-bhaina-med',
    },
    star: {
        flex: 1,
        marginLeft: 30
    },
    sound: {
        flex: 1,
        marginRight: 10,
    },
});

export default MyWord;