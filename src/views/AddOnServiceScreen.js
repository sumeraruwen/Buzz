import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, TextInput, StyleSheet,TouchableOpacity,Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import { colors, fontSizes, dimensions } from '../styles/constants';

export default function AddOnServiceScreen() {
  // State management for switches
  const [isBasePriceEnabled, setIsBasePriceEnabled] = useState(false);
  const [isRatePerHourEnabled, setIsRatePerHourEnabled] = useState(false);
  const [isRatePerDayEnabled, setIsRatePerDayEnabled] = useState(false);
  const [isEquipmentRentalEnabled, setIsEquipmentRentalEnabled] = useState(false);

  const [isBoxingUnboxingEnabled, setIsBoxingUnboxingEnabled] = useState(false);
  const [isAssemblingDisassemblingEnabled, setIsAssemblingDisassemblingEnabled] = useState(false);

  
  const [expandedSections, setExpandedSections] = useState({
    fourWheelDolly: false,
    applianceDolly: false,
    handTruckDolly: false,
    loadingRamp: false,
    materialLift: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // State for input values
  const [inputValues, setInputValues] = useState({
    loading: ['', '', '', ''],
    unloading: ['', '', '', '']
  });

   // Function to handle switch toggling for Boxing/Unboxing Help and Assembling/Disassembling sections
   const handleBoxingUnboxingSwitch = () => {
    setIsBoxingUnboxingEnabled(!isBoxingUnboxingEnabled);
  };

  const handleAssemblingDisassemblingSwitch = () => {
    setIsAssemblingDisassemblingEnabled(!isAssemblingDisassemblingEnabled);
  };

  const renderEquipmentRow = (label, sectionKey) => (
    <View key={sectionKey} style={styles.equipmentRow}>
      <View style={styles.rowHeader}>
        <Text style={styles.labelText}>{label}</Text>
        <View style={styles.rowActions}>
        <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() => setIsRatePerDayEnabled((prevState) => !prevState)}
            value={isRatePerDayEnabled}
          />
          <TouchableOpacity onPress={() => toggleSection(sectionKey)}>
            <Image
              source={
                expandedSections[sectionKey]
                  ? require('../assets/upArrow.webp') // Replace with your up arrow icon path
                  : require('../assets/downArrow.webp') // Replace with your down arrow icon path
              }
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {expandedSections[sectionKey] && (
        <View style={styles.expandedContent}>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Base Price</Text>
          <TextInput style={styles.textInput} keyboardType="numeric" placeholder="$"  editable={isBasePriceEnabled} />
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isBasePriceEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() => setIsBasePriceEnabled((prevState) => !prevState)}
            value={isBasePriceEnabled}
           
          />
        </View>
        <View style={styles.dottedLine} />
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Rate Per Hour</Text>
          <TextInput style={styles.textInput} keyboardType="numeric" placeholder="$" />
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerHourEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() => setIsRatePerHourEnabled((prevState) => !prevState)}
            value={isRatePerHourEnabled}
          />
        </View>
        <View style={styles.dottedLine} />
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Rate Per Day</Text>
          <TextInput style={styles.textInput} keyboardType="numeric" placeholder="$"  editable={isBasePriceEnabled} />
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() => setIsRatePerDayEnabled((prevState) => !prevState)}
            value={isRatePerDayEnabled}
          />
        </View>
      </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent title="Add-on Services" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.switchRow}>
          <Text style={styles.titleText}>
            Lifting/Loading/Unloading Help
          </Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() => setIsBasePriceEnabled(previousState => !previousState)}
            value={isBasePriceEnabled}
          />
        </View>

        <View style={styles.basePriceCard}>
          <View style={styles.switchRow}>
            <Text style={styles.labelText}>
              Base Price
            </Text>
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() => setIsBasePriceEnabled(previousState => !previousState)}
              value={isBasePriceEnabled}
            />
          </View>

          <Text style={styles.sectionTitle}>
            Loading
          </Text>

          {['Flat (no stairs or elevator)', 'Elevator', 'Stairs (Medium Weight)', 'Stairs (Heavy Weight)'].map((label, index) => (
            <React.Fragment key={index}>
              <View style={styles.inputRow}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                  style={[styles.textInput, styles.fixedWidthInput]}
                  keyboardType="numeric"
                  placeholder={label.includes('Stairs') ? '$/Per Flight' : '$'}
                />
              </View>
              <View style={styles.dottedLine} />
            </React.Fragment>
          ))}

          <Text style={[styles.sectionTitle, styles.sectionMarginTop]}>
            Unloading
          </Text>

          {['Flat (no stairs or elevator)', 'Elevator', 'Stairs (Medium Weight)', 'Stairs (Heavy Weight)'].map((label, index) => (
            <React.Fragment key={index}>
              <View style={styles.inputRow}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                  style={[styles.textInput, styles.fixedWidthInput]}
                  keyboardType="numeric"
                  placeholder={label.includes('Stairs') ? '$/Per Flight' : '$'}
                />
              </View>
              <View style={styles.dottedLine} />
            </React.Fragment>
          ))}

          <View style={styles.sectionMarginTop}>
            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>Rate Per Hour</Text>
              <TextInput
                style={styles.textInput2}
                keyboardType="numeric"
                placeholder="$"
                
              />
              <Switch
                trackColor={{ false: colors.secondary, true: colors.primary }}
                thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
                ios_backgroundColor={colors.secondary}
                onValueChange={() => setIsRatePerHourEnabled(previousState => !previousState)}
                value={isRatePerHourEnabled}
              />
            </View>
            <View style={styles.dottedLine} />
            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>Rate Per Day</Text>
              <TextInput
                style={styles.textInput2}
                keyboardType="numeric"
                placeholder="$"
              />
              <Switch
                trackColor={{ false: colors.secondary, true: colors.primary }}
                thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
                ios_backgroundColor={colors.secondary}
                onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
                value={isRatePerDayEnabled}
              />
            </View>
          </View>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.titleText}>
            Boxing/Unboxing Help
          </Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
             onValueChange={handleBoxingUnboxingSwitch}
          value={isBoxingUnboxingEnabled}           
          />
        </View>

        <View style={styles.boxCard}>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Base Price</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isBoxingUnboxingEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
           // onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
           // value={isRatePerDayEnabled}
                onValueChange={handleBoxingUnboxingSwitch}
                value={isBoxingUnboxingEnabled}
            />
          </View>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Rate Per Hour</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
             editable={isBoxingUnboxingEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
             // onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
            //  value={isRatePerDayEnabled}
              onValueChange={handleBoxingUnboxingSwitch}
              value={isBoxingUnboxingEnabled}
            />
          </View>
          <View style={styles.boxCardRow}>
            <Text style={styles.inputLabel}>Rate Per Day</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isBoxingUnboxingEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
           //   onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
           //   value={isRatePerDayEnabled}
                onValueChange={handleBoxingUnboxingSwitch}
                value={isBoxingUnboxingEnabled}
            />
          </View>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.titleText}>
          Assembling/Disassembling
          </Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
           // onValueChange={() => setIsBasePriceEnabled(previousState => !previousState)}
           // value={isBasePriceEnabled}
            onValueChange={handleAssemblingDisassemblingSwitch}
            value={isAssemblingDisassemblingEnabled}
          />
        </View>

        <View style={styles.boxCard}>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Base Price</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isAssemblingDisassemblingEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              //  onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
             // value={isRatePerDayEnabled}
              onValueChange={handleAssemblingDisassemblingSwitch}
              value={isAssemblingDisassemblingEnabled}
            />
          </View>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Rate Per Hour</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isAssemblingDisassemblingEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              // onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
              // value={isRatePerDayEnabled}
              onValueChange={handleAssemblingDisassemblingSwitch}
              value={isAssemblingDisassemblingEnabled}
            />
          </View>
          <View style={styles.boxCardRow}>
            <Text style={styles.inputLabel}>Rate Per Day</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
              editable={isAssemblingDisassemblingEnabled}
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              // onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
              // value={isRatePerDayEnabled}
              onValueChange={handleAssemblingDisassemblingSwitch}
              value={isAssemblingDisassemblingEnabled}
            />
          </View>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.titleText}>
          Installation/Dismantling
          </Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() => setIsBasePriceEnabled(previousState => !previousState)}
            value={isBasePriceEnabled}
          />
        </View>

        <View style={styles.boxCard}>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Base Price</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
              value={isRatePerDayEnabled}
            />
          </View>
          <View style={[styles.boxCardRow, styles.borderBottom]}>
            <Text style={styles.inputLabel}>Rate Per Hour</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
              value={isRatePerDayEnabled}
            />
          </View>
          <View style={styles.boxCardRow}>
            <Text style={styles.inputLabel}>Rate Per Day</Text>
            <TextInput
              style={styles.textInput2}
              keyboardType="numeric"
              placeholder="$"
            />
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={() => setIsRatePerDayEnabled(previousState => !previousState)}
              value={isRatePerDayEnabled}
            />
          </View>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.titleText}>
          Equipment Rental
          </Text>
          <Switch
            trackColor={{ false: colors.secondary, true: colors.primary }}
            thumbColor={isRatePerDayEnabled ? colors.white : colors.white}
            ios_backgroundColor={colors.secondary}
            onValueChange={() => setIsBasePriceEnabled(previousState => !previousState)}
            value={isBasePriceEnabled}
          />
        </View>
        <View style={styles.equipmentContainer}>
          {renderEquipmentRow('4-Wheel Dolly', 'fourWheelDolly')}
          {renderEquipmentRow('Appliance Dolly', 'applianceDolly')}
          {renderEquipmentRow('Hand Truck Dolly', 'handTruckDolly')}
          {renderEquipmentRow('Loading Ramp', 'loadingRamp')}
          {renderEquipmentRow('Material Lift', 'materialLift')}
        </View>

       
      </ScrollView>

      <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Text style={styles.bottomBarText}>Save</Text>
    </TouchableOpacity>
    <View style={styles.separator} />
    <TouchableOpacity style={styles.bottomBarItem}>
      <Text style={styles.bottomBarText}>Preview</Text>
    </TouchableOpacity>
    <View style={styles.separator} />
    <TouchableOpacity style={styles.bottomBarItem}>
      <Text style={styles.bottomBarText}>Post</Text>
    </TouchableOpacity>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContainer: {
    padding: dimensions.paddingLevel3,
  },
  basePriceCard: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    marginTop: '5%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: '5%',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },
  titleText: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.black,
  },
  labelText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.black,
    flex: 1,
  },
  sectionTitle: {
    fontSize: fontSizes.fontMediumPlus,
    color: colors.black,
    fontWeight: '700',
    marginTop: '7%',
    marginBottom: '5%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  inputLabel: {
    flex: 1,
    fontSize: fontSizes.fontMidMedium,
    color: colors.black,
  },
  textInput: {
    height: dimensions.heightLevel3,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 7,
    width: 80,
    marginRight: 10,
    paddingHorizontal: dimensions.paddingLevel2,
  },
  textInput2: {
    height: dimensions.heightLevel3,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 7,
    width: 80,
    paddingHorizontal: dimensions.paddingLevel2,
    marginRight: 10,
  },
  fixedWidthInput: {
    width: 120,
  },
  sectionMarginTop: {},
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: 'lightgray',
    borderStyle: 'dashed',
    marginVertical: 15,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 5,
    marginBottom: 5,
  },
  boxCard: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    marginTop: '5%',
    marginBottom:'5%'
    
  },
  boxCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    alignItems:'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },

  equipmentContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
   // paddingHorizontal: 15,
  //  paddingVertical: 10,
    marginTop: '5%',
    marginBottom:'5%'
  },
  equipmentRow: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: dimensions.paddingLevel3,
    paddingHorizontal: 15,
    
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
    color: 'black',
  },
  rowActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  expandedContent: {
    marginTop: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#fff8f7', // Make the border color transparent
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 }, // Shadow above the bar
    shadowOpacity: 0.2, // Adjust opacity for shadow visibility
    shadowRadius: 4, // Adjust the radius for shadow blur
    elevation: 4, // Add elevation for Android shadow effect
  },
  bottomBarText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.primary,
    textAlign: 'center',
    fontWeight:'500'
  },
  bottomBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: 1,
    backgroundColor: 'lightgray',
    height: '200%',
  },
});
