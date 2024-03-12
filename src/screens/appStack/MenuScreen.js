import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonHeader from '../../common/components/CommonHeader';
import {Searchbar, SegmentedButtons, Card} from 'react-native-paper';
import MenuCard from '../../common/components/MenuCard';
import {
  chocolateMenu,
  otherMenu,
  premixMenu,
} from '../../common/constants/Constants';

const MenuScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [value, setValue] = useState('');
  const [menu, setMenu] = useState(chocolateMenu);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CommonHeader heading={'What would like to have today?'} />
      <View className="space-y-4">
        <View className=" p-2 space-y-4">
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'chocolate',
                label: 'Chocolates',
                onPress: () => setMenu(chocolateMenu),
              },
              {
                value: 'pemix',
                label: 'Premixes',
                onPress: () => setMenu(premixMenu),
              },
              {
                value: 'Other',
                label: 'Other',
                onPress: () => setMenu(otherMenu),
              },
            ]}
          />
        </View>
        <Card className="p-4" mode="contained">
          <ScrollView showsVerticalScrollIndicator={false}>
            {menu.map(menuItem => (
              <MenuCard key={menuItem.id} item={menuItem} />
            ))}
          </ScrollView>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
