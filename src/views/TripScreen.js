import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MainHeaderComponent from '../components/MainHeaderComponent';
import { colors, dimensions, fontSizes } from '../styles/constants';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function TripScreen() {
  const [category, setCategory] = useState('Delivery Service');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Delivery Service', value: 'Delivery Service' },
    { label: 'Courier Service', value: 'Courier Service' },
    { label: 'Transport Service', value: 'Transport Service' }
  ]);

  const tripOrders = [
    { id: 1, name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '(000)-000-0000', category: 'Local Delivery' },
    { id: 2, name: 'Valerie E.', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '(000)-000-0000', category: 'Local Delivery' },

  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainHeaderComponent title="New Trips" />
      
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>New Trip</Text>

        <TextInput style={styles.input} placeholder="Stop" placeholderTextColor="black" />

        <Text style={styles.label}>Name / Order #</Text>
        <TextInput style={styles.input} placeholder="Name / Order #" placeholderTextColor="gray" />

        <Text style={styles.label}>Customer Phone</Text>
        <TextInput style={styles.input} placeholder="(000)-000-0000" keyboardType="phone-pad" placeholderTextColor="gray" />

        <Text style={styles.label}>Category</Text>
        <DropDownPicker
          open={open}
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
          style={styles.picker}
          dropDownContainerStyle={styles.pickerDropDown}
          listItemContainerStyle={styles.listItemContainer}
          tickIconStyle={{ display: 'none' }} // Hide the tick icon
          textStyle={{ color: 'gray' }} // Set the text color to gray
          arrowIconStyle={{ tintColor: 'gray' }} // Set the arrow color to gray
        />

        <Text style={styles.label}>Pick-Up Address</Text>
        <TextInput style={styles.input} placeholder="Pick-Up Address" placeholderTextColor="gray" />

        <Text style={styles.label}>Pick-Up Instruction</Text>
        <TextInput style={styles.input} placeholder="Pick-Up Instruction" placeholderTextColor="gray" />

        <Text style={styles.label}>Drop-Off Address (1)</Text>
        <TextInput style={styles.input} placeholder="Drop-Off Address" placeholderTextColor="gray" />

        <Text style={styles.label}>Drop-Off Instruction (1)</Text>
        <TextInput style={styles.input} placeholder="Drop-Off Instruction" placeholderTextColor="gray" />

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text style={styles.label2}>Add more Drop-Offs</Text>
          <Image style={styles.dropOffIcon} source={require('../assets/addDropOff.webp')} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={{ color: colors.secondary, fontWeight: '600', fontSize: fontSizes.fontMidMedium }}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addStopButton}>
            <Text style={{ color: colors.white, fontWeight: '600', fontSize: fontSizes.fontMidMedium }}>Add Stop to Trip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dottedLine} />

        {tripOrders.map((order, index) => (
          <View key={index} style={styles.tripOrderContainer}>
            <View style={styles.timeline}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{order.id}</Text>
              </View>
              {index < tripOrders.length  && <View style={styles.verticalLine} />}
            </View>
            <View style={styles.orderDetails}>
              <Text style={styles.orderName}>{order.name}</Text>
              <Text style={styles.orderText}>Pick-Up Address</Text>
              <Text style={styles.orderDetail}>{order.pickUp}</Text>
              <Text style={styles.orderText}>Drop-Off Address</Text>
              <Text style={styles.orderDetail}>{order.dropOff}</Text>
            
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
              <Text style={styles.orderText}>Phone</Text>
              <Text style={styles.orderText}>Category</Text>
              </View>

              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
              <Text style={styles.orderDetail}>{order.phone}</Text>
              <Text style={styles.orderDetail}>{order.category}</Text>
              </View>
            
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.saveTripButton}>
          <Text style={styles.saveTripButtonText}>Save Trip</Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: dimensions.paddingLevel3,
  },
  title: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    marginTop: '5%',
    color: colors.black,
    marginBottom: '4%'
  },
  label: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: '700',
    marginTop: '5%',
    color: colors.black,
  },
  input: {
    height: dimensions.heightLevel4,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: dimensions.paddingLevel2,
    marginTop: '3%',
  },
  picker: {
    height: dimensions.heightLevel4,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: dimensions.paddingLevel1,
    marginTop: '2%',
  },
  pickerDropDown: {
    borderColor: "lightgray",
    borderWidth: 1,
  },
  listItemContainer: {
    justifyContent: 'center',
  },
  label2: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: '700',
    marginTop: '5%',
    color: "lightgray",
  },
  dropOffIcon: {
    width: 30,
    height: 30,
    marginTop: '4%',
    marginLeft: 5
  },
  clearButton: {
    backgroundColor: "#EEEEEE",
    color: colors.secondary,
    borderRadius: 11,
    width: dimensions.widthLevel15,
    padding: dimensions.paddingLevel2,
    alignItems: 'center',
    marginTop: dimensions.paddingLevel4,
  },
  addStopButton: {
    backgroundColor: colors.primary,
    color: colors.white,
    width: dimensions.widthLevel12,
    borderRadius: 11,
    padding: dimensions.paddingLevel2,
    alignItems: 'center',
    marginTop: dimensions.paddingLevel4,
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: '10%',
    marginTop: '10%'
  },
  tripOrderContainer: {
    flexDirection: 'row', // Ensure row layout for id and details
    marginBottom: dimensions.paddingLevel3,
  },
  timeline: {
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: colors.white,
    fontWeight: '700',
  },
  verticalLine: {
    flex: 1,
    width: 2,
   // height: '10%',
    backgroundColor: colors.primary,
   // marginVertical: 5,
  },
  orderDetails: {
    flex: 1,
   // borderWidth: 1,
  //  borderColor: 'lightgray',
    borderRadius: 8,
    padding: dimensions.paddingLevel3,
    marginLeft: dimensions.paddingLevel2,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  orderName: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.black,
  },
  orderText: {
    fontSize: fontSizes.fontMedium,
    fontWeight: '500',
    color: colors.secondary,
    marginTop: dimensions.paddingLevel3,
  },
  orderDetail: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: '500',
    color: colors.black,
    marginTop: dimensions.paddingLevel1,
  },
  saveTripButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: dimensions.paddingLevel2,
    alignItems: 'center',
    marginTop: dimensions.paddingLevel4,
  },
  saveTripButtonText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
  },
});
