import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {fonts, windowWidth, colors} from '../../utils';
import {MyButton, MyGap, MyInput, MyHeader} from '../../components';

import RNExitApp from 'react-native-exit-app';

export default function Home({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <MyHeader />
      <View style={{padding: 10, backgroundColor: colors.white, flex: 1}}>
        <Text
          style={{
            fontFamily: fonts.secondary[800],
            fontSize: windowWidth / 12,
            color: colors.primary,
            textAlign: 'center',
          }}>
          PENDAMPINGAN
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'center',
          }}>
          Dalam Persiapan Anak Sekolah Dasar Menghadapi Pembelajaran Tatap Muka
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 25,
            color: colors.black,
            textAlign: 'justify',
          }}>
          {'   '}
          Peran Orang tua sangat penting dalam menjaga putra putrinya aman
          ketika dilakukan proses pembelajaran secara Offline pasca Wabah Virus
          COVID-19 yang melanda. Orang tua mau tidak mau harus familier
          menghadapi dan mensikapi era New Normal proses pembelajaran disekolah
          yang digagas oleh Pemerintah Pusat.
        </Text>
      </View>
      <View style={{flexDirection: 'row', backgroundColor: colors.white}}>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                'Pendampingan COVID-19',
                'Apakah Anda yakin akan keluar dari aplikasi ?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => RNExitApp.exitApp()},
                ],
              )
            }
            style={{
              flexDirection: 'row',
              backgroundColor: colors.secondary,
              height: 50,
              padding: 10,
            }}>
            <View
              style={{
                // flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Icon
                type="ionicon"
                name="close"
                color={colors.white}
                size={windowWidth / 18}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  fontSize: windowWidth / 25,
                  color: colors.white,
                }}>
                Exit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            style={{
              flexDirection: 'row',
              backgroundColor: colors.primary,
              height: 50,
              padding: 10,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  fontSize: windowWidth / 25,
                  color: colors.white,
                }}>
                Next
              </Text>
            </View>
            <View>
              <Icon
                type="ionicon"
                name="arrow-forward-outline"
                color={colors.white}
                size={windowWidth / 18}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
