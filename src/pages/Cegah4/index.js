import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput} from '../../components';

import RNExitApp from 'react-native-exit-app';
import {color} from 'react-native-elements/dist/helpers';

export default function ({navigation}) {
  const MyBullet = ({judul}) => {
    return (
      <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
            backgroundColor: colors.primary,
          }}></View>
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
              fontSize: windowWidth / 25,
              color: colors.black,
              textAlign: 'center',
            }}>
            Menggunakan Masker dengan benar
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
          Selalu menggunakan masker yang benar. Menggu-nakan masker dengan benar
          yaitu, masker harus menutupi hidung dan mulut. Tidak meletakkan masker
          di dagu atau tempat lain sehingga mulut dan hidung terbuka. Masker
          bukanlah hiasan.
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/masker.jpg')}
            style={{
              width: windowWidth - 20,
              resizeMode: 'stretch',
              height: windowWidth - 70,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
