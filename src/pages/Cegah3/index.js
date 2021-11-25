import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput} from '../../components';

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
    <ScrollView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.primary,
          // borderBottomLeftRadius: windowWidth / 10,
          // borderBottomRightRadius: windowWidth / 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: colors.white,
          }}>
          Kesekolah Waspada
        </Text>
        <Image
          source={require('../../assets/logo.png')}
          style={{width: 120, height: 120}}
        />
      </View>
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
            Protokol Kesekolah selama Pandemi
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
          Protokol keluar masuk rumah (Sekolah) selama pandemic yang dapat
          dilakukan untuk pencegahan COVID-19 adalah :
        </Text>
        <MyBullet angka={1} judul="Gunakan jaket atau baju lengan panjang" />
        <MyBullet
          angka={2}
          judul="Tidak perlu memakai aksesori seperti cincin, gelang atau kalung"
        />
        <MyBullet angka={3} judul="Gunakan masker" />
        <MyBullet angka={4} judul="Hindari penggunaan transportasi umum" />
        <MyBullet
          angka={5}
          judul="Pakai tisu di jari untuk menyentuh permukaan apapun dan buang ke tong sampah"
        />
        <MyBullet
          angka={6}
          judul="Jika batuk atau bersin gunakan tisu atau siku untuk menutu mulut"
        />
        <MyBullet
          angka={7}
          judul="Cuci tangan atau gunakan hand sanitizer setelah menyentuh benda atau permukaan apapun"
        />
        <MyBullet angka={8} judul="Usahakan bertransaksi non tunai" />
        <MyBullet
          angka={9}
          judul="Jangan menyentuh wajah sampai tangan benar-benar bersih"
        />
        <MyBullet
          angka={10}
          judul="Jaga jarak aman dengan orang lain (min 1 meter)"
        />
      </View>
    </ScrollView>
  );
}
