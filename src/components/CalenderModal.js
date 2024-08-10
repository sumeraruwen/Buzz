import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../styles/constants";

const CalendarModal = ({ visible, onClose, onDateSelect }) => {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfWeek = (month, year) => {
    return new Date(year, month, 1).getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDayOfWeek = getFirstDayOfWeek(selectedMonth, selectedYear);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleToday = () => {
    setSelectedDay(today.getDate());
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
  };

  const handleSetDate = () => {
    onDateSelect(new Date(selectedYear, selectedMonth, selectedDay));
    onClose();
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.calendarContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>From Date</Text>
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
              {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
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
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
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
                onPress={() => setSelectedDay(day)}
              >
                <Text
                  style={[
                    styles.dayText,
                    day === selectedDay && styles.selectedDay,
                    day === today.getDate() &&
                      selectedMonth === today.getMonth() &&
                      selectedYear === today.getFullYear() &&
                      styles.currentDay,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton} onPress={onClose}>
              <Text style={styles.footerButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={handleToday}>
              <Text style={styles.footerButtonText}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={handleSetDate}>
              <Text style={styles.footerButtonText}>Set</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarContainer: {
    width: 300,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 16,
    color: colors.gray,
  },
  monthYearPicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  picker: {
    width: 140,
  },
  daysOfWeek: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  dayLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray,
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  dayContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
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
    color: colors.primary,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  footerButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  footerButtonText: {
    color: colors.white,
  },
});

export default CalendarModal;
