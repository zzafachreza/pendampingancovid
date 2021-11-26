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
            Mencuci tangan dengan benar
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
          Ajari sikecil untuk selalu mencuci tangan dengan sabun dibawah air
          mengalir dengan tahapan :
        </Text>
        <MyBullet
          angka={1}
          judul="Basahi tangan, gosok sabun pada telapak tangan, kemudian gosok kedua telapak tangan secara memutar"
        />
        <MyBullet angka={2} judul="Gosok puggung tangan dan sela-sela jari" />
        <MyBullet
          angka={3}
          judul="Gosok kedua telapak tangan dan sela-sela jari"
        />
        <MyBullet
          angka={4}
          judul="Gosok punggung jari kedua tangan, dengan posisi tangan saling mengunci."
        />
        <MyBullet angka={5} judul="Gosok dan putar ibu jari" />
        <MyBullet
          angka={6}
          judul="Letakkan ujung kuku di telapak tangan dengan di putar, dan bilas dengann air bersih. Ingat cuci tangan minimal 20 detik"
        />
      </View>
    </SafeAreaView>
  );
}
