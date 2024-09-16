
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SocialMediaIcons from "./components/socialMediaIcons";
import SliderPage from "./components/SliderPage";
import MenuOption from "./components/MenuOption";
import HizliErisim from "./components/HizliErisim";
import Etkinlik from "./components/Etkinlik";
import EndOfProject from "./components/EndOfProject";
import BasvuruDanismani from "./components/BasvuruDanismani";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.FirstContainer}>
        <SocialMediaIcons />
      </View>
      
      <View style={styles.SecondContainer}>
        <SliderPage />
      </View>

      <View style={styles.ThirdContainer}>
        <MenuOption />
      </View>

      <View style={styles.FifthContainer}>
        <HizliErisim />
      </View>

      <View style={styles.SixthContainer}>
        <Etkinlik />
      </View>

      <View style={styles.SeventhContainer}>
        <EndOfProject />
      </View>


      


    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Homescreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MenuOption" component={MenuOption} />
        <Stack.Screen name="BasvuruDanismani" component={BasvuruDanismani} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
  scrollContainer:{
    flexGrow:1,
    backgroundColor:'#f5f5f5',
    paddingHorizontal:10,
    paddingTop:10,
  
  },

  FirstContainer:{
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

  SixthContainer:{
    flex:0.5,
  },

  SeventhContainer:{
    flex:0.5,
  },
});