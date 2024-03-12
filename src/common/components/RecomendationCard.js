import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../utilities/Dimensions';
import LinearGradient from 'react-native-linear-gradient';

const RecomendationCard = ({item}) => {
  return (
    <View className="m-2 rounded-3xl" style={styles.container}>
      <ImageBackground
        className="justify-end"
        resizeMode="cover"
        source={item.image}
        imageStyle={{borderRadius: 20}}
        style={{
          height: verticalScale(180),
          width: horizontalScale(120),
        }}
      >
        <LinearGradient
          className=" px-3 py-2 rounded-b-2xl"
          colors={['transparent', 'saddlebrown']}
        >
          <View>
            <Text className="text-sm font-bold text-white">{item.name}</Text>
            <Text className="text-xs font-semibold text-white">
              ₹ {item.price}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default RecomendationCard;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
});
