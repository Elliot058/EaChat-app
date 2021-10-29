import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const SimpleLottie = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/sleepingcat.json')}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 230,
    height: 230,
  },
});

export default SimpleLottie;
