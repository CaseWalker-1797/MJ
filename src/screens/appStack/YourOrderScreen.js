import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonHeader from '../../common/components/CommonHeader';

const YourOrderScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <CommonHeader />
    </SafeAreaView>
  );
};

export default YourOrderScreen;

const styles = StyleSheet.create({});
