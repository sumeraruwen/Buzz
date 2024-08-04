import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,TextInput, Image} from 'react-native';
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

  const sampleImage1 = require('../assets/sampleImage.webp');


  // Dummy order data
  const orders = [
    {
      number: '123456',
      date: '02/26/23',
      status: 'Success',
      statusColor: "#0A987F1A",
      textColor:colors.primary,
      userImage: sampleImage1,
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
      userImage: sampleImage1,
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
           {/* <View style={{ padding: dimensions.paddingLevel3 }}>
              <View style={styles.searchContainer}>
                <TextInput
                  placeholder="Search..."
                  style={{
                    borderWidth: 1,
                    borderRadius: 9,
                    padding:dimensions.paddingLevel2,
                    borderColor: '#ccc',
                    
                  }}
                />
                 <Image style={styles.searchIcon} source={require('../assets/searchIcon.webp')} />
              </View>
          </View> */}

          <View style={{ padding: dimensions.paddingLevel3 }}>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Search..."
                style={styles.searchInput}
              />
               <Image style={styles.searchIcon} source={require('../assets/searchIcon.webp')} />
            </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 9,
    paddingHorizontal: dimensions.paddingLevel2,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    padding: dimensions.paddingLevel2,
    fontSize: fontSizes.fontMedium,
  },
 
  searchIcon: {
    width: 15,
    height: 15,
  },
  
  
});


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Icon from 'react-native-vector-icons/Ionicons';
// import MainHeaderComponent from '../components/MainHeaderComponent';
// import { colors, dimensions, fontSizes } from '../styles/constants';
// import OrderCardComponent from '../components/OrderCardComponent ';

// export default function HistoryScreen() {
//   const [dateFrom, setDateFrom] = useState(new Date());
//   const [dateTo, setDateTo] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showMode, setShowMode] = useState('date'); // 'date' or 'month'

//   const showDatepicker = (currentDate, mode) => {
//     setShowDatePicker(true);
//     setShowMode(mode);
//     setSelectedDate(currentDate);
//   };

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || dateFrom;
//     setShowDatePicker(Platform.OS === 'ios');
//     if (showMode === 'date') {
//       setDateFrom(currentDate);
//       setDateTo(currentDate); // Adjust according to your needs
//     } else if (showMode === 'month') {
//       // Handle month change here if needed
//     }
//   };

//   const handleToday = () => {
//     const today = new Date();
//     setDateFrom(today);
//     setDateTo(today);
//     setShowDatePicker(false);
//   };

//   const handleSet = () => {
//     // Handle setting the date range if needed
//     setShowDatePicker(false);
//   };

//   const handleCancel = () => {
//     setShowDatePicker(false);
//   };

//   // Dummy order data
//   const orders = [
//     {
//       number: '123456',
//       date: '02/26/23',
//       status: 'Success',
//       statusColor: "#0A987F1A",
//       textColor: colors.primary,
//       userImage: 'https://via.placeholder.com/150',
//       username: 'Username',
//       type: 'On-demand',
//       category: 'Ride',
//       from: 'City, ST, Zipcode',
//       to: 'City, ST, Zipcode',
//       distance: '10 Miles',
//       time: '01:12 hr',
//       cost: 80,
//       extraCharge: 10,
//       totalCost: 90,
//     },
//     {
//       number: '123457',
//       date: '02/27/23',
//       status: 'Failed',
//       statusColor: '#FF00001A',
//       textColor: "#FF0000",
//       userImage: 'https://via.placeholder.com/150',
//       username: 'Username2',
//       type: 'On-demand',
//       category: 'Ride',
//       from: 'City, ST, Zipcode',
//       to: 'City, ST, Zipcode',
//       distance: '12 Miles',
//       time: '01:20 hr',
//       cost: 100,
//       extraCharge: 15,
//       totalCost: 115,
//     },
//   ];

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       <MainHeaderComponent title="History" />
//       <ScrollView>
//         <Text
//           style={{
//             fontSize: fontSizes.fontLarge,
//             fontWeight: '700',
//             padding: dimensions.paddingLevel3,
//             marginTop: '5%',
//             color: colors.black,
//           }}
//         >
//           Move History
//         </Text>

//         <View style={styles.dateContainer}>
//           <TouchableOpacity onPress={() => showDatepicker(dateFrom, 'date')} style={styles.dateInput}>
//             <Text style={{ color: "gray" }}>
//               From: {dateFrom.toLocaleDateString()}
//             </Text>
//           </TouchableOpacity>
//           <Text>____</Text>
//           <TouchableOpacity onPress={() => showDatepicker(dateTo, 'date')} style={styles.dateInput}>
//             <Text style={{ color: "gray" }}>
//               To: {dateTo.toLocaleDateString()}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {showDatePicker && (
//           <View style={styles.datePickerContainer}>
//             <DateTimePicker
//               value={selectedDate || dateFrom}
//               mode={showMode}
//               display="default"
//               onChange={onChange}
//             />
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity onPress={handleCancel} style={styles.button}>
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleToday} style={styles.button}>
//                 <Text style={styles.buttonText}>Today</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleSet} style={styles.button}>
//                 <Text style={styles.buttonText}>Set</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}

//         {/* Search Bar */}
//         <View style={{ padding: dimensions.paddingLevel3 }}>
//           <TextInput
//             placeholder="Search..."
//             style={{
//               borderWidth: 1,
//               borderRadius: 9,
//               padding: dimensions.paddingLevel2,
//               borderColor: '#ccc',
//             }}
//           />
//         </View>

//         {/* Order Cards */}
//         {orders.map(order => (
//           <OrderCardComponent key={order.number} order={order} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   dateContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: '5%',
//     alignItems: "center"
//   },
//   dateInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: dimensions.paddingLevel3,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   datePickerContainer: {
//     padding: dimensions.paddingLevel3,
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: dimensions.paddingLevel3,
//   },
//   button: {
//     backgroundColor: colors.primary,
//     padding: dimensions.paddingLevel2,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: colors.white,
//     fontSize: fontSizes.fontMedium,
//   },
// });
