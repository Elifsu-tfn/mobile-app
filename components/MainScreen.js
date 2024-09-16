import React from "react";
import { StyleSheet , View, ScrollView  } from "react-native";
import SocialMediaIcons from "../components/socialMediaIcons";
import SliderPage from "../components/SliderPage";
import MenuOption from "../components/MenuOption";
import Search from "../components/Search";
import HizliErisim from "../components/HizliErisim";
import Etkinlik from "../components/Etkinlik";
import EndOfProject from "../components/EndOfProject";

export default function MainScreen(){

  return(
   <ScrollView contentContainerStyle={styles.scrollContainer}>

    <SocialMediaIcons style={styles.FirstCobtainer}/>

    <SliderPage stye={styles.SecondContainer}/>

    <MenuOption style={styles.ThirdContainer}/>

    <Search style={styles.FourthContainer}/>

    <HizliErisim style={styles.FifthContainer}/>

    <Etkinlik style={styles.sixthContainer}/>

    <EndOfProject style={styles.seventhContainer}/>

   </ScrollView>
  );
}

const styles=StyleSheet.create({
  scrollContainer:{
    flexGrow:1,
    backgroundColor:'#f5f5f5',
    paddingHorizontal:10,
    paddingTop:10,
  
  },

  FirstCobtainer:{
    flex:1,

  },

  SecondContainer:{
    flex:0.5,
   
  },

  ThirdContainer:{
    flex:0.5,
  },

  FourthContainer:{
    flex:0.5,
  },

  FifthContainer:{
    flex:0.5,
  },

  sixthContainer:{
    flex:0.5,
  },

  seventhContainer:{
    flex:0.5,
  },
});