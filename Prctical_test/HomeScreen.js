import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

const HomeScreen = props => {
 
    return(
        <View>
            <Text>
                This is a home page
            </Text>
        </View>
    );

};

const styles=StyleSheet.create({
    ViewSytyle:{
        alignItems:'center',
    },
});

export default HomeScreen;