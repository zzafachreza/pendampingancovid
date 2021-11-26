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
      <View style={{flexDirection: 'row', padding: 20}}>
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
            Makanan Bergizi untuk Anak
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
          Jangan lupa untuk memenuhi kebutuhan nutrisi sayuran hijau dan
          buah-buahan tinggi beta karoten, seperti wortel dan jeruk
        </Text>
        <Image
          source={require('../../assets/gizi.png')}
          style={{
            width: windowWidth - 20,
            resizeMode: 'stretch',
            height: windowWidth - 70,
          }}
        />
        <MyBullet angka={1} judul="Syukuri	dan	nikmati	aneka	ragam	bahan makanan." />
        <MyBullet
          angka={2}
          judul="Banyak makan sayur (3-4 porsi/hari) dan cukup buah2an (2-3 porsi/hari)."
        />
        <MyBullet angka={3} judul="Konsumsi lauk pauk berprotein tinggi" />
        <MyBullet angka={4} judul="Konsumsi aneka ragam bahan makanan pokok" />
        <MyBullet
          angka={5}
          judul="Batasi konsumsi panganan manis, asin dan berlemak (gula 4 sdm, garam 1 sdt, minyak 5 sdm)."
        />
        <MyBullet
          angka={6}
          judul="Biasakan sarapan pagi sebelum beraktifitas"
        />
        <MyBullet angka={7} judul="Minum air putih yang cukup dan aman" />
        <MyBullet angka={8} judul="Biasakan baca label pada kemasan makanan" />
        <MyBullet
          angka={8}
          judul="Biasakan cuci tangan dengan air mengalir dan sabun"
        />
        <MyBullet
          angka={10}
          judul="Berolahragalah secara teratur dan jaga berat badan ideal"
        />
        <MyBullet
          angka={11}
          judul="Untuk meningkatkan daya tahan tubuh kita perlu untuk mengkonsumsi makanan bergizi seimbang."
        />
        <MyBullet
          angka={12}
          judul="Isi Piringku : 1/2 piring terdiri dari 1/3 nya buah 2/3 nya sayur, 1/2 piring nya lagi terdiri dari 1/3 nya lauk pauk, 2/3 nya makanan pokok (KH)."
        />
        <MyBullet
          angka={13}
          judul="Makanan pokok : harus bervariasi, selain nasi, masih ada kentang, jagung, umbi2an."
        />
        <MyBullet
          angka={14}
          judul="Lauk pauk : lengkapi protein nabati (tahu, tempe, kacang2an) dan protein hewani (daging sapi, ikan, ayam, telur)."
        />
        <MyBullet
          angka={15}
          judul="Sayur dan buah diperbanyak, karena banyak mengandung vitamin dan mineral, yang saat ini sangat kita butuhkan untuk meningkatkan daya tahan tubuh."
        />
        <MyBullet
          angka={16}
          judul="Jangan lupa selalu mencuci sayur & buah dengan bersih, makanan dimasak matang. Rajin cuci tangan. Rutin berolahraga, minimal 30menit / hari 3-5x seminggu."
        />
      </View>
      <View style={{flexDirection: 'row', backgroundColor: colors.white}}>
        <View style={{flex: 1, padding: 10}}></View>
      </View>
    </ScrollView>
  );
}
