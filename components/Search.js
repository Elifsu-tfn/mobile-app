import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Search=()=>{

    const[selectedType,setSelectedType]= useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.header}>KARAR ALMA</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Başlık:</Text>
                <TextInput
                style={styles.input}
                placeholder="Başlık içerisinde ara..."
                placeholderTextColor='#999'
            />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Metin:</Text>
                <TextInput
                style={styles.input}
                placeholder="Karar içerisinde ara..."
                placeholderTextColor='#999'
            />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Yayım Tarihi:</Text>
                <TextInput
                style={styles.input}
            />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Karar Türü:</Text>
                <Picker
                selectedValue={selectedType}
                style={styles.input}
                onValueChange={(itemValue, itemIndex)=> setSelectedType(itemValue)}
            >
                <Picker.Item label="Karar Türü Seçin" value=""/>
                <Picker.Item label="Birleşme ve Devralma" value="birlesme-devralma"/>
                <Picker.Item label="Diğer" value="diğer"/>
                <Picker.Item label="Menfi Tespit ve Muafiyet" value="menfi-tespit-muafiyet"/>
                <Picker.Item label="Özelleştirme" value="ozellestirme"/>
                <Picker.Item label="Rekabet İhlali" value="rekabet-ihlali"/>

            </Picker>
            </View>
            

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Karar Sayı/Tarih:</Text>
                <TextInput
                style={styles.input}
                />
                <Text style={styles.label}>/</Text>
                <TextInput
                style={styles.input}
                />

            </View>

            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>ARA</Text>
              </TouchableOpacity>

        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20,
        borderRadius:5,
        marginTop:20,
        marginBottom:30,
    },

    header:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10,
        color:'#E30613',
    },
    input:{
        height:40,
        borderColor:'#ddd',
        borderWidth:2,
        borderRadius:5,
        paddingHorizontal:10,
        marginBottom:10,
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    searchButton:{
        backgroundColor:'#E30613',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        marginLeft:350,
    },

    searchButtonText:{
        color:'#fff',
        fontSize:16,
    },
});

export default Search;