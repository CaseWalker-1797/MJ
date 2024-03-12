import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';

const CommonButton = ({mode, label, icon, onPress}) => {
  const [work, setWork] = useState(null);
  return (
    <Button
      mode={mode}
      icon={icon}
      labelStyle={{fontSize: 16, fontWeight: 'bold'}}
      onPress={onPress}
    >
      {label}
    </Button>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
