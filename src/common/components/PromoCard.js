import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {IconButton, Card, Avatar, Button, Text} from 'react-native-paper';
import {Drawables} from '../utilities/Drawables';
import {horizontalScale, verticalScale} from '../utilities/Dimensions';

const PromoCard = () => {
  return (
    <Card
      className="p-4"
      mode="contained"
      contentStyle={{flexDirection: 'row'}}
    >
      <View className="flex-1 justify-around items-start">
        <Card.Title title="Best Seller of the Week" />
        <Card.Content>
          <Text className=" font-bold" variant="titleLarge">
            MJ's Hazelnut Flavour Chocolate
          </Text>
        </Card.Content>
        <Card.Actions>
          <Text variant="titleSmall">More Info</Text>
          <IconButton
            mode="text"
            icon="arrow-right"
            size={24}
            onPress={() => console.log('Pressed')}
          />
        </Card.Actions>
      </View>
      <Card.Cover
        source={Drawables.hazelnutChocolate}
        style={{width: horizontalScale(120)}}
      />
    </Card>
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
