import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';

//conatants
import {images, theme} from '../constants';

const {onboarding1, onboarding2, onboarding3} = images;

//theme
const {COLORS, FONTS, SIZES} = theme;

const onBoardings = [
  {
    title: "Let's chat",
    description:
      'Eu laborum elit anim aliqua enim Lorem exercitation.Elit ea ad amet eu. ',
    img: onboarding1,
  },
  {
    title: 'End to end encryption',
    description:
      'Eu laborum elit anim aliqua enim Lorem exercitation.Elit ea ad amet eu. ',
    img: onboarding2,
  },
  {
    title: 'Payment Integration',
    description:
      'Eu laborum elit anim aliqua enim Lorem exercitation.Elit ea ad amet eu. ',
    img: onboarding3,
  },
];

const OnboardingScreen = ({navigation}) => {
  const [completed, setCompleted] = React.useState(false);
  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    //To check if user has finished scrolling the onboarding pages
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });
    return () => scrollX.removeListener();
  }, []);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onBoardings.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  flex: 1,
                  width: '100%',
                  height: '50%',
                  top: 40,
                  position: 'absolute',
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: '19%',
                left: 30,
                right: 30,
              }}>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.grey,
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: COLORS.darkgray,
                  fontSize: 18,
                }}>
                {item.description}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#6495ED',
                position: 'absolute',
                bottom: 15,
                right: 0,
                width: 150,
                height: 50,
                paddingHorizontal: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
              }}
              onPress={() => navigation.navigate('Login')}>
              <Text style={{...FONTS.h2, color: COLORS.white}}>
                {completed ? "Let's Go" : 'Skip'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 11, SIZES.base],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[
                styles.dot,
                {width: dotSize, height: dotSize},
              ]}></Animated.View>
          );
        })}
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: 'tomato',
    marginHorizontal: SIZES.radius / 3,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '35%' : '30%',
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding * 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
