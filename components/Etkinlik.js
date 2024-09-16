import React, { useState } from "react";
import {View,Text,StyleSheet} from 'react-native';
import { Calendar } from "react-native-calendars";

const Etkinlik=()=>{
    const [selectedDate, setSelectedDate]=useState('');
    
    const [events, setEvents] =useState({
        '2025-01-01': [{title: 'Yılbaşı', description:'Yeni Yıl'}],
        //diğer etkinlikler eklenebilir
    });

    const handleDayPress =(day)=>{
        setSelectedDate(day.dateString);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.header}>ETKİNLİKLER</Text>
            <Calendar
                onDayPress={handleDayPress}
                markedDates={{
                    [selectedDate]:{selected:true, selectedColor:'#E30613'},
                }}
            />

            <View style={styles.eventContainer}>
                {events[selectedDate]?(
                    events[selectedDate].map((event,index)=>(
                        <View key={index} style={styles.eventItem}>
                            <Text style={styles.eventTitle}>{event.title}</Text>
                            <Text style={styles.eventDescription}>{event.description}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noEventText}>0 ETKİNLİK</Text>
                )}

            </View>

        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1.2,
        padding:16,
        backgroundColor:'#fff',
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:30,
    },

    header:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
        color:'#E13630',
    },

    eventContainer:{
        marginTop:16,
    },

    eventItem:{
        marginBottom:8,
    },

    eventTitle:{
        fontSize:14,
        fontWeight:'bold',
        color:'gray',

    },

    eventDescription:{
        fontSize:14,
    },

    noEventText:{
        fontSize:14,
        color:'gray',
    },
});

export default Etkinlik;