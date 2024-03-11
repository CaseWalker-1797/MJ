import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {Drawables} from '../utilities/Drawables';
import {horizontalScale, verticalScale} from '../utilities/Dimensions';

const PromoCard = () => {
  return (
    <View
      className=" flex-row bg-white justify-evenly items-center m-2 px-4 py-2 space-x-2 rounded-3xl"
      style={styles.container}
    >
      <View className=" flex-1 justify-between items-start space-y-2">
        <Text className="text-base">Best Seller of the Week</Text>
        <Text className="text-xl font-bold">
          MJ's Hazelnut Flavour Chocolate
        </Text>
        <View className="flex-row justify-center items-center">
          <Text className="text-base font-medium">More Info</Text>
          <IconButton icon="arrow-right" size={22} />
        </View>
      </View>
      <Image
        className="border rounded-lg"
        source={Drawables.plainChocolate}
        style={{
          height: verticalScale(160),
          width: horizontalScale(120),
        }}
      />
    </View>
  );
};

export default PromoCard;

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
