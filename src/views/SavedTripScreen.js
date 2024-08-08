import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import MainHeaderComponent from '../components/MainHeaderComponent';
import { colors, fontSizes, dimensions } from '../styles/constants';

export default function SavedTripScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedOption, setSelectedOption] = useState({
    'Group By': 'Default',
    'View as': 'Trip',
    'Sort By': 'Default',
    'Filter by': 'Today',
  });
  const [orderStatus, setOrderStatus] = useState('Upcoming');
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null);

  const [tripDetails, setTripDetails] = useState({
    '24/04/2024': [
      { id: 1, date: '02/26/24', upcoming: 5, uncompleted: 10, completed: 14, percentCompleted: '62%' },
      { id: 2, date: '02/26/24', upcoming: 3, uncompleted: 7, completed: 20, percentCompleted: '74%' },
    ],
    '25/04/2024': [
      { id: 3, date: '02/26/24', upcoming: 3, uncompleted: 7, completed: 20, percentCompleted: '74%' },
      { id: 4, date: '02/26/24', upcoming: 4, uncompleted: 5, completed: 15, percentCompleted: '75%' },
    ],
  });

  const [deliveredOrders, setDeliveredOrders] = useState({
    Upcoming: [
      { id: 1,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '13.45', category: 'Local Delivery',button1:'Start',button2:'Pending'},
      { id: 2,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '13.45', category: 'Local Delivery',button1:'Start',button2:'Pending'},
    ],
    Active: [
      { id: 3,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '10.45', category: 'Local Delivery',button1:'Continue',button2:'En-Route'},
      { id: 4,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '13.45', category: 'Local Delivery',button1:'Continue',button2:'En-Route'},
    ],
    Completed: [
      { id: 5,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '10.45', category: 'Local Delivery' ,button1:'Start',button2:'Success'},
      { id: 6,date: '02/26/24', name: 'Order #7162533', pickUp: 'Down town, new york', dropOff: 'Down town, new york', phone: '13.45', category: 'Local Delivery',button1:'Start',button2:'Failed'},
    ],
  });

  const options = {
    'Group By': ['Date(Default)', 'Move Category'],
    'View as': ['Trip', 'Delivered Order'],
    'Sort By': ['Default', 'Completed'],
    'Filter by': ['Today', 'Last 1 Week', 'Last 1 Month', 'Last 1 Year', 'All'],
  };

  const openModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType('');
  };

  const selectOption = (option) => {
    setSelectedOption((prev) => ({
      ...prev,
      [modalType]: option,
    }));
    closeModal();
  };

    const openSettingsModal = (tripId) => {
    setSelectedTripId(tripId);
    setSettingsModalVisible(true);
  };

  const closeSettingsModal = () => {
    setSettingsModalVisible(false);
    setSelectedTripId(null);
  };

  

    const handleSettingsOption = (option) => {
    switch (option) {
      case 'Open':
        // Handle opening the trip or order details
        break;
      case 'Edit':
        // Handle editing the trip or order details
        break;
      case 'Rename':
        // Handle renaming the trip or order
        break;
      case 'Delete':
        // Handle deleting the trip or order
        break;
      default:
        break;
    }
    closeSettingsModal();
  };


  const renderTripDetails = () => {
    return (
      <View>
        {Object.keys(tripDetails).map((date) => (
          <View key={date}>
            <View style={{flexDirection:'row',paddingTop:20,paddingBottom:5,paddingLeft:20}}>
            <Text style={styles.dateHeader}>Date: </Text>
            <Text style={styles.dateHeader2}>{date}</Text>
            </View>
            <View style={styles.horizontalLine} />
            {tripDetails[date].map((trip, index) => (
              <View key={trip.id}>
                <View style={styles.tripCard}>
                  <View style={styles.tripColumn}>
                    <Text style={styles.tripStatLabel}>Trip {trip.id}</Text>
                    <Text style={styles.tripStatLabel}>{trip.date}</Text>
                  </View>
                  <View style={styles.lineVertical} />
                  <View style={styles.tripColumn}>
                    <Text style={styles.tripStatValue}>{trip.upcoming}</Text>
                    <Text style={styles.tripStatLabel}>Upcoming</Text>
                  </View>
                  <View style={styles.lineVertical} />
                  <View style={styles.tripColumn}>
                    <Text style={styles.tripStatValue}>{trip.uncompleted}</Text>
                    <Text style={styles.tripStatLabel}>Uncomplete</Text>
                  </View>
                  <View style={styles.lineVertical} />
                  <View style={styles.tripColumn}>
                    <Text style={styles.tripStatValue}>{trip.completed}</Text>
                    <Text style={styles.tripStatLabel}>Completed</Text>
                  </View>
                  <View style={styles.lineVertical} />
                  <View style={styles.tripColumn}>
                    <Text style={styles.tripStatValue}>{trip.percentCompleted}</Text>
                    <Text style={styles.tripStatLabel}>% Completed</Text>
                  </View>
                 
                  <TouchableOpacity onPress={() => openSettingsModal(trip.id)}>
                  <Image style={styles.icon2} source={require('../assets/settingsIcon.webp')} />
                  </TouchableOpacity>
                  
                </View>
  
                {/* Add horizontal line after each trip card */}
                {index < tripDetails[date].length  && <View style={styles.horizontalLine} />}
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };
  
  // const renderDeliveredOrders = () => {
  //   const orders = deliveredOrders[orderStatus] || [];
  //   return (
  //     <View>
  //       {orders.map((order) => (
          
  //         <View key={order.id} style={styles.deliveredOrderContainer}>
  //            <View style={{flexDirection:'row',paddingTop:20,paddingBottom:10}}>
  //           <Text style={styles.dateHeader}>Date: </Text>
  //           <Text style={styles.dateHeader2}>{order.date}</Text>
  //           </View>

  //         <View style={styles.orderDetails}>
  //           <View style={styles.orderRow}>
  //             <Text style={styles.orderName}>{order.name}</Text>
  //             <Image style={styles.iIcon} source={require('../assets/iIcon.webp')} />
  //           </View>
  //             <Text style={styles.orderText}>Pick-Up Address</Text>
  //             <Text style={styles.orderDetail}>{order.pickUp}</Text>
            
  //             <View style={{flexDirection:'row',justifyContent:"space-between"}}>
  //             <Text style={styles.orderText}>Start Time</Text>
  //             <Text style={styles.orderText}>Category</Text>
  //             </View>

  //             <View style={{flexDirection:'row',justifyContent:"space-between"}}>
  //             <Text style={styles.orderDetail}>{order.phone}</Text>
  //             <Text style={styles.orderDetail}>{order.category}</Text>
  //             </View>

  //             <View style={styles.dottedLine} />

  //             <View style={styles.orderActions}>
  //               <TouchableOpacity style={styles.startButton}>
  //                 <Text style={styles.startButtonText}>{order.button1}</Text>
  //               </TouchableOpacity>
  //               <View style={styles.startButton}>
  //                 <Text style={styles.startButtonText}>{order.button2}</Text>
  //               </View>
  //             </View>
            
  //           </View>
  //         </View>
  //       ))}
  //     </View>
  //   );
  // };

  const renderDeliveredOrders = () => {
    const orders = deliveredOrders[orderStatus] || [];
    return (
      <View>
        {orders.map((order) => {
          // Determine button styles based on the part and button state
          let button1Style, button2Style, buttonText1Style, buttonText2Style;
          switch (orderStatus) {
            case 'Upcoming':
              button1Style = styles.buttonUpcomingStart;
              button2Style = styles.buttonUpcomingPending;
              buttonText1Style = styles.buttonTextUpcomingStart;
              buttonText2Style = styles.buttonTextUpcomingPending;
              break;
            case 'Active':
              button1Style = order.button1 === 'Continue' ? styles.buttonActiveContinue : styles.buttonActiveEnRoute;
              button2Style = order.button2 === 'Continue' ? styles.buttonActiveContinue : styles.buttonActiveEnRoute;
              buttonText1Style = button1Style === styles.buttonActiveContinue ? styles.buttonTextActiveContinue : styles.buttonTextActiveEnRoute;
              buttonText2Style = button2Style === styles.buttonActiveContinue ? styles.buttonTextActiveContinue : styles.buttonTextActiveEnRoute;
              break;
            case 'Completed':
              button1Style = order.button1 === 'Start' ? styles.buttonCompletedStart : order.button1 === 'Success' ? styles.buttonCompletedSuccess : styles.buttonCompletedFailed;
              button2Style = order.button2 === 'Start' ? styles.buttonCompletedStart : order.button2 === 'Success' ? styles.buttonCompletedSuccess : styles.buttonCompletedFailed;
              buttonText1Style = button1Style === styles.buttonCompletedStart ? styles.buttonTextCompletedStart : button1Style === styles.buttonCompletedSuccess ? styles.buttonTextCompletedSuccess : styles.buttonTextCompletedFailed;
              buttonText2Style = button2Style === styles.buttonCompletedStart ? styles.buttonTextCompletedStart : button2Style === styles.buttonCompletedSuccess ? styles.buttonTextCompletedSuccess : styles.buttonTextCompletedFailed;
              break;
            default:
              button1Style = styles.buttonUpcomingStart; // Default fallback
              button2Style = styles.buttonUpcomingPending; // Default fallback
              buttonText1Style = styles.buttonTextUpcomingStart;
              buttonText2Style = styles.buttonTextUpcomingPending;
          }
  
          return (
            <View key={order.id} style={styles.deliveredOrderContainer}>
              <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 10 }}>
                <Text style={styles.dateHeader}>Date: </Text>
                <Text style={styles.dateHeader2}>{order.date}</Text>
              </View>
  
              <View style={styles.orderDetails}>
                <View style={styles.orderRow}>
                  <Text style={styles.orderName}>{order.name}</Text>
                  <Image style={styles.iIcon} source={require('../assets/iIcon.webp')} />
                </View>
                <Text style={styles.orderText}>Pick-Up Address</Text>
                <Text style={styles.orderDetail}>{order.pickUp}</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                  <Text style={styles.orderText}>Start Time</Text>
                  <Text style={styles.orderText}>Category</Text>
                </View>
  
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                  <Text style={styles.orderDetail}>{order.phone}</Text>
                  <Text style={styles.orderDetail}>{order.category}</Text>
                </View>
  
                <View style={styles.dottedLine} />
  
                <View style={styles.orderActions}>
                  <TouchableOpacity style={button1Style}>
                    <Text style={[styles.buttonText, buttonText1Style]}>{order.button1}</Text>
                  </TouchableOpacity>
                  <View style={button2Style}>
                    <Text style={[styles.buttonText, buttonText2Style]}>{order.button2}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  
  
  

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainHeaderComponent title="Saved Trip(s)" />
      <ScrollView>
        <Text
          style={{
            fontSize: fontSizes.fontLarge,
            fontWeight: '700',
            padding: dimensions.paddingLevel3,
            marginTop: '5%',
            color: colors.black,
          }}
        >
          Past Trip Usage
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: dimensions.paddingLevel3 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: fontSizes.fontXXXXLarge, fontWeight: '700', color: colors.black }}>83</Text>
            <Text>Total Uncompleted</Text>
          </View>
          <View style={styles.lineVertical} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: fontSizes.fontXXXXLarge, fontWeight: '700', color: colors.black }}>100</Text>
            <Text>Total Completed</Text>
          </View>
          <View style={styles.lineVertical} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: fontSizes.fontXXXXLarge, fontWeight: '700', color: colors.black }}>83%</Text>
            <Text>% Completed</Text>
          </View>
        </View>
       
        <View style={{ margin: dimensions.paddingLevel3 }}>
          <View style={styles.lineHorizontal} />
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Group By</Text>
            <TouchableOpacity onPress={() => openModal('Group By')} style={styles.optionBox}>
              <Text style={styles.optionText}>{selectedOption['Group By']}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineHorizontal} />
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>View as</Text>
            <TouchableOpacity onPress={() => openModal('View as')} style={styles.optionBox}>
              <Text style={styles.optionText}>{selectedOption['View as']}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineHorizontal} />

          <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <View style={styles.optionRow}>
              <Text style={styles.optionLabel}>Sort By</Text>
              <TouchableOpacity onPress={() => openModal('Sort By')} style={styles.optionBox2}>
                <Text style={styles.optionText}>{selectedOption['Sort By']}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionRow}>
              <Text style={styles.optionLabel}>Filter by</Text>
              <TouchableOpacity onPress={() => openModal('Filter by')} style={styles.optionBox2}>
                <Text style={styles.optionText}>{selectedOption['Filter by']}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lineHorizontal} />
        </View>

        {selectedOption['View as'] === 'Trip' ? renderTripDetails() : (
          <View>
            <View style={styles.statusButtonContainer}>
              {['Upcoming', 'Active', 'Completed'].map((status) => (
               <TouchableOpacity
               key={status}
               onPress={() => setOrderStatus(status)}
               style={[
                 styles.statusButton,
                 orderStatus === status && styles.statusButtonActive, // Apply active style conditionally
               ]}
             >
                  <Text
                    style={[
                      styles.statusButtonText,
                      orderStatus === status && styles.statusButtonTextActive,
                    ]}
                  >
                    {status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {renderDeliveredOrders()}
          </View>
        )}
      </ScrollView>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>{modalType}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Image style={styles.closeIcon} source={require('../assets/closeIcon.webp')} />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <View style={{ }}>
            {modalType && options[modalType]?.map((option, index) => (
              <View key={option}>
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => selectOption(option)}
                >
                  <Text style={[ styles.textStyle,selectedOption[modalType] === option ? styles.textStyleSelected : styles.textStyleDefault, ]}>{option}</Text>
                  {selectedOption[modalType] === option && (
                    <Image style={styles.tickIcon} source={require('../assets/tickIcon.webp')} />
                  )}
                </TouchableOpacity>
                {/* Add dotted line after each option except the last one */}
                {index < options[modalType].length - 1 && (
                  <View style={styles.dottedLine} />
                )}
              </View>
            ))}
          </View>
          </View>
        </View>
      </Modal>

       {/* Settings Modal */}
       <Modal
        animationType="none"
        transparent={true}
        visible={settingsModalVisible}
        onRequestClose={closeSettingsModal}
      >
        <TouchableOpacity
          style={styles.settingsCenteredView}
          onPress={closeSettingsModal}
          activeOpacity={1}
        >
          <View style={styles.settingsModalView}>

            <View style={styles.settingsOptions}>
              {['Open', 'Edit', 'Rename', 'Delete'].map((option, index, array) => (
                <View key={option}>
                  <TouchableOpacity
                    style={styles.settingsOption}
                    onPress={() => handleSettingsOption(option)}
                  >
                    <Text
                      style={[
                        styles.settingsOptionText,
                        option === 'Delete' ? styles.deleteOptionText : styles.otherOptionText,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                  {/* Add dotted line after each option except the last one */}
                  {index < array.length - 1 && <View style={styles.dottedLine} />}
                </View>
              ))}
            </View>
                      
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionLabel: {
    fontSize: fontSizes.fontMediumPlus,
    color:colors.black,
    fontWeight:'500'
  },
  optionBox: {
    borderWidth: 1,
    borderColor:"lightgray",
    borderRadius: 5,
    width:dimensions.widthLevel14,
    height:dimensions.heightLevel3,
    justifyContent:'center',
  },
  optionBox2: {
    borderWidth: 1,
    borderColor:"lightgray",
    borderRadius: 5,
    width:dimensions.widthLevel16,
    height:dimensions.heightLevel3,
    justifyContent:'center',
    marginLeft:8
    //padding: 8,
  },
  optionText: {
    fontSize: fontSizes.fontMedium,
    color:colors.secondary,
    alignContent:'center',
    paddingLeft:5,
   
  },

  settingsCenteredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  settingsModalView: {
    width: '100%',
    padding: dimensions.paddingLevel3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  settingsOptions: {
    marginVertical: 10,
  },
  settingsOption: {
    paddingVertical: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  settingsOptionText: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight:'600'

  },
  deleteOptionText: {
    color: 'red', 
  },
  otherOptionText: {
    color:colors.secondary, 
  },
  dateHeader: {
    fontSize:fontSizes.fontMidMedium,
    color:colors.black,
    fontWeight:'700'
  },
  dateHeader2: {
    fontSize:fontSizes.fontMidMedium,
    color:colors.secondary,
    fontWeight:'500'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    padding: dimensions.paddingLevel3,
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 8,
    margin:dimensions.paddingLevel3
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalText: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '600',
    color:colors.black
    
  },
  closeIcon: {
    width: 15,
    height: 15,
    justifyContent:'center',
    alignContent:'center'
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textStyleSelected: {
    color: colors.primary, // Color for selected text
    fontWeight:'600' ,
    fontSize:fontSizes.fontMidMedium
  },
  textStyleDefault: {
    color: colors.secondary,
    fontWeight:'600' ,
    fontSize:fontSizes.fontMidMedium
  },
  textStyle: {
    fontSize: fontSizes.fontMedium,
    color: colors.black,
  },
  tickIcon: {
    width: 15,
    height: 15,
  },
  sectionTitle: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    padding: dimensions.paddingLevel3,
    color: colors.black,
  },
  tripCard: {
    flexDirection: 'row',
   // padding: dimensions.paddingLevel1,
    backgroundColor: colors.white,
    paddingVertical:dimensions.paddingLevel2,
    paddingHorizontal:4,
    alignContent:'center'
  },
  tripColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tripStatLabel: {
    fontSize: fontSizes.fontSmall,
    color: colors.secondary,
  },
  tripStatValue: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.black,
  },
  lineHorizontal: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },
  lineVertical: {
    width: 1,
    backgroundColor: 'lightgray',
    marginHorizontal: 4,
  },
  deliveredOrderContainer: {
    padding: dimensions.paddingLevel3,
  },
  deliveredOrderCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 5,
    marginBottom: 10,
  },
  deliveredOrderInfo: {
    marginBottom: 10,
  },
  orderLabel: {
    fontSize: fontSizes.fontMedium,
    fontWeight: 'bold',
    color: colors.black,
  },
  orderAddress: {
    fontSize: fontSizes.fontSmall,
    color: colors.secondary,
  },
  orderTime: {
    fontSize: fontSizes.fontSmall,
    color: colors.secondary,
  },
  orderCategory: {
    fontSize: fontSizes.fontSmall,
    color: colors.gray,
  },
  orderActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // startButton: {
  //   backgroundColor: colors.primary,
  //   padding: 10,
  //   borderRadius: 5,
  // },
  
  startButtonText: {
    color: colors.white,
  },
  orderStatus: {
    color: colors.black,
  },
  statusButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor:"lightgray"
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'lightgray',

  },
  statusButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
   
  },
  statusButtonText: {
    fontSize: fontSizes.fontMediumPlus,
    color: "lightgray",
    fontWeight:'700',
  },
  statusButtonTextActive: {
    color: colors.primary,
    fontSize:fontSizes.fontMediumPlus,
    fontWeight:'700',
  },
  orderDetails: {
    flex: 1,
    borderRadius: 8,
    padding: dimensions.paddingLevel3,
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
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: 'lightgray',
    borderStyle: 'dashed',
    marginVertical: 20,
  },
  icon2: {
    width: 20,
    height: 20,
    marginTop:8,
    resizeMode: 'contain',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },
  iIcon: {
    width: 18,
    height: 18,
  },
//===============================

buttonUpcomingStart: {
  backgroundColor: colors.primary,
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center',
  color: colors.white,
},
buttonUpcomingPending: {
  backgroundColor:'lightgray',
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonActiveContinue: {
  backgroundColor: colors.primary,
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonActiveEnRoute: {
  backgroundColor: colors.white,
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  borderWidth:1,
  borderColor:"lightgray",
  justifyContent:'center',
  alignItems:'center'
},
buttonCompletedStart: {
  backgroundColor: "lightgray",
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonCompletedSuccess: {
  backgroundColor: "#0A987F1A",
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonCompletedFailed: {
  backgroundColor: "#FF00001A",
  height:38,
  width:dimensions.widthLevel15,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
buttonText: {
  fontWeight:'500',
  fontSize: fontSizes.fontMidMedium,
},
buttonTextUpcomingStart: {
  color: '#FFFFFF',
},
buttonTextUpcomingPending: {
  color:colors.secondary,
},
buttonTextActiveContinue: {
  color: '#FFFFFF',
},
buttonTextActiveEnRoute: {
  color: colors.black,
},
buttonTextCompletedStart: {
  color:colors.secondary,
},
buttonTextCompletedSuccess: {
  color: '#0CBC72',
},
buttonTextCompletedFailed: {
  color: '#FF0000',
},
});
