// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';
// import CalendarModal from './CalendarModal';

// const ParentComponent = () => {
//   const [fromDate, setFromDate] = useState('');  // Initialize with an empty string
//   const [toDate, setToDate] = useState('');      // Initialize with an empty string
//   const [isCalendarVisible, setCalendarVisible] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);

//   const openCalendar = (inputType) => {
//     setActiveInput(inputType);
//     setCalendarVisible(true);
//   };

//   const handleSelectDate = (selectedDate) => {
//     if (selectedDate) {
//       if (activeInput === 'from') {
//         setFromDate(formatDate(selectedDate));
//       } else if (activeInput === 'to') {
//         setToDate(formatDate(selectedDate));
//       }
//     }
//     setCalendarVisible(false);  // Close the calendar modal
//   };

//   // Format the date as a locale string
//   const formatDate = (dateString) => {
//     if (!dateString) return '';  // Return empty string if dateString is undefined
//     const date = new Date(dateString);
//     if (!isNaN(date.getTime())) {  // Ensure the date is valid
//       return date.toLocaleDateString();
//     }
//     return '';
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="From Date"
//         value={fromDate}
//         onFocus={() => openCalendar('from')}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="To Date"
//         value={toDate}
//         onFocus={() => openCalendar('to')}
//       />

//       <CalendarModal
//         visible={isCalendarVisible}
//         onClose={() => setCalendarVisible(false)}
//         onSelectDate={handleSelectDate}
//         selectedDate={activeInput === 'from' ? fromDate : toDate}
//         title={activeInput === 'from' ? 'Select From Date' : 'Select To Date'}
//         mainColor="blue"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
// });

// export default ParentComponent;
