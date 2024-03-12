import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconButton, Button} from 'react-native-paper';
import {verticalScale} from '../../common/utilities/Dimensions';
import CommonButton from '../../common/components/CommonButton';
import {useNavigation} from '@react-navigation/native';

const ProductScreen = () => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const {params} = useRoute();
  let item = params;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <IconButton
          style={{borderRadius: 12}}
          mode="contained"
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView className="flex-1 p-2">
        <View className="justify-center space-y-5 p-2">
          <Image
            resizeMode="contain"
            source={item.image}
            style={{height: verticalScale(400), width: '100%'}}
          />
          <Text className="text-2xl font-bold">{item.name}</Text>
          <Text className="text-sm">
            Autem voluptas at esse. Deleniti laborum consequuntur minima aliquam
            hic ut. Dicta reiciendis quae atque eum consectetur. Odit expedita
            officiis alias.
          </Text>
          <Text className="text-base font-semibold">₹ {item.price}</Text>
        </View>
      </ScrollView>
      <View className="flex-row justify-around items-center p-2">
        <IconButton
          icon={liked ? 'heart' : 'heart-outline'}
          size={24}
          onPress={() => setLiked(!liked)}
        />
        <CommonButton mode={'text'} label={'Add to Cart'} />

        <CommonButton mode={'contained-tonal'} label={'Buy Now'} />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
