import React, { useState } from "react";
import {Image,Linking,TouchableOpacity,StyleSheet,View,Text} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from '@expo/vector-icons';
import Swiper from "react-native-swiper";



const SliderPage=()=>{

    const [menuVisible,setMenuVisible]=useState(false);
    const [expandedMenuItems, setExpandedMenuItems]=useState({});

    const menuItems=[
        {
            label:"KURUMSAL",
            value:"KURUMSAL",
            subItems:[
                {label:"Hakkımızda", value:"HAKKIMIZDA"},
                {label:"Misyon ve Vizyonumuz", value:"MISYON VE VIZYONUMUZ"},
                {label:"Kurumsal Yapı", value:"KURUMSAL YAPI"},
                {label:"Stratejik Plan", value:"STRATEJIK PLAN"},
                {label:"Çalışma İlkeleri", value:"CALISMA ILKELERI"},
                {label:"Faaliyet Raporları", value:"FAALIYET RAPORLARI"},
                {label:"Hizmet Standartları", value:"HIZMET STANDARTLARI"},
                {label:"Uluslararası İlişkiler", value:"ULUSLARARASI ILISKILER"},
                {label:"Kamu Görevi ve Etik", value:"KAMU GOREVI VE ETIK"},
                {label:"On Binde Dört Paya İlişkin Bilgi", value:"ON BINDE DORT PAYA ILIŞKIN BILGI"},
                {label:"İnsan Kaynakları", value:"INSAN KAYNAKLARI"},
            ],
        },
        {
            label:"MEVZUAT",
            value:"MEVZUAT",
            subItems:[
                {label:"4056 Sayılı Kanun", value:"4056 SAYILI KANUN"},
                {label:"Yönetmelikler", value:"YONETMELIKLER"},
                {label:"Tebliğler", value:"TEBLIGLER"},
                {label:"Kılavuzlar", value:"KILAVUZLAR"},
            ],
        },
        {
            label:"KARARLAR",
            value:"KARARLAR",
            subItems:[
                {label:"Son Kurul Kararları", value:"SON KURUL KARARLARI"},
                {label:"Kurul Kararı Arama", value:"KURUL KARARI ARAMA"},
                {label:"Dava Arama", value:"DAVA ARAMA"},
                {label:"Mahkeme Karaı Arama", value:"MAHKEME KARARI ARAMA"},
            ],
        },
        {
            label:"YAYINLAR",
            value:"YAYINLAR",
            subItems:[
                {label:"Basında Rekabet Yazıları", value:"BASINDA REKABET YAZILARI"},
                {label:"Karar İstatistikleri", value:"KARAR ISTATISTIKLERI"},
                {label:"Birleşme ve  Devralma Görünüm Raporları", value:"BİRLESME VE DEVRALMA GORUNUM RAPORLARI"},
                {label:"Sektör Raporları", value:"SEKTOR RAPORLARI"},
                {label:"ICF", value:"ICF"},
                {label:"Rekabet Bülteni", value:"REKABET BULTENI"},
                {label:"Rekabet Dergisi", value:"REKABET DERGISI"},
                {label:"Uzmanlık Tezleri", value:"UZMANLIK TEZLERI"},
                {label:"Rekabet İktisadı El Kitabı", value:"REKABET IKTISADI EL KITABI"},
                {label:"Tüketiciler için Rekabet Hukuku", value:"TUKETICILER ICIN REKABET HUKUKU"},
                {label:"KOBİ'ler için Rekabet Hukuku", value:"KOBI'LER ICIN REKABET HUKUKU"},
                {label:"Rekabet Terimleri Sözlüğü", value:"REKABET TERIMLERI SOZLUGU"},
                {label:"Diğer Çalışmalar", value:"DIGER CALISMALAR"},
            ],
        },
        {
            label:"DUYURULAR",
            value:"DUYURULAR",
            subItems:[
                {label:"Bildirilen Birleşmeler ve Devralmalar", value:"BILDIRILEN BIRLESMELER VE DEVRALMALAR"},
                {label:"Nihai Karar Açıklamaları/Tefhim Duyuruları", value:"NIHAI KARAR ACIKLAMALARI/TEFHIM DUYURULARI"},
                {label:"Soruşturma Açma/Nihai İnceleme/Sözlü Savunma Toplantısı", value:"SORUSTURMA ACMA/NIHAI INCELEME/SOZLU SAVUNMA TOPLANTISI"},
                {label:"Etkinlikler", value:"ETKİNLİKLER"},
                {label:"Mevzuat Çalışmaları", value:"MEVZUAT CALISMALARI"},
                {label:"İhale Duyuruları", value:"IHALE DUYURULARI"},
                {label:"Sınav Duyuruları", value:"SINAV DUYURULARI"},
                {label:"Staj Duyuruları", value:"STAJ DUYURULARI"},
            ],
        },
        {
            label:"TANITIM",
            value:"TANITIM",
            subItems:[
                {label:"Tanıtım Filmleri", value:"TANITIM FILMLERI"},
            ],
        },
        {label:"İLETİŞİM",value:"İLETİŞİM"},
    ];

    const toggleMenu=()=>{
        setMenuVisible(!menuVisible);
    };

    const toggleSubItems=(itemValue)=>{
        setExpandedMenuItems((prevExpanded)=>({
            ...prevExpanded,
            [itemValue]:!prevExpanded[itemValue],

        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <View style={styles.HeaderLogo}>
                  <Image source={require('../assets/rekabet_logo.png')}/>   
                </View>
            </View>

            <View  style={styles.menuButton}>
                   <TouchableOpacity onPress={toggleMenu}>
                   <FontAwesome name="bars" size={24} color={"#000"}/>
                   </TouchableOpacity>   
                </View>  

                {menuVisible && (
                    <View style={styles.menuContainer}>
                        {menuItems.map((item) => (
                            <View key={item.value}>
                                <TouchableOpacity
                                style={styles.menuItem}
                                onPress={() => toggleSubItems(item.value)}
                                >
                                    <Text>{item.label}</Text>
                                </TouchableOpacity>

                                {expandedMenuItems[item.value] && item.subItems && (
                                    <View style={styles.subMenuContainer}>
                                        {item.subItems.map((subItem) => (
                                            <TouchableOpacity
                                            key={subItem.value}
                                            style={styles.subMenuItem}
                                            >
                                                <Text>{subItem.label}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                )}

            <View style={styles.sliderOut}>
           
                <View style={styles.backgroundOut}>
                    <Image source={require('../assets/backgroundSlider.jpg')} style={styles.backgroundOut}/>
                </View>
                
                
                <View style={styles.sliderOuterContainer}>
                <View>
                    <Text style={styles.headerText}>GÜNCEL</Text>
                </View>

                <View style={styles.sliderInnerContainer}>
                  <Swiper 
                    style={styles.wrapper} 
                    showsButtons={true}
                    paginationStyle={styles.paginationStyle}
                    buttonWrapperStyle={styles.buttonWrapperStyle}
                    nextButton={<Text style={styles.buttonText}>›</Text>}
                    prevButton={<Text style={styles.buttonText}>‹</Text>}
                >

                    <View style={styles.slide}>
                    <Image
                        source={require('../assets/rekabet_logo.png')}
                        style={styles.logo}
                    />
                        <Text style={styles.newsText}>Adana ve Osmaniye İllerinde Faaliyet Gösteren Hazır Beton Üreticileri Hakkında Yürütülen Soruşturma Sonuçlandı.</Text>
                        <Text style={styles.dateText}>6.08.2024</Text>
                    </View>

                    <View style={styles.slide}>
                    <Image
                        source={require('../assets/rekabet_logo.png')}
                        style={styles.logo}
                    />
                        <Text style={styles.newsText}>Başka bir haber başlığı burada yer alacak.</Text>
                        <Text style={styles.dateText}>5.08.2024</Text>
                    </View>

                    <View style={styles.slide}>
                    <Image
                        source={require('../assets/rekabet_logo.png')}
                        style={styles.logo}
                    />
                        <Text style={styles.newsText}>Üçüncü haber başlığı buraya gelecek.</Text>
                        <Text style={styles.dateText}>4.08.2024</Text>
                    </View>

                    <View style={styles.slide}>
                    <Image
                        source={require('../assets/rekabet_logo.png')}
                        style={styles.logo}
                    />
                        <Text style={styles.newsText}>Dördüncü haber başlığı buraya gelecek.</Text>
                        <Text style={styles.dateText}>4.08.2024</Text>
                    </View>

                    <View style={styles.slide}>
                    <Image
                        source={require('../assets/rekabet_logo.png')}
                        style={styles.logo}
                    />
                        <Text style={styles.newsText}>Beşinci haber başlığı buraya gelecek.</Text>
                        <Text style={styles.dateText}>4.08.2024</Text>
                    </View>

                    <View style={styles.slide}>
                    <Image
                        source={require('../assets/rekabet_logo.png')}
                        style={styles.logo}
                    />
                        <Text style={styles.newsText}>Altıncı haber başlığı buraya gelecek.</Text>
                        <Text style={styles.dateText}>4.08.2024</Text>
                    </View>
                </Swiper>
              </View>

            </View>            

            </View>


        </View>



    );
};

const styles=StyleSheet.create({
    container:{
     
       height:500,
        backgroundColor:'#f5f5f5',
        marginBottom:50,
    },

    header:{

        backgroundColor:'#f5f5f5',
    },
    logo:{
        width:60,
        height:25,
        resizeMode:'contain',
        position:'absolute',
        top:10,
        left:10,
        /*marginRight:350,*/
    },
    headerText:{
        flex:1,
        color:'#E30613',
        fontSize:18,
        textAlign:'left',
        marginBottom:5,
        
    },

    sliderOut:{

        flex:1,
        overflow:'hidden',
        position:'relative',
    },

    backgroundOut:{
   
        borderRadius:10,
        position:'absolute',
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        zIndex:-1,
    },

  
    sliderOuterContainer:{
        flex:1,
        backgroundColor:'#f5f5f5',
        marginHorizontal:10,
        marginTop:20,
        marginBottom:15,
        padding:10,
        borderWidth:1,
        borderColor:'#ddd',
        position:'relative',
        borderRadius:10,
       

    },
    sliderInnerContainer:{
        flex:0.8,
        backgroundColor:'#fff',
        marginHorizontal:5,
        marginTop:2,
        padding:5,
        borderWidth:1,
        borderColor:'#ddd',
    },
    wrapper:{
        height:'100%',
    },
    slide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        
    },

    newsText:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10,
    },

    dateText:{
        fontSize:14,
        color:'#999',
        justifyContent:'flex-end',
        textAlign:'right',
    },

    paginationStyle:{
        bottom:10,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },

    buttonWrapperStyle:{
        backgroundColor:'transparent',
        flexDirection:'row',
        position:'absolute',
        paddingHorizontal:10,
        paddingVertical:10,
        justifyContent:'space-between',
        alignItems:'center',
    },
    buttonText:{
        fontSize:50,
        color:'#000',
    },
    menuButton:{
        position:'absolute',
        top:10,
        right:10,
       // marginLeft:440,
    },
    menuContainer:{
        position:'static',
        top:10,
        right:20,
        left:20,
        backgroundColor:'#fff',
        padding:10,
        zIndex:1,
    },
    menuItem:{
       
        paddingVertical:15,
        paddingHorizontal:10,
        fontSize:16,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        color:'#333',
    },

    subMenuContainer:{
        paddingLeft:20,
        position:'static',
    },

    subMenuItem:{
        paddingVertical:10,
        paddingHorizontal:10,
        fontSize:14,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        color:'#333',
    },
});

export default SliderPage;