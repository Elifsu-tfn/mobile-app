import React, { useState } from "react";
import {View, Text, TouchableOpacity,StyleSheet,Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HizliErisim=()=>{
    const [activeIndex, setActiveIndex]= useState(null);

    const menuItems=[
        {label:"Rekabet Hukuku",icon: require('../assets/icon1.png')},
        {label:"Bilgi Edinme",icon: require('../assets/icon2.png')},
        {label:"Kılavuzlar",icon: require('../assets/icon3.png')},
        {label:"Kurul Kararları",icon: require('../assets/icon4.png')},
        {label:"Tanıtım",icon: require('../assets/icon5.png')},
        {label:"Kütüphane",icon: require('../assets/icon6.png')},
        {label:"Tebliğler",icon: require('../assets/icon7.png')},
        {label:"Bildirilen Birleşme Devralma",icon: require('../assets/icon8.png')},
        {label:"Üyelik",icon: require('../assets/icon9.png')},
        {label:"Sınav Duyuruları",icon: require('../assets/icon10.png')},
        {label:"Onbinde Dört Pay",icon: require('../assets/icon11.png')},
        {label:"Yargı Karaları",icon: require('../assets/icon12.png')},
        
    ];

    const handlePressIn=(index)=>{
        setActiveIndex(index);
    };

    const handlePressOut=()=>{
        setActiveIndex(null);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.header}>HIZLI ERİŞİM</Text>

            <View style={styles.inputContainer}>
                {menuItems.map((item,index)=>(
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.menuItem,
                        activeIndex===index ? styles.menuItemActive:null,
                    ]}
                    onPressIn={()=> handlePressIn(index)}
                    onPressOut={handlePressOut}
                >
                    <Image source={item.icon} style={styles.icon}/>
                    <Text style={styles.menuText}>{item.label}</Text>

                </TouchableOpacity>
            ))}
            </View>
            
            

        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:2.6,
        backgroundColor:'#fff',
        padding:20,
        borderRadius:5,
        marginTop:20,
        marginBottom:30,
    },

    inputContainer:{
        marginLeft:30,
        marginRight:30,
    },

    header:{
        marginLeft:10,
        fontSize:18,
        color:'#E30613',
        fontWeight:'bold',
        marginBottom: 10,  
    },
    menuItem:{
        flexDirection:'row',
        padding:15,
        borderBottomColor:'#ddd',
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'#fff',
        marginBottom:10,
        alignItems:'center',
    },

    menuItemActive:{
       backgroundColor:'#E30613',
       borderColor:'#E30613',
    },

    menuText:{
        fontSize:16,
        color:'#000',
        marginLeft:10,
    },
    icon:{
        width:24,
      height:24,
    },
});

export default HizliErisim;
