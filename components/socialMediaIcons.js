import { StatusBar } from 'expo-status-bar';
import {Image, TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Linking, TextInput } from 'react-native';
import {FontAwesome} from  '@expo/vector-icons';
import { useState } from 'react';

const SocialMediaIcons= ()=> {

    const openLink=(url)=>{
      Linking.openURL(url).catch((err) => console.error("An error occured",err));
};
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.content}>

        <View style={styles.SocialMediaIcons}>
        <Text style={styles.languageText}>EN</Text>
        <TouchableOpacity onPress={()=>openLink('https://www.facebook.com/people/Rekabet-Kurumu/100064394845349/')}>
            
            <Image source={require('../assets/facebook.png')} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>openLink('https://x.com/rekabetkurumu')}>
        <Image source={require('../assets/x.png')} style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>openLink('https://www.linkedin.com/company/turkish-competition-authority/?originalSubdomain=tr')}>
            <Image source={require('../assets/linkedin.png')} style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>openLink('https://www.youtube.com/channel/UC_EDyqicGBtowX4AVe4_Mog')}>
            <Image source={require('../assets/youtube.png')} style={styles.icon}/>
        </TouchableOpacity>
        </View>
    
        <View style={styles.searchContainer}>
        <Image source={require('../assets/search.png')} style={styles.icon}/>
        <TextInput
            style={styles.searchInput}
            placeholder=" Ara..."
            placeholderTextColor="#999"
        />
        
        </View>

        </View>

     

        <StatusBar style="auto" />
    </SafeAreaView>

    
    );

};

const styles = StyleSheet.create({
    container: {
        flex:0.1,
      backgroundColor: '#f5f5f5',
      marginBottom:10,  
    },
  
    icon: {
     
      width: 24,
      height: 24,
    },
  
    content:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal: 10,

     
    },
  
    SocialMediaIcons: {
      flexDirection:'row',
      alignItems:'center',
    },
  
    languageText:{
      marginRight:10,
      fontSize:16,
      color:'#000'
    },

  
    searchContainer:{
      flexDirection: 'row',
      alignItems:'center',
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      width: 150, 
    },
  
    searchInput: {
      marginRight:2,
      color: '#333',
      flex:0.5,
    },

    logo:
    {
        marginTop:15,
        fontSize:200,
    },

  
  
  });
  
  export default SocialMediaIcons;