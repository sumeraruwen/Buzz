import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,Modal } from 'react-native';
import { colors, dimensions, fontSizes } from '../styles/constants';
//import CustomDrawerComponent from '../components/CustomDrawerComponent';
import { useNavigation } from '@react-navigation/native';

const MainHeaderComponent = ({title}) => {

  const navigation = useNavigation();

  const handleResolutionCenter = () => {
    navigation.navigate('ResolutionCenterScreen');
    
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: dimensions.paddingLevel3,
      // alignItems: 'center',
       // justifyContent: 'space-between',
      //  borderBottomWidth: 1,
        backgroundColor:colors.white,
       // borderBottomColor: '#ccc',
        height:dimensions.heightLevel6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 7,
      }}
    >
      
     
      
        <TouchableOpacity>
        <Image
          source={require('../assets/leftArrow.webp')} // Menu icon image
          style={{
            
           // position: 'absolute',
           // top: 5, // Adjust as needed
          //  left: 20, // Adjust as needed
            width: 18,
            height: 18,
          }}
        />
        </TouchableOpacity>
      
      <Text style={{ flex: 1, textAlign: 'center', fontWeight: '700',color:colors.black,fontSize:fontSizes.fontLarge }}>
       {title}
      </Text>

      <TouchableOpacity onPress={handleResolutionCenter}>
      <Image
        source={require('../assets/groupIcon.webp')}
        style={{
          width: 40,
          height: 33.5,
         // borderRadius: 25,
        }}
      />
      </TouchableOpacity>


    </View>
  );
};

export default MainHeaderComponent;
