import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Options=()=>{

    const navigation=useNavigation();

    const handlePress=(page)=>{
        navigation.navigate(page);
    };
    return(
    <View style={styles.container}>
        <View style={styles.menu}>
            <MenuItem title="Başvuru Danışmanı" icon={require('../assets/logo1.png')} onPress={()=>handlePress('...')}/>
            <MenuItem title="Taahhüt Başvuruları" icon={require('../assets/logo2.png')} onPress={()=>handlePress('...')}/>
            <MenuItem title="Pişmanlık Başvuruları" icon={require('../assets/logo3.png')} onPress={()=>handlePress('...')}/>
            <MenuItem title="E-Devlet Hizmetleri" icon={require('../assets/logo4.png')} onPress={()=>handlePress('...')}/>
            <MenuItem title="Online Sözlü Savunma" icon={require('../assets/logo5.png')} onPress={()=>handlePress('...')}/>
            <MenuItem title="Uzlaşma Başvuruları" icon={require('../assets/logo6.png')} onPress={()=>handlePress('...')}/>

        </View>
    </View>    
);


}

const MenuItem=({title,icon,onPress})=>{
    return(
        <TouchableOpacity style={styles.MenuItem} onPress={onPress}>
            <Image source={icon} style={styles.menuIcon}/>
            <Text style={styles.MenuText}>{title}</Text>

        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        padding:10,
    },

    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#E30613',
        marginBottom:10,
    },

    menu:{
        backgroundColor:'#fff',
        borderRadius:8,
        padding:10,
    },

    MenuItem:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
    },
    menuIcon:{
        widht:30,
        height:30,
        marginRight:10,

    },

    MenuText:{
        fontSize:16,
        color:'#333',
    },
});

export default Options;