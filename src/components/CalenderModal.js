// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { colors } from "../styles/constants";

// const CalendarModal = ({ visible, onClose, onDateSelect }) => {
//   const today = new Date();
//   const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
//   const [selectedYear, setSelectedYear] = useState(today.getFullYear());
//   const [selectedDay, setSelectedDay] = useState(today.getDate());

//   const getDaysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfWeek = (month, year) => {
//     return new Date(year, month, 1).getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
//   };

//   const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
//   const firstDayOfWeek = getFirstDayOfWeek(selectedMonth, selectedYear);

//   const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//   const handleToday = () => {
//     setSelectedDay(today.getDate());
//     setSelectedMonth(today.getMonth());
//     setSelectedYear(today.getFullYear());
//   };

//   const handleSetDate = () => {
//     onDateSelect(new Date(selectedYear, selectedMonth, selectedDay));
//     onClose();
//   };

//   return (
//     <Modal transparent={true} visible={visible} animationType="slide">
//       <View style={styles.modalContainer}>
//         <View style={styles.calendarContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>From Date</Text>
//             <TouchableOpacity onPress={onClose}>
//               <Text style={styles.closeButton}>X</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.monthYearPicker}>
//             <Picker
//               selectedValue={selectedMonth}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedMonth(itemValue)}
//             >
//               {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
//                 <Picker.Item key={index} label={month} value={index} />
//               ))}
//             </Picker>
//             <Picker
//               selectedValue={selectedYear}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedYear(itemValue)}
//             >
//               {[2022, 2023, 2024].map((year) => (
//                 <Picker.Item key={year} label={year.toString()} value={year} />
//               ))}
//             </Picker>
//           </View>

//           <View style={styles.daysOfWeek}>
//             {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
//               <Text key={index} style={styles.dayLabel}>
//                 {day}
//               </Text>
//             ))}
//           </View>

//           <ScrollView contentContainerStyle={styles.calendarGrid}>
//             {Array.from({ length: firstDayOfWeek }).map((_, index) => (
//               <View key={`empty-${index}`} style={styles.dayContainer} />
//             ))}
//             {days.map((day, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.dayContainer}
//                 onPress={() => setSelectedDay(day)}
//               >
//                 <Text
//                   style={[
//                     styles.dayText,
//                     day === selectedDay && styles.selectedDay,
//                     day === today.getDate() &&
//                       selectedMonth === today.getMonth() &&
//                       selectedYear === today.getFullYear() &&
//                       styles.currentDay,
//                   ]}
//                 >
//                   {day}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>

//           <View style={styles.footer}>
//             <TouchableOpacity style={styles.footerButton} onPress={onClose}>
//               <Text style={styles.footerButtonText}>Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.footerButton} onPress={handleToday}>
//               <Text style={styles.footerButtonText}>Today</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.footerButton} onPress={handleSetDate}>
//               <Text style={styles.footerButtonText}>Set</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   calendarContainer: {
//     width: 300,
//     padding: 20,
//     backgroundColor: colors.white,
//     borderRadius: 10,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   closeButton: {
//     fontSize: 16,
//     color: colors.gray,
//   },
//   monthYearPicker: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   picker: {
//     width: 140,
//   },
//   daysOfWeek: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 10,
//   },
//   dayLabel: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: colors.gray,
//   },
//   calendarGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
//   dayContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   dayText: {
//     fontSize: 16,
//     color: colors.black,
//   },
//   selectedDay: {
//     backgroundColor: colors.primary,
//     color: colors.white,
//     borderRadius: 20,
//   },
//   currentDay: {
//     color: colors.primary,
//     fontWeight: "bold",
//   },
//   footer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   footerButton: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//     backgroundColor: colors.primary,
//   },
//   footerButtonText: {
//     color: colors.white,
//   },
// });

// export default CalendarModal;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   Image,
// } from "react-native";
// import { Picker } from '@react-native-picker/picker';

// import { Calendar, LocaleConfig } from "react-native-calendars";
// import { colors, dimensions, fontSizes } from '../styles/constants';


// // Configure custom day names
// LocaleConfig.locales["en"] = {
//   monthNames: [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December",
//   ],
//   monthNamesShort: [
//     "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec.",
//   ],
//   dayNames: [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
//   ],
//   dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"], // Single-letter day names
// };
// LocaleConfig.defaultLocale = "en";

// const CustomCalendar = ({
//   modalVisible,
//   setModalVisible,
//   setDate,
//   title,
//   date,
//   mainColor,
// }) => {
//   const [selectedDay, setSelectedDay] = useState(new Date().getDate());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [currentMonth, setCurrentMonth] = useState("");

//   useEffect(() => {
//     const today = new Date();
//     setCurrentMonth(today.toISOString().split("T")[0].slice(0, 7));
//   }, [modalVisible]);

//   const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
//   const getFirstDayOfWeek = (month, year) => new Date(year, month, 1).getDay();

//   const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
//   const firstDayOfWeek = getFirstDayOfWeek(selectedMonth, selectedYear);
//   const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//   const handleDayPress = (day) => {
//     setDate(day.dateString);
//     setModalVisible(false);
//   };

//   const handleToday = () => {
//     const today = new Date();
//     setSelectedDay(today.getDate());
//     setSelectedMonth(today.getMonth());
//     setSelectedYear(today.getFullYear());
//   };

//   const handleSetDate = () => {
//     setDate(`${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`);
//     setModalVisible(false);
//   };

//   const renderArrow = (direction) => (
//     <Image
//       source={direction === "left" ? icon.backIcon : icon.formardIcon}
//       style={styles.arrow}
//       resizeMode="contain"
//     />
//   );

//   return (
//     <Modal
//       visible={modalVisible}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setModalVisible(false)}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.calendarContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>{title || "Select Date"}</Text>
//             <TouchableOpacity onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeButton}>X</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.monthYearPicker}>
//             <Picker
//               selectedValue={selectedMonth}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedMonth(itemValue)}
//             >
//               {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
//                 <Picker.Item key={index} label={month} value={index} />
//               ))}
//             </Picker>
//             <Picker
//               selectedValue={selectedYear}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedYear(itemValue)}
//             >
//               {[2022, 2023, 2024].map((year) => (
//                 <Picker.Item key={year} label={year.toString()} value={year} />
//               ))}
//             </Picker>
//           </View>

//           <View style={styles.daysOfWeek}>
//             {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
//               <Text key={index} style={styles.dayLabel}>
//                 {day}
//               </Text>
//             ))}
//           </View>

//           <ScrollView contentContainerStyle={styles.calendarGrid}>
//             {Array.from({ length: firstDayOfWeek }).map((_, index) => (
//               <View key={`empty-${index}`} style={styles.dayContainer} />
//             ))}
//             {days.map((day, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.dayContainer}
//                 onPress={() => {
//                   setSelectedDay(day);
//                   handleDayPress({ dateString: `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` });
//                 }}
//               >
//                 <Text
//                   style={[
//                     styles.dayText,
//                     day === selectedDay && styles.selectedDay,
//                     day === new Date().getDate() &&
//                       selectedMonth === new Date().getMonth() &&
//                       selectedYear === new Date().getFullYear() &&
//                       styles.currentDay,
//                   ]}
//                 >
//                   {day}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>

//           <View style={styles.footer}>
//             <TouchableOpacity
//               style={[styles.button, styles.cancelButton]}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.buttonText}>Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.button, { backgroundColor: mainColor || colors.primary }]}
//               onPress={handleSetDate}
//             >
//               <Text style={styles.buttonText}>Set</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.button, styles.todayButton]}
//               onPress={handleToday}
//             >
//               <Text style={[styles.buttonText, { color: mainColor || colors.primary }]}>Today</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default CustomCalendar;

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   calendarContainer: {
//     width: Dimensions.get("window").width * 0.9,
//     padding: 20,
//     backgroundColor: colors.white,
//     borderRadius: 10,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: colors.black,
//   },
//   closeButton: {
//     fontSize: 16,
//     color: colors.gray,
//   },
//   monthYearPicker: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   picker: {
//     width: 140,
//   },
//   daysOfWeek: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 10,
//   },
//   dayLabel: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: colors.gray,
//   },
//   calendarGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
//   dayContainer: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   dayText: {
//     fontSize: 16,
//     color: colors.black,
//   },
//   selectedDay: {
//     backgroundColor: colors.primary,
//     color: colors.white,
//     borderRadius: 20,
//   },
//   currentDay: {
//     backgroundColor: colors.lightGray,
//     borderRadius: 20,
//   },
//   footer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   button: {
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   cancelButton: {
//     backgroundColor: colors.grayLight,
//     borderColor: colors.gray,
//     borderWidth: 1,
//   },
//   todayButton: {
//     borderColor: colors.primary,
//     borderWidth: 1,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   arrow: {
//     width: 16,
//     height: 16,
//   },
// });

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { colors, dimensions, fontSizes } from '../styles/constants';

// Configure custom day names
LocaleConfig.locales['en'] = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ],
  monthNamesShort: [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.',
  ],
  dayNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'], // Single-letter day names
};
LocaleConfig.defaultLocale = 'en';

const CalendarModal = ({
  visible,
  onClose,
  onSelectDate,
  selectedDate,
  title,
  mainColor,
}) => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      setSelectedDay(date.getDate());
      setSelectedMonth(date.getMonth());
      setSelectedYear(date.getFullYear());
    }
  }, [selectedDate]);

  useEffect(() => {
    const today = new Date();
    setCurrentMonth(today.toISOString().split('T')[0].slice(0, 7));
  }, [visible]);

  const handleDayPress = (day) => {
    const selectedDate = new Date(day.dateString);
    setSelectedDay(selectedDate.getDate());
    setSelectedMonth(selectedDate.getMonth());
    setSelectedYear(selectedDate.getFullYear());
    onSelectDate(day.dateString);
    onClose();
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedDay(today.getDate());
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
  };

  const handleSetDate = () => {
    onSelectDate(`${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`);
    onClose();
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.calendarContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{title || 'Select Date'}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.monthYearPicker}>
            <Picker
              selectedValue={selectedMonth}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedMonth(itemValue)}
            >
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                <Picker.Item key={index} label={month} value={index} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedYear}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedYear(itemValue)}
            >
              {[2022, 2023, 2024].map((year) => (
                <Picker.Item key={year} label={year.toString()} value={year} />
              ))}
            </Picker>
          </View>

          <View style={styles.daysOfWeek}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <Text key={index} style={styles.dayLabel}>
                {day}
              </Text>
            ))}
          </View>

          <ScrollView contentContainerStyle={styles.calendarGrid}>
            {Array.from({ length: firstDayOfWeek }).map((_, index) => (
              <View key={`empty-${index}`} style={styles.dayContainer} />
            ))}
            {days.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dayContainer}
                onPress={() => handleDayPress({ dateString: `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` })}
              >
                <Text
                  style={[
                    styles.dayText,
                    day === selectedDay && styles.selectedDay,
                    day === new Date().getDate() &&
                      selectedMonth === new Date().getMonth() &&
                      selectedYear === new Date().getFullYear() &&
                      styles.currentDay,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: mainColor || colors.primary }]}
              onPress={handleSetDate}
            >
              <Text style={styles.buttonText}>Set</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.todayButton]}
              onPress={handleToday}
            >
              <Text style={[styles.buttonText, { color: mainColor || colors.primary }]}>Today</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    width: Dimensions.get('window').width * 0.9,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  closeButton: {
    fontSize: 16,
    color: colors.gray,
  },
  monthYearPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  picker: {
    width: 140,
  },
  daysOfWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  dayContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 16,
    color: colors.black,
  },
  selectedDay: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 20,
  },
  currentDay: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: colors.grayLight,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  todayButton: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    width: 16,
    height: 16,
  },
});

export default CalendarModal;
