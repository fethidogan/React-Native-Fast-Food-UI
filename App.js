import React from 'react';

// Fonts
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto'
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"
import Home from './components/Home';
import BottomNavigation from './components/BottomNavigation';
import Category from './components/Category';
import DetailsPage from './components/DetailsPage';


export default function App() {
  let [fontsLoaded, error] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      {/* Scrollable Components */}
      <Home />

      {/* Bottom Navigation Fixed */}
      <BottomNavigation/>
    </>
  );
}

