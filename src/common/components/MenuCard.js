import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {horizontalScale, verticalScale} from '../utilities/Dimensions';
import {useNavigation} from '@react-navigation/native';

const MenuCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="flex-1 flex-row items-center p-2 space-x-4"
      onPress={() => navigation.navigate('Product', {...item})}
    >
      <Image
        className="rounded-xl"
        resizeMode="cover"
        source={item.image}
        style={{height: '100%', width: horizontalScale(90)}}
      />
      <View className=" flex-1 space-y-2">
        <Text className="flex-1 text-sm font-bold">{item.name}</Text>
        <View className="flex-row items-center">
          <Text className="flex-1 text-xs">
            Autem voluptas at esse. Deleniti laborum consequuntur minima aliquam
            hic ut. Dicta reiciendis quae atque eum consectetur. Odit expedita
            officiis alias.
          </Text>
          <View>
            <IconButton
              style={{borderRadius: 8}}
              mode="default"
              icon="plus"
              iconColor="white"
              containerColor="brown"
              size={20}
              onPress={() => {}}
            />
          </View>
        </View>
        <Text className="flex-1 text-sm font-semibold">₹ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;
