import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonHeader from '../../common/components/CommonHeader';
import {SegmentedButtons} from 'react-native-paper';
import FavoriteItemCard from '../../common/components/FavoriteItemCard ';
import {
  chocolateMenu,
  otherMenu,
  premixMenu,
} from '../../common/constants/Constants';

const FavoriteScreen = () => {
  const [value, setValue] = useState('');
  const [fav, setFav] = useState(chocolateMenu.slice(0, 4));

  // const renderData = favI => {
  //   <FavoriteItemCard item={favI} />;
  // };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CommonHeader heading={'My Favorites'} />
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'chocolate',
            label: 'Chocolates',
            onPress: () => setFav(chocolateMenu.slice(0, 4)),
          },
          {
            value: 'pemix',
            label: 'Premixes',
            onPress: () => setFav(premixMenu.slice(0, 4)),
          },
          {
            value: 'Other',
            label: 'Other',
            onPress: () => setFav(otherMenu.slice(0, 4)),
          },
        ]}
      />
      <ScrollView className="border">
        {fav.map(favItem => (
          <FavoriteItemCard key={favItem.id} item={favItem} />
        ))}
      </ScrollView>
      {/* <FlatList data={fav} numColumns={2} remderItem={renderData} /> */}
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
