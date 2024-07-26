import React from 'react';
import { View, Text } from 'react-native';
import MainHeaderComponent from '../components/MainHeaderComponent';
import { colors} from '../styles/constants';


export default function SavedTripeScreen() {
  return (
    <View style={{ flex: 1 , backgroundColor:colors.white }}>
      <MainHeaderComponent title="Saved Trip(s)" />
      {/* <Text>SavedTripeScreen</Text> */}
    </View>
  );
}
