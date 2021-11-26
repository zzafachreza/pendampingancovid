import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput, MyHeader} from '../../components';

import RNExitApp from 'react-native-exit-app';
import {color} from 'react-native-elements/dist/helpers';

export default function ({navigation}) {
  const MyBullet = ({angka, judul}) => {
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
            // backgroundColor: colors.primary,
            borderColor: colors.primary,
            borderWidth: 1,

            padding: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 30,
              color: colors.primary,
              textAlign: 'center',
            }}>
            {angka}
          </Text>
        </View>
        <Text
          style={{
            marginHorizontal: 10,
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'justify',
          }}>
          {judul}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <MyHeader />
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <View
          style={{
            padding: 10,
            backgroundColor: colors.secondary,
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 20,
              color: colors.black,
              textAlign: 'center',
            }}>
            Etika saat batuk dan Bersin
          </Text>
        </View>

        <Text
          style={{
            margin: 10,
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'justify',
          }}>
          {'   '}
          Etika batuk dan bersin adalah tata cara batuk dan besin yang benar
          dengan cara menutup hidung dan mulut dengan tissue atau lengan baju,
          sehingga bakteri tidak menyebar ke udara dan tidak menular ke orang
          lain. 5 langkah etika batuk dan bersin yang harus lakukan :
        </Text>
        <MyBullet
          angka={1}
          judul="Gunakan Masker atau tisu saat batuk/bersin"
        />
        <MyBullet
          angka={2}
          judul="Jika tidak ada tisu/masker tutup mulut dan hidung menggunkan siku dalam baju"
        />
        <MyBullet angka={3} judul="Tutup mulut dan hidung menggunkan tisu" />
        <MyBullet angka={4} judul="Buang tisu/masker ditempat sampah" />
        <MyBullet
          angka={5}
          judul="Cucilah tangan dengan menggunakan air mengalir dengan sabun setelah bersin/batuk."
        />
      </View>
    </SafeAreaView>
  );
}
