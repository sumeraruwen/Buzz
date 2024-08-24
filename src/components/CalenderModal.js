
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
//   Dimensions,
//   Image
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Calendar } from 'react-native-calendars';
// import { colors, dimensions, fontSizes } from '../styles/constants';

// const CalendarModal = ({
//   visible,
//   onClose,
//   onSelectDate,
//   selectedDate,
//   title,
//   mainColor,
// }) => {
//   const [currentDate, setCurrentDate] = useState(selectedDate);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [calendarKey, setCalendarKey] = useState(0); // Added for forcing a rerender

//   useEffect(() => {
//     if (selectedDate) {
//       const date = new Date(selectedDate);
//       setSelectedMonth(date.getMonth());
//       setSelectedYear(date.getFullYear());
//       setCurrentDate(selectedDate);
//     }
//   }, [selectedDate]);

//   const handleDayPress = (day) => {
//     setCurrentDate(day.dateString);
//   };

//   const handleTodayPress = () => {
//     const today = new Date().toISOString().split('T')[0];
//     setCurrentDate(today);
//     const todayDate = new Date();
//     setSelectedMonth(todayDate.getMonth());
//     setSelectedYear(todayDate.getFullYear());
//     setCalendarKey(calendarKey + 1); // Force rerender
//   };

//   const handleSetPress = () => {
//     onSelectDate(currentDate);
//     onClose();
//   };

//   const handleMonthChange = (month) => {
//     setSelectedMonth(month);
//     const newDate = new Date(selectedYear, month, 1).toISOString().split('T')[0];
//     setCurrentDate(newDate);
//     setCalendarKey(calendarKey + 1); // Force rerender
//   };

//   const handleYearChange = (year) => {
//     setSelectedYear(year);
//     const newDate = new Date(year, selectedMonth, 1).toISOString().split('T')[0];
//     setCurrentDate(newDate);
//     setCalendarKey(calendarKey + 1); // Force rerender
//   };

//   return (
//     <Modal
//       visible={visible}
//       transparent={true}
//       animationType="none"
//       onRequestClose={onClose}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.calendarContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>{title || 'Select Date'}</Text>
//             <TouchableOpacity onPress={onClose}>
//               {/* <Text style={styles.closeButton}>X</Text> */}
//               <Image style={styles.closeIcon} source={require('../assets/closeIcon.webp')} />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.line} />

//           <View style={styles.monthYearPicker}>
//           <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={selectedMonth}
//               style={styles.picker}
//               onValueChange={handleMonthChange}
//             >
//               {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
//                 <Picker.Item key={index} label={month} value={index} />
//               ))}
//             </Picker>
//             </View>
//             <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={selectedYear}
//               style={styles.picker}
//               onValueChange={handleYearChange}
//             >
//               {[2022, 2023, 2024, 2025, 2026, 2027].map((year) => (
//                 <Picker.Item key={year} label={year.toString()} value={year} />
//               ))}
//             </Picker>
//             </View>
//           </View>
//           <View style={styles.dottedLine} />
//           <Calendar
//             key={calendarKey}  // Added to force rerender on month/year change
//             current={currentDate}
//             onDayPress={handleDayPress}
//             markedDates={{
//               [currentDate]: { selected: true, selectedColor: mainColor || colors.primary },
//             }}
//             theme={{
//               calendarBackground: colors.white,
//               textSectionTitleColor: colors.black,
//               selectedDayBackgroundColor: mainColor || colors.primary,
//               selectedDayTextColor: colors.white,
//               todayTextColor: mainColor || colors.primary,
//               dayTextColor: colors.black,
//               textDisabledColor: colors.gray,
//               monthTextColor: colors.black,
//               arrowColor: mainColor || colors.primary,
//             }}
//             style={styles.calendar}
//           />
//            <View style={styles.dottedLine} />
//           <View style={styles.footer}>
//             <TouchableOpacity
//               style={[styles.button, styles.cancelButton]}
//               onPress={onClose}
//             >
//               <Text style={{ color: colors.secondary, fontWeight: '700', fontSize: fontSizes.fontMidMedium }}>Cancel</Text>
//             </TouchableOpacity>

//         <View style={{flexDirection:'row'}}>
//             <TouchableOpacity
//               style={[styles.button, styles.todayButton]}
//               onPress={handleTodayPress}
//             >
//               <Text style={[styles.buttonText, { color: mainColor || colors.primary }]}>Today</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.button, { backgroundColor: mainColor || colors.primary }]}
//               onPress={handleSetPress}
//             >
//               <Text style={styles.buttonText}>Set</Text>
//             </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   calendarContainer: {
//     width:dimensions.widthLevel3,
//     padding: 20,
//     backgroundColor: colors.white,
//     borderRadius: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: colors.black,
//   },
//   closeIcon: {
//     width: 13,
//     height: 13,
//   },
//   closeButton: {
//     fontSize: 16,
//     color: colors.gray,
//   },
//   monthYearPicker: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
   
//   },
//   pickerContainer: {
//     width: '48%',
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderRadius: 8,
//    marginTop:10
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   button: {
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   picker: {
//     // width: '48%',
//     paddingHorizontal:5,
//     color:colors.secondary
//   },
//   cancelButton: {
//     backgroundColor: 'lightgray',
//   },
//   todayButton: {
//     borderColor: colors.primary,
//     borderWidth: 1,
//     right:20
//   },
//   buttonText: {
//     fontSize: fontSizes.fontMidMedium,
//     fontWeight: 'bold',
//     color: colors.white,
//   },
//   calendar: {
//     //borderWidth: 1,
//     borderColor: 'lightgray',
//     borderRadius: 10,
//   },
//   line: {
//     height: 1,
//     backgroundColor: 'lightgray',
//     marginBottom:8
//    // flex: 1,
//   },
//   dottedLine: {
//     borderBottomWidth: 1.5,
//     borderColor: '#ccc',
//     borderStyle: 'dashed',
//     marginVertical: '1%',
//    // marginTop: '10%'
//   },
// });

// export default CalendarModal;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Calendar } from 'react-native-calendars';
// import { colors, dimensions, fontSizes } from '../styles/constants';

// const CalendarModal = ({
//   visible,
//   onClose,
//   onSelectDate,
//   selectedDate,
//   title,
//   mainColor,
// }) => {
//   const [currentDate, setCurrentDate] = useState(selectedDate);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [calendarKey, setCalendarKey] = useState(0); // Added for forcing a rerender

//   useEffect(() => {
//     if (selectedDate) {
//       const date = new Date(selectedDate);
//       setSelectedMonth(date.getMonth());
//       setSelectedYear(date.getFullYear());
//       setCurrentDate(selectedDate);
//     }
//   }, [selectedDate]);

//   const handleDayPress = (day) => {
//     setCurrentDate(day.dateString);
//   };

//   const handleTodayPress = () => {
//     const today = new Date().toISOString().split('T')[0];
//     setCurrentDate(today);
//     const todayDate = new Date();
//     setSelectedMonth(todayDate.getMonth());
//     setSelectedYear(todayDate.getFullYear());
//     setCalendarKey(calendarKey + 1); // Force rerender
//   };

//   const handleSetPress = () => {
//     onSelectDate(currentDate);
//     onClose();
//   };

//   const handleMonthChange = (month) => {
//     setSelectedMonth(month);
//     const newDate = new Date(selectedYear, month, 1).toISOString().split('T')[0];
//     setCurrentDate(newDate);
//     setCalendarKey(calendarKey + 1); // Force rerender
//   };

//   const handleYearChange = (year) => {
//     setSelectedYear(year);
//     const newDate = new Date(year, selectedMonth, 1).toISOString().split('T')[0];
//     setCurrentDate(newDate);
//     setCalendarKey(calendarKey + 1); // Force rerender
//   };

//   return (
//     <Modal
//       visible={visible}
//       transparent={true}
//       animationType="none"
//       onRequestClose={onClose}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.calendarContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>{title || 'Select Date'}</Text>
//             <TouchableOpacity onPress={onClose}>
//               <Text style={styles.closeButton}>X</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.line} />

//           <View style={styles.monthYearPicker}>
//             <View style={styles.pickerContainer}>
//               <Picker
//                 selectedValue={selectedMonth}
//                 style={styles.picker}
//                 onValueChange={handleMonthChange}
//               >
//                 {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
//                   <Picker.Item key={index} label={month} value={index} />
//                 ))}
//               </Picker>
//             </View>
//             <View style={styles.pickerContainer}>
//               <Picker
//                 selectedValue={selectedYear}
//                 style={styles.picker}
//                 onValueChange={handleYearChange}
//               >
//                 {[2022, 2023, 2024, 2025, 2026, 2027].map((year) => (
//                   <Picker.Item key={year} label={year.toString()} value={year} />
//                 ))}
//               </Picker>
//             </View>
//           </View>
//           <View style={styles.dottedLine} />
//           <Calendar
//             key={calendarKey}  // Added to force rerender on month/year change
//             current={currentDate}
//             onDayPress={handleDayPress}
//             markedDates={{
//               [currentDate]: { selected: true, selectedColor: mainColor || colors.primary },
//             }}
//             theme={{
//               calendarBackground: colors.white,
//               textSectionTitleColor: colors.black,
//               selectedDayBackgroundColor: mainColor || colors.primary,
//               selectedDayTextColor: colors.white,
//               todayTextColor: mainColor || colors.primary,
//               dayTextColor: colors.black,
//               textDisabledColor: colors.gray,
//               monthTextColor: colors.black,
//               arrowColor: mainColor || colors.primary,
//             }}
//             style={styles.calendar}
//           />
//            <View style={styles.dottedLine} />
//           <View style={styles.footer}>
//             <TouchableOpacity
//               style={[styles.button, styles.cancelButton]}
//               onPress={onClose}
//             >
//               <Text style={{ color: colors.secondary, fontWeight: '700', fontSize: fontSizes.fontMidMedium }}>Cancel</Text>
//             </TouchableOpacity>

//             <View style={{ flexDirection: 'row' }}>
//               <TouchableOpacity
//                 style={[styles.button, styles.todayButton]}
//                 onPress={handleTodayPress}
//               >
//                 <Text style={[styles.buttonText, { color: mainColor || colors.primary }]}>Today</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.button, { backgroundColor: mainColor || colors.primary }]}
//                 onPress={handleSetPress}
//               >
//                 <Text style={styles.buttonText}>Set</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   calendarContainer: {
//     width: dimensions.widthLevel3,
//     padding: 20,
//     backgroundColor: colors.white,
//     borderRadius: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: colors.black,
//   },
//   closeButton: {
//     fontSize: 16,
//     color: colors.gray,
//   },
//   monthYearPicker: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   pickerContainer: {
//     width: '48%',
//     borderWidth: 1,
//     borderColor: colors.primary,
//     borderRadius: 5,
//   },
//   picker: {
//     paddingHorizontal: 5, // Added padding for text inside the Picker
//     color: colors.black,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   button: {
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   cancelButton: {
//     backgroundColor: 'lightgray',
//   },
//   todayButton: {
//     borderColor: colors.primary,
//     borderWidth: 1,
//     marginRight: 20,
//   },
//   buttonText: {
//     fontSize: fontSizes.fontMidMedium,
//     fontWeight: 'bold',
//     color: colors.white,
//   },
//   calendar: {
//     borderColor: 'lightgray',
//     borderRadius: 10,
//   },
//   line: {
//     height: 1,
//     backgroundColor: 'lightgray',
//     marginBottom: 8,
//   },
//   dottedLine: {
//     borderBottomWidth: 1.5,
//     borderColor: '#ccc',
//     borderStyle: 'dashed',
//     marginVertical: '1%',
//   },
// });

// export default CalendarModal;


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import { colors, dimensions, fontSizes } from '../styles/constants';

const CalendarModal = ({
  visible,
  onClose,
  onSelectDate,
  selectedDate,
  title,
  mainColor,
}) => {
  const [currentDate, setCurrentDate] = useState(selectedDate);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [calendarKey, setCalendarKey] = useState(0); // Added for forcing a rerender

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      if (!isNaN(date.getTime())) { // Check if the date is valid
        setSelectedMonth(date.getMonth());
        setSelectedYear(date.getFullYear());
        setCurrentDate(selectedDate);
      } else {
        console.error('Invalid date:', selectedDate);
      }
    }
  }, [selectedDate]);

  // const handleDayPress = (day) => {
  //   const date = new Date(day.dateString);
  //   if (!isNaN(date.getTime())) {
  //     setCurrentDate(day.dateString);
  //   } else {
  //     console.error('Invalid date:', day.dateString);
  //   }
  // };

  // const handleTodayPress = () => {
  //   const today = new Date().toISOString().split('T')[0];
  //   setCurrentDate(today);
  //   const todayDate = new Date();
  //   setSelectedMonth(todayDate.getMonth());
  //   setSelectedYear(todayDate.getFullYear());
  //   setCalendarKey(calendarKey + 1); // Force rerender
  // };

  const handleDayPress = (day) => {
    const date = new Date(day.dateString);
    if (!isNaN(date.getTime())) {
      // Set the time to noon (12:00 PM) to avoid timezone issues
      date.setHours(12, 0, 0, 0);
      setCurrentDate(date.toISOString().split('T')[0]);
    } else {
      console.error('Invalid date:', day.dateString);
    }
  };

  const handleTodayPress = () => {
    const today = new Date();
    // Set the time to noon (12:00 PM) to avoid timezone issues
    today.setHours(12, 0, 0, 0);
    setCurrentDate(today.toISOString().split('T')[0]);
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
    setCalendarKey(calendarKey + 1); // Force rerender
  };
  

  // const handleSetPress = () => {
  //   onSelectDate(currentDate);
  //   onClose();
  // };

  const handleSetPress = () => {
    const dateObject = new Date(currentDate);
    if (!isNaN(dateObject)) {
      onSelectDate(dateObject);
      onClose();
    } else {
      console.error('Invalid date:', currentDate);
    }
  };
  

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    const newDate = new Date(selectedYear, month, 1).toISOString().split('T')[0];
    setCurrentDate(newDate);
    setCalendarKey(calendarKey + 1); // Force rerender
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    const newDate = new Date(year, selectedMonth, 1).toISOString().split('T')[0];
    setCurrentDate(newDate);
    setCalendarKey(calendarKey + 1); // Force rerender
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      {/* <View style={styles.modalContainer}>
        <View style={styles.calendarContainer}> */}
         <TouchableOpacity 
          style={styles.modalContainer} 
          activeOpacity={1} 
          onPressOut={() => onClose(false)}
        >
        <TouchableOpacity 
            style={styles.calendarContainer} 
            activeOpacity={1} 
            onPress={(e) => e.stopPropagation()}>
          <View style={styles.header}>
            <Text style={styles.title}>{title || 'Select Date'}</Text>
            <TouchableOpacity onPress={onClose}>
              <Image style={styles.closeIcon} source={require('../assets/closeIcon.webp')} />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />

          <View style={styles.monthYearPicker}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedMonth}
                style={styles.picker}
                onValueChange={handleMonthChange}
              >
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                  <Picker.Item key={index} label={month} value={index} />
                ))}
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedYear}
                style={styles.picker}
                onValueChange={handleYearChange}
              >
                {[2022, 2023, 2024, 2025, 2026, 2027].map((year) => (
                  <Picker.Item key={year} label={year.toString()} value={year} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.dottedLine} />
          <Calendar
            key={calendarKey}  // Added to force rerender on month/year change
            current={currentDate}
            onDayPress={handleDayPress}
            markedDates={{
              [currentDate]: { selected: true, selectedColor: mainColor || colors.primary },
            }}
            theme={{
              calendarBackground: colors.white,
              textSectionTitleColor: colors.black,
              selectedDayBackgroundColor: mainColor || colors.primary,
              selectedDayTextColor: colors.white,
              todayTextColor: mainColor || colors.primary,
              dayTextColor: colors.black,
              textDisabledColor: colors.gray,
              monthTextColor: colors.black,
              arrowColor: mainColor || colors.primary,
            }}
            style={styles.calendar}
          />
          <View style={styles.dottedLine} />
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={{ color: colors.secondary, fontWeight: '700', fontSize: fontSizes.fontMidMedium }}>Cancel</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={[styles.button, styles.todayButton]}
                onPress={handleTodayPress}
              >
                <Text style={[styles.buttonText, { color: mainColor || colors.primary }]}>Today</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: mainColor || colors.primary }]}
                onPress={handleSetPress}
              >
                <Text style={styles.buttonText}>Set</Text>
              </TouchableOpacity>
            </View>
          </View>
        {/* </View>
      </View> */}
      </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    width: dimensions.widthLevel3,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
  monthYearPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pickerContainer: {
    width: '48%',
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  picker: {
    paddingHorizontal: 5,
    color: colors.secondary,
  },
  cancelButton: {
    backgroundColor: 'lightgray',
  },
  todayButton: {
    borderColor: colors.primary,
    borderWidth: 1,
    right: 20,
  },
  buttonText: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: 'bold',
    color: colors.white,
  },
  calendar: {
    borderColor: 'lightgray',
    borderRadius: 10,
  },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
    marginBottom: 8,
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: '1%',
  },
});

export default CalendarModal;
