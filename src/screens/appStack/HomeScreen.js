import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonHeader from '../../common/components/CommonHeader';
import PromoCard from '../../common/components/PromoCard';
import RecomendationCard from '../../common/components/RecomendationCard';
import {chocolateMenu} from '../../common/constants/Constants';

const HomeScreen = () => {
  const [recomendations, setRecomendations] = useState([]);
  useEffect(() => {
    setRecomendations(chocolateMenu.slice(0, 3));
  }, []);
  return (
    <SafeAreaView className="flex-1">
      {/* Header */}
      <CommonHeader heading={'Good day, Megha J Kamdar'} />
      <ScrollView className="border p-2">
        {/* Promo Card */}
        <PromoCard />
        {/* Recomendations Section */}
        <View className="p-2">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-bold">Recomendations</Text>
            <Text className="text-base font-medium">See All</Text>
          </View>
          <ScrollView
            className="overflow-visible"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {recomendations.map(item => (
              <RecomendationCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
