import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonHeader from '../../common/components/CommonHeader';

const FavoriteScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <CommonHeader heading={''} />
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
