import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../utilities/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton} from 'react-native-paper';

const FavoriteItemCard = ({item}) => {
  return (
    <View className="m-2 rounded-3xl" style={styles.container}>
      <ImageBackground
        className="justify-end"
        resizeMode="cover"
        source={item.image}
        imageStyle={{borderRadius: 20}}
        style={{
          height: verticalScale(190),
          width: horizontalScale(130),
        }}
      >
        <LinearGradient
          className=" flex-row px-4 py-3 justify-evenly rounded-b-2xl"
          colors={['transparent', 'saddlebrown']}
        >
          <View>
            <Text className="text-sm font-bold text-white">{item.name}</Text>
            <Text className="text-xs font-semibold text-white">
              ₹ {item.price}
            </Text>
          </View>
          <IconButton icon="heart" size={24} iconColor="red" />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default FavoriteItemCard;

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
