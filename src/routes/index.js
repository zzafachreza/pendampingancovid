import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Tambah,
  Daftar,
  Monitor,
  Edit,
  Tanaman,
  Menu,
  MenuGejala,
  MenuPengertian,
  MenuPenularan,
  MenuPencegahan,
  MenuPerisapan,
  Cegah1,
  Cegah6,
  Cegah5,
  Cegah4,
  Cegah2,
  Cegah3,
} from '../pages';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuPengertian"
        component={MenuPengertian}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuGejala"
        component={MenuGejala}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuPenularan"
        component={MenuPenularan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuPencegahan"
        component={MenuPencegahan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuPerisapan"
        component={MenuPerisapan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Cegah1"
        component={Cegah1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cegah2"
        component={Cegah2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cegah3"
        component={Cegah3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cegah4"
        component={Cegah4}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cegah5"
        component={Cegah5}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cegah6"
        component={Cegah6}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
