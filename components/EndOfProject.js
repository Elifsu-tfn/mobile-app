import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

const EndOfProject=()=>{

    return(
        <View style= {styles.container}>
            <View style={styles.horizontal}>
                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>KURUMSAL</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>MEVZUAT</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>KARARLAR</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>YAYINLAR</Text> 
                </TouchableOpacity>
            </View>

            <View style={styles.horizontal}>
                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>DUYURULAR</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>TANITIM</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>İLETİŞİM</Text> 
                </TouchableOpacity>
            </View>

            <View style={styles.vertical}>
                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>FAALİYET RAPORLARI</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>4054 Sayılı Kanun</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>STRATEJİK PLAN</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>REKABET DERGİSİ</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>UYUM PROGRAMI</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>KÜTÜPHANE</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>BİLGİ GÜVENLİĞİ POLİTAKAMIZ</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                <Image source={require('../assets/ok.png')} style={styles.icon}/>
                <Text style={styles.text}>KVK VE AYDINLATMA METNİ</Text> 
                </TouchableOpacity>
            </View>

            <View style={styles.address}>
                <Text style={styles.header}>REKABET KURUMU MERKEZ ADRES</Text>
                <Text>Üniversiteler Mah. 1597. Cad. no:9</Text>
                <Text>Bilkent Çankaya 06800/ANKARA</Text>
            </View>
            
            <View style={styles.tel}>
                <Image source={require('../assets/tel.png')}/>
                <Text> (312) 291 4444 - 291 4000</Text>
            </View>

            <View style={styles.fax}>
                <Image source={require('../assets/fax.png')}/>
                <Text>(312) 266 79 20</Text>
            </View>
        </View>
    );

};

const styles=StyleSheet.create({
    container:{
        padding:20,
   
        backgroundColor:'#fff',
        borderRadius:5,
        marginBottom:30,
    },

    horizontal:{
        flexDirection: 'row',
        marginBottom: 10,
    },

    menuItem:{
        paddingVertical:10,
        paddingHorizontal:5,
        flexDirection:'row',
    },

    vertical:{
        marginTop:20,
    },

    address:{
        marginTop:30,
    },

    header:{
        fontWeight:'bold',
        marginBottom:5
    },

    text:{
        fontSize:12,
        color:'#333',
    },

    icon:{
        width:16,
        height:16,
    },

    tel:{
        marginTop:20,
        flexDirection:'row',
    },

    fax:{
        marginTop:20,
        flexDirection:'row',
    },
});


export default EndOfProject;