import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { useNavigation} from "@react-navigation/native";

const MenuOption=()=>{

    const navigation=useNavigation();

    return(

        
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('BasvuruDanismani')}>
                <Image source={require('../assets/logo1.png')} style={styles.icon}/>
                <Text style={styles.menuText}>Başvuru Danışmanı</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} >
                <Image source={require('../assets/logo2.png')} style={styles.icon}/>    
                <Text style={styles.menuText}>Taahhüt Başvuruları</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} >
                <Image source={require('../assets/logo3.png')} style={styles.icon}/>
                <Text style={styles.menuText}>Pişmanlık Başvuruları</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} >
                <Image source={require('../assets/logo4.png')} style={styles.icon}/>
                <Text style={styles.menuText}>E-devlet Hizmetleri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} >
                <Image source={require('../assets/logo5.png')} style={styles.icon}/>
                <Text style={styles.menuText}>Online Sözlü Savunma</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} >
                <Image source={require('../assets/logo6.png')} style={styles.icon}/>
                <Text style={styles.menuText}>Uzlaşma Başvuruları</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles=StyleSheet.create({
    menuContainer:{
        flex:1.6,
        backgroundColor:'#fff',
        borderRadius:5,
        marginBottom:30,
     

    },
    menuItem:{
        flexDirection:'row',
        padding:15,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
       
    },

    menuText:{
        fontSize:16,
        color:'#333',
    },
});

export default MenuOption;
