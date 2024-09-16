
import {Image, TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Linking, TextInput } from 'react-native';
import {FontAwesome} from  '@expo/vector-icons';
import { useState } from 'react';

const LogoMenu=()=>{
    const [menuVisible, setMenuVisible]=useState(false);

    const toggleMenu=()=>{
        setMenuVisible(!menuVisible);
    };
    return(
        <SafeAreaView>
            <View style={styles.headerContainer}>
              <Image source={require('../assets/rekabet_logo.png')} style={styles.logo} />
             <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
             <FontAwesome name='bars' size={24} color={"black"}/>
             </TouchableOpacity>            
            </View>

        {menuVisible &&(
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={()=>{/*...*/}}>
                    <Text style={styles.menuText}>KURUMSAL▽</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={()=>{/*...*/}}>
                    <Text style={styles.menuText}>MEVZUAT▽</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={()=>{/*...*/}}>
                    <Text style={styles.menuText}>KARARLAR▽</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={()=>{/*...*/}}>
                    <Text style={styles.menuText}>YAYINLAR▽</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={()=>{/*...*/}}>
                    <Text style={styles.menuText}>DUYURULAR▽</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={()=>{/*...*/}}>
                    <Text style={styles.menuText}>TANITIM▽</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={()=>{/*...*/}}>
                    <Text style={styles.menuText}>İLETİŞİM▽</Text>
                </TouchableOpacity>


            </View>
        )
        }
        </SafeAreaView>
    )

};

const styles=StyleSheet.create({
    headerContainer:{

        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'#fff',
    },

    logo:{
        width:100,
        height:100,
        resizeMode:'contain',
    },
    menuButton:{
        padding:10,
    },

    menuContainer:{
        position:'absolute',
        top:50,
        right:10,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:5,
        width:150,
        zIndex:1000,
    },
    menuItem:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
    menuText:{
        fontSize:16,
        color:'#333',
    },
});

export default LogoMenu;