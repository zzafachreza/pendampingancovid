import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import {colors} from '../../utils';

export default function Splash({navigation}) {
  const top = new Animated.Value(0.3);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 0.5,
          duration: 1000,
        }),
        Animated.timing(top, {
          toValue: 0.3,
          duration: 1000,
        }),
      ]),
      {
        iterations: 20,
      },
    ).start();
  };

  useEffect(() => {
    animasi();
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={
          ({
            width: 220,
            height: 220,
          },
          {
            transform: [{scale: top}],
          })
        }
      />
      <ActivityIndicator
        color={colors.primary}
        size="large"
        style={{
          marginTop: -50,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
