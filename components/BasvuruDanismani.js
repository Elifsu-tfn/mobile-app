import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity } from "react-native";

const BasvuruDanismani=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerLogo}>
                <Image source={require('../assets/rekabet_logo.png')}/>
            </View>

      
            <View style={styles.contents}>
                <Text style={styles.title}>Başvuru Rehberi</Text>
                <Text style={styles.explanation}>
                Rekabet Kurumu'na başvuru süreçlerine ilişkin hizmetler e-Devlet Kapısı altyapısı üzerinden de sunulmaktadır.
                Bu çerçevede Elektronik Belge Yönetim Sistemi Evrak Doğrulama ve Rekabet Kurumu Başvuru Portalı'na https://www.turkiye.gov.tr/rekabet-kurumu adresinden ulaşılabilir.
                </Text>

                <TouchableOpacity>
                    <Text style={styles.options}>Şikayet ve İhbarlar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.options}>Birleşme,Devralma ve Ortak Girişimler</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.options}>Muafiyet Menfi Tespit Başvuruları</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.options}>Birleşme-Devralma,Menfi Tespit-Muafiyet Başvuruları Hakkında Açıklama</Text>
                </TouchableOpacity>

            </View>

        </View>
    )

};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E30613',
        padding:20,
    },
    headerLogo:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius:10,
    },
    contents:{
        flex:1,
        marginTop:10,
        marginBottom:10,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#fff',
        borderRadius:10,
    },

    title:{
        marginLeft:10,
        fontSize:18,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
        color:'#E30613',
    },

    explanation:{
        marginLeft:10,
        marginRight:10,
        fontSize:16,
        color:'#333',
        marginBottom:30,
    },

    options:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontSize:16,
        color:'#000',
        textDecorationLine:'underline',
    },
});

export default BasvuruDanismani;