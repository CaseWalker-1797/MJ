import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonHeader from '../../common/components/CommonHeader';
import {SegmentedButtons} from 'react-native-paper';
import YourOrderCard from '../../common/components/YourOrderCard';

const YourOrderScreen = () => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <CommonHeader heading={'Your Orders'} />
      <View className="p-2">
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: 'recent',
              label: 'Recent Order',
            },
            {
              value: 'past',
              label: 'Past Orders',
            },
          ]}
        />
      </View>
      <ScrollView className="flex-1 p-4">
        <YourOrderCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourOrderScreen;

const styles = StyleSheet.create({});
