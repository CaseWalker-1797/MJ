import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {horizontalScale, verticalScale} from '../utilities/Dimensions';
import {Drawables} from '../utilities/Drawables';
import CommonButton from './CommonButton';

const YourOrderCard = () => {
  return (
    <Card mode="outlined">
      <View className="flex-row justify-center items-center rounded-2xl p-4">
        <Image
          className="rounded-2xl"
          source={Drawables.bubblyChocolate}
          style={{
            resizeMode: 'cover',
            height: verticalScale(150),
            width: horizontalScale(100),
          }}
        />
        <View className="flex-1 p-2 justify-evenly space-y-4">
          <View className="flex-row justify-between items-start">
            <Text className="text-sm font-semibold">
              Classic Silk Chocolate
            </Text>
            <Text className="text-sm font-mediun">x 2</Text>
          </View>
          <View className="flex-row justify-between items-start my-4">
            <Text className="text-sm font-medium">11 Mar 2024</Text>
            <Text className="text-sm font-bold">₹ 240</Text>
          </View>
          <CommonButton
            mode={'contained-tonal'}
            icon={'reload'}
            label={'Reorder'}
            onPress={() => console.log('Reorder Pressed')}
          />
        </View>
      </View>
    </Card>
  );
};

export default YourOrderCard;

const styles = StyleSheet.create({});
