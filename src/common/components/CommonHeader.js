import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';

const CommonHeader = ({heading}) => {
  return (
    <View className="border flex-row justify-between items-center p-2">
      <Text className="text-xl font-bold">{ heading}</Text>
      {/* Options */}
      <View className="flex-row justify-between items-center">
        <IconButton icon="bell" size={24} />
        <IconButton icon="menu" size={24} />
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({});
