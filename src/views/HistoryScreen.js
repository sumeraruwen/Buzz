import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import MainHeaderComponent from '../components/MainHeaderComponent';
import { colors, dimensions, fontSizes } from '../styles/constants';
import OrderCardComponent from '../components/OrderCardComponent ';


export default function HistoryScreen() {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [showDateFrom, setShowDateFrom] = useState(false);
  const [showDateTo, setShowDateTo] = useState(false);

  const onChangeFromDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateFrom;
    setShowDateFrom(Platform.OS === 'ios');
    setDateFrom(currentDate);
  };

  const onChangeToDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateTo;
    setShowDateTo(Platform.OS === 'ios');
    setDateTo(currentDate);
  };

  // Dummy order data
  const orders = [
    {
      number: '123456',
      date: '02/26/23',
      status: 'Success',
      statusColor: "#0A987F1A",
      textColor:colors.primary,
      userImage: 'https://via.placeholder.com/150',
      username: 'Username',
      type: 'On-demand',
      category: 'Ride',
      from: 'City, ST, Zipcode',
      to: 'City, ST, Zipcode',
      distance: '10 Miles',
      time: '01:12 hr',
      cost: 80,
      extraCharge: 10,
      totalCost: 90,
    },
    {
      number: '123457',
      date: '02/27/23',
      status: 'Failed',
      statusColor: '#FF00001A',
      textColor:"#FF0000",
      userImage: 'https://via.placeholder.com/150',
      username: 'Username2',
      type: 'On-demand',
      category: 'Ride',
      from: 'City, ST, Zipcode',
      to: 'City, ST, Zipcode',
      distance: '12 Miles',
      time: '01:20 hr',
      cost: 100,
      extraCharge: 15,
      totalCost: 115,
    },
  ];


  return (
    <View style={{ flex: 1 , backgroundColor:colors.white }}>
      <MainHeaderComponent title="History" />
      <ScrollView> 
        <Text
          style={{
            fontSize: fontSizes.fontLarge,
            fontWeight: '700',
           // marginLeft: '6%',
           padding:dimensions.paddingLevel3,
            marginTop: '5%',
            color: colors.black,
          }}
        >
          Move History
        </Text>

        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => setShowDateFrom(true)} style={styles.dateInput}>
            <Text style={{ color: "gray"}}>
              From: {dateFrom.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          <Text>____</Text>
          <TouchableOpacity onPress={() => setShowDateTo(true)} style={styles.dateInput}>
            <Text style={{ color:"gray" }}>
              To: {dateTo.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
        </View>

        {showDateFrom && (
          <DateTimePicker
            value={dateFrom}
            mode="date"
            display="default"
            onChange={onChangeFromDate}
          />
        )}
        {showDateTo && (
          <DateTimePicker
            value={dateTo}
            mode="date"
            display="default"
            onChange={onChangeToDate}
          />
        )}


            {/* Search Bar */}
           <View style={{ padding: dimensions.paddingLevel3 }}>
                <TextInput
                  placeholder="Search..."
                  style={{
                    borderWidth: 1,
                    borderRadius: 9,
                    padding:dimensions.paddingLevel2,
                    borderColor: '#ccc',
                    
                  }}
                />
          </View>

           {/* Order Cards */}
        {orders.map(order => (
          <OrderCardComponent key={order.number} order={order} />
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
   // marginTop: '6%',
    alignItems:"center"
  },
  dateInput: {
   
   // marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: dimensions.paddingLevel3,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
});


