import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../utilities/Dimensions';

const RecomendationCard = ({item}) => {
  return (
    <View
      className=" bg-white justify-center items-center m-2 rounded-3xl"
      style={styles.container}
    >
      <ImageBackground
        className="justify-end m-2 p-2"
        resizeMode="cover"
        source={item.image}
        style={{
          height: verticalScale(180),
          width: horizontalScale(120),
        }}
      >
        <View className="">
          <Text className="text-lg font-medium">{item.name}</Text>
          <Text className="text-base font-semibold">₹ {item.price}</Text>
        </View>
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
