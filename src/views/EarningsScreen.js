// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
// import { BarChart, Grid } from 'react-native-svg-charts';
// import { colors, dimensions, fontSizes, imageSizes } from '../styles/constants';
// import MainHeaderComponent from '../components/MainHeaderComponent';

// export default function EarningsScreen() {
//   const data = [10, 20, 60, 40, 30, 80, 50]; // Example data
//   const [isScheduledPaymentEnabled, setIsScheduledPaymentEnabled] = React.useState(false);

//   const [showCompletedOrder, setShowCompletedOrder] = React.useState(true);
//   const [showOrderDetail, setShowOrderDetail] = React.useState(true);
//   const [showDepositsAndTransfer, setShowDepositsAndTransfer] = React.useState(true);

//   const toggleSwitch = () => setIsScheduledPaymentEnabled(previousState => !previousState);

//   const completedOrder = [
//     {
//       onDemand:'1',
//       scheduled:'3',
//       dedicated:'0'
//     }
//   ]

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       <MainHeaderComponent title="Earnings" />

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
//           Earnings
//         </Text>
//         <View style={{ height: 200, padding: 20 }}>
//           <BarChart
//             style={{ height: 150 }}
//             data={data}
//             svg={{ fill: colors.primary }} // Customize the bar color
//             contentInset={{ top: 30, bottom: 30 }}
//           >
//             <Grid />
//           </BarChart>
//         </View>

//         <View style={styles.sectionHeader}>
//           <Text style={styles.text1}>Completed Order</Text>
//           <TouchableOpacity  onPress={() => setShowCompletedOrder(!showCompletedOrder)}>
//           <Image style={styles.icon} source={showCompletedOrder ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
//           </TouchableOpacity>
//         </View>

        
       
//         {showCompletedOrder && (
//            <View style={styles.orderSummary}>
//              {completedOrder.map((completedOrder, index) => (
//                <View key={index}>
//           <View style={[styles.orderSummaryRow, styles.borderBottom]}>
//             <Text style={styles.orderSummaryText}>On Demand</Text>
//             <Text style={styles.orderSummaryText}>{completedOrder.onDemand}</Text>
//           </View>
//           <View style={[styles.orderSummaryRow, styles.borderBottom]}>
//             <Text style={styles.orderSummaryText}>Scheduled</Text>
//             <Text style={styles.orderSummaryText}>{completedOrder.scheduled}</Text>
//           </View>
//           <View style={styles.orderSummaryRow}>
//             <Text style={styles.orderSummaryText}>Dedicated</Text>
//             <Text style={styles.orderSummaryText}>{completedOrder.dedicated}</Text>
//             </View>
//                </View>
//             ))}
//           </View>
//          )}
          
         

//         <View style={styles.sectionHeader}>
//           <Text style={styles.text1}>Order Detail</Text>
//           <TouchableOpacity onPress={() => setShowOrderDetail(!showOrderDetail)}>
//           <Image style={styles.icon} source={showOrderDetail ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
//           </TouchableOpacity>
//         </View>
//         {showOrderDetail && (
//         <View style={styles.orderDetail}>
//           <View style={styles.orderCard}>
//             <View style={styles.orderInfoRow}>
//               <Text style={styles.orderNumber}>Order #123456</Text>
//               <Text style={styles.orderDate}>02/26/23</Text>
//             </View>
//             <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
//                <Text style={styles.orderPrice}>$60</Text>
//             </View>
//             <Text style={styles.orderInfo}>120 ml • 1 hr 12 min • Delivery</Text>
//           </View>
//           <View style={styles.orderCard}>
//             <View style={styles.orderInfoRow}>
//               <Text style={styles.orderNumber}>Order #123456</Text>
//               <Text style={styles.orderDate}>02/26/23</Text>
//             </View>
//             <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
//                <Text style={styles.orderPrice}>$40</Text>
//             </View>
//             <Text style={styles.orderInfo}>120 ml • 1 hr 12 min • Delivery</Text>
//           </View>
//           <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//             <TouchableOpacity style={styles.downloadButton}>
//             <Text style={styles.downloadButtonText}>Download Current Statement</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <Image style={styles.icon2} source={require('../assets/settingsIcon.webp')} />
//           </TouchableOpacity>
//         </View>
//         </View>
//         )}


//         <View style={styles.sectionHeader}>
//           <Text style={styles.text1}>Deposits and Transfer</Text>
//           <TouchableOpacity onPress={() => setShowDepositsAndTransfer(!showDepositsAndTransfer)}>
//           <Image style={styles.icon} source={showDepositsAndTransfer ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
//           </TouchableOpacity>
//         </View>
//         {showDepositsAndTransfer && (
//         <View style={styles.transferSummary}>
//           <View style={[styles.transferSummaryRow, styles.borderBottom]}>
//             <View style={styles.transferIconContainer}>
//               <Image style={styles.transferIcon} source={require('../assets/bankIcon.webp')} />
//             </View>
//             <View style={styles.transferTextContainer}>
//               <Text style={styles.transferTitle}>Link Bank Account</Text>
//               <Text style={styles.transferSubtitle}>Receive without paying a fee</Text>
//             </View>
//           </View>
//           <View style={styles.transferSummaryRow}>
//             <View style={styles.transferIconContainer}>
//               <Image style={styles.transferIcon} source={require('../assets/bankCardIcon.webp')} />
//             </View>
//             <View style={styles.transferTextContainer}>
//               <Text style={styles.transferTitle}>Add Debit Card</Text>
//               <Text style={styles.transferSubtitle}>Instant fee: $1.90</Text>
//             </View>
//           </View>
//         </View>
//         )}

//         <View style={styles.paymentContainer}>
//           <View style={[styles.schedulePaymentContainer, styles.borderBottom]}>
//             <Text style={styles.schedulePaymentTitle}>Schedule Payment</Text>
//             <Text style={styles.schedulePaymentSubtitle}>Auto transfers initiated weekly every Monday</Text>
//             <Switch
//               trackColor={{ false: colors.secondary, true: colors.primary }}
//               thumbColor={isScheduledPaymentEnabled ? colors.white : colors.white}
//               ios_backgroundColor={colors.secondary}
//               onValueChange={toggleSwitch}
//               value={isScheduledPaymentEnabled}
//             />
//           </View>

//           <View style={styles.fastCashOutContainer}>
//             <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//             <Text style={styles.fastCashOutTitle}>Fast Cash Out</Text>
//             <Text style={styles.fastCashOutFee}>Instant fee: $1.90</Text>
//             </View>
//             <Text style={styles.fastCashOutSubtitle}>Available in minutes to 1 day.</Text>
           
//           </View>
//         </View>

//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: dimensions.paddingLevel4,
//   },
//   text1: {
//     fontSize: fontSizes.fontLarge,
//     fontWeight: '700',
//     color: colors.black,
//   },
//   icon: {
//     width: 18,
//     height: 18,
//   },
//   orderSummary: {
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderRadius: 10,
//     margin: dimensions.paddingLevel3,
//     marginTop: 0,
//   },
//   orderSummaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical:5,
//     borderColor: "lightgray",
//   },
//   borderBottom: {
//     borderWidth: 1,
//     borderColor: "gray",
//   },
//   orderSummaryText: {
//     fontSize: fontSizes.fontMidMedium,
//     color: colors.black,
//     padding: dimensions.paddingLevel3,
//     fontWeight: '500',

//   },
//   orderDetail: {
//     padding: dimensions.paddingLevel3,
//     marginTop: "-5%"
//   },
//   orderCard: {
//     backgroundColor: colors.white,
//     borderRadius: 10,
//     padding: dimensions.paddingLevel3,
//     marginVertical: 7,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//     elevation: 5,
//   },
//   orderInfoRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
    
//   },
//   orderNumber: {
//     fontSize: fontSizes.fontMidMedium,
//     fontWeight: '700',
//     color: colors.black,
//   },
//   orderDate: {
//     fontSize: fontSizes.fontMedium,
//     color: colors.secondary,
//     marginLeft:12
//   },
//   orderInfo: {
//     fontSize: fontSizes.fontMedium,
//     color:colors.secondary,
//    // marginTop:-8
//   },
//   orderPrice: {
//     fontSize: fontSizes.fontLarge,
//     fontWeight: '700',
//     color: colors.primary,
//   },
//   downloadButton: {
//     backgroundColor: colors.primary,
//     borderRadius: 10,
//     //margin: dimensions.paddingLevel3,
//     marginTop:'5%',
//     padding: dimensions.paddingLevel2,
//     alignItems: 'center',
//     flexGrow: 1,   // Allow the button to grow and take available space
//     flexShrink: 1, // Allow the button to shrink if necessary
//   },
//   downloadButtonText: {
//     color: colors.white,
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '600',
//   },
//   icon2: {
//     width: 25,
//     height: 25,
//     marginLeft: 10,
//     marginTop:15,
//     resizeMode: 'contain',  // Ensure the icon scales properly within its container
//   },
//   transferSummary: {
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderRadius: 10,
//     margin: dimensions.paddingLevel3,
//   },
//   transferSummaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderColor: "lightgray",
//     padding: dimensions.paddingLevel3,
//   },
//   borderBottom: {
//     borderBottomWidth: 1,
//     borderBottomColor: "gray",
//   },
//   transferIconContainer: {
//     width: 55,
//     height: 55,
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderRadius:7,
//     backgroundColor: colors.white,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: dimensions.paddingLevel3,
//   },
//   transferIcon: {
//     width: 35,
//     height: 35,
//   },
//   transferTextContainer: {
//     flex: 1,
//   },
//   transferTitle: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '600',
//     color: colors.black,
//   },
//   transferSubtitle: {
//     fontSize: fontSizes.fontMedium,
//     color: colors.secondary,
//   },
//   paymentContainer: {
//     backgroundColor: colors.black,
//     borderRadius: 15,
//     margin: dimensions.paddingLevel3,
//     //padding: dimensions.paddingLevel3,
//   },
//   schedulePaymentContainer: {
//     paddingBottom: dimensions.paddingLevel5,
//     alignItems:"center",
//     padding: dimensions.paddingLevel4,
    
//   },
//   schedulePaymentTitle: {
//     fontSize: fontSizes.fontXLarge,
//     fontWeight: '700',
//     color: colors.white,
//   },
//   schedulePaymentSubtitle: {
//     fontSize: fontSizes.fontMidMedium,
//     textAlign:"center",
//     color: colors.white,
//     marginVertical: 15,
    
//   },
//   fastCashOutContainer: {
//     padding: dimensions.paddingLevel3,
//   },
//   fastCashOutTitle: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '700',
//     color: colors.white,
//   },
//   fastCashOutSubtitle: {
//     fontSize: fontSizes.fontMidMedium,
//     color: colors.secondary,
    
//     marginVertical: 5,
//   },
//   fastCashOutFee: {
//     fontSize: fontSizes.fontMidMedium,
//     color: colors.white,
//     fontWeight:'400'
//   },
// });


// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Switch,Modal } from 'react-native';
// import { BarChart, Grid } from 'react-native-svg-charts';
// import { colors, dimensions, fontSizes, imageSizes } from '../styles/constants';
// import MainHeaderComponent from '../components/MainHeaderComponent';

// export default function EarningsScreen() {
//   const data = [10, 20, 60, 40, 30, 80, 50]; // Example data
//   const [isScheduledPaymentEnabled, setIsScheduledPaymentEnabled] = React.useState(false);

//   const [showCompletedOrder, setShowCompletedOrder] = React.useState(true);
//   const [showOrderDetail, setShowOrderDetail] = React.useState(true);
//   const [showDepositsAndTransfer, setShowDepositsAndTransfer] = React.useState(true);

//   const [modalVisible, setModalVisible] = React.useState(false);
//   const [selectedDateRange, setSelectedDateRange] = React.useState('Mar 25 - Apr 1');
//   const [earningsData, setEarningsData] = React.useState([
//     { dateRange: 'Mar 25 - Apr 1', amount: '$100.00' },
//     { dateRange: 'Mar 18 - Mar 25', amount: '$50.00' },
//     { dateRange: 'Mar 11 - Mar 18', amount: '$0.00' },
//     { dateRange: 'Mar 4 - Mar 11', amount: '$0.00' },
//     { dateRange: 'Feb 26 - Mar 4', amount: '$0.00' },
//     { dateRange: 'Feb 19 - Feb 26', amount: '$0.00' }
//   ]);

//   const [totalEarnings, setTotalEarnings] = React.useState('$100.00');

//   const openModal = (type) => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const handleDateRangeSelect = (dateRange, amount) => {
//     setSelectedDateRange(dateRange);
//     setTotalEarnings(amount);
//     setModalVisible(false);
//   };


//   const toggleSwitch = () => setIsScheduledPaymentEnabled(previousState => !previousState);

//   const completedOrder = [
//     {
//       onDemand:'1',
//       scheduled:'3',
//       dedicated:'0'
//     }
//   ]

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       <MainHeaderComponent title="Earnings" />

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
//           Earnings
//         </Text>
        
//         {/* Date Range Selector and Total Earnings */}

//         <View style={styles.dateRangeContainer}>
//           <TouchableOpacity style={styles.dateRangeButton} onPress={openModal}>
//             <Text style={styles.dateRangeText}>{selectedDateRange}  </Text>
//             <Image style={styles.downArrowIcon} source={require('../assets/downArrow.webp')} />
//           </TouchableOpacity>

//           <Text style={styles.totalEarnings}>{totalEarnings}</Text>
//         </View>
        
     

//         <View style={{ height: 200, padding: 20 }}>
//           <BarChart
//             style={{ height: 180 }}
//             data={data}
//             svg={{ fill: colors.primary }} // Customize the bar color
//             contentInset={{ top: 10, bottom: 40 }}
//           >
//             <Grid />
//           </BarChart>
//         </View>

//         <View style={styles.sectionHeader}>
//           <Text style={styles.text1}>Completed Order</Text>
//           <TouchableOpacity  onPress={() => setShowCompletedOrder(!showCompletedOrder)}>
//           <Image style={styles.icon} source={showCompletedOrder ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
//           </TouchableOpacity>
//         </View>

//         {showCompletedOrder && (
//           <View style={styles.orderSummary}>
//             {completedOrder.map((completedOrder, index) => (
//               <View key={index}>
//                 <View style={[styles.orderSummaryRow, styles.borderBottom]}>
//                   <Text style={styles.orderSummaryText}>On Demand</Text>
//                   <Text style={styles.orderSummaryText}>{completedOrder.onDemand}</Text>
//                 </View>
//                 <View style={[styles.orderSummaryRow, styles.borderBottom]}>
//                   <Text style={styles.orderSummaryText}>Scheduled</Text>
//                   <Text style={styles.orderSummaryText}>{completedOrder.scheduled}</Text>
//                 </View>
//                 <View style={styles.orderSummaryRow}>
//                   <Text style={styles.orderSummaryText}>Dedicated</Text>
//                   <Text style={styles.orderSummaryText}>{completedOrder.dedicated}</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         )}

//         <View style={styles.sectionHeader}>
//           <Text style={styles.text1}>Order Detail</Text>
//           <TouchableOpacity onPress={() => setShowOrderDetail(!showOrderDetail)}>
//           <Image style={styles.icon} source={showOrderDetail ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
//           </TouchableOpacity>
//         </View>

//         {showOrderDetail && (
//         <View style={styles.orderDetail}>
//           <View style={styles.orderCard}>
//             <View style={styles.orderInfoRow}>
//               <Text style={styles.orderNumber}>Order #123456</Text>
//               <Text style={styles.orderDate}>02/26/23</Text>
//             </View>
//             <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
//                <Text style={styles.orderPrice}>$60</Text>
//             </View>
//             <Text style={styles.orderInfo}>120 ml • 1 hr 12 min • Delivery</Text>
//           </View>
//           <View style={styles.orderCard}>
//             <View style={styles.orderInfoRow}>
//               <Text style={styles.orderNumber}>Order #123456</Text>
//               <Text style={styles.orderDate}>02/26/23</Text>
//             </View>
//             <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
//                <Text style={styles.orderPrice}>$40</Text>
//             </View>
//             <Text style={styles.orderInfo}>120 ml • 1 hr 12 min • Delivery</Text>
//           </View>
//           <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//             <TouchableOpacity style={styles.downloadButton}>
//             <Text style={styles.downloadButtonText}>Download Current Statement</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <Image style={styles.icon2} source={require('../assets/settingsIcon.webp')} />
//           </TouchableOpacity>
//         </View>
//         </View>
//         )}

//         <View style={styles.sectionHeader}>
//           <Text style={styles.text1}>Deposits and Transfer</Text>
//           <TouchableOpacity onPress={() => setShowDepositsAndTransfer(!showDepositsAndTransfer)}>
//           <Image style={styles.icon} source={showDepositsAndTransfer ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
//           </TouchableOpacity>
//         </View>
//         {showDepositsAndTransfer && (
//         <View style={styles.transferSummary}>
//           <View style={[styles.transferSummaryRow, styles.borderBottom]}>
//             <View style={styles.transferIconContainer}>
//               <Image style={styles.transferIcon} source={require('../assets/bankIcon.webp')} />
//             </View>
//             <View style={styles.transferTextContainer}>
//               <Text style={styles.transferTitle}>Link Bank Account</Text>
//               <Text style={styles.transferSubtitle}>Receive without paying a fee</Text>
//             </View>
//           </View>
//           <View style={styles.transferSummaryRow}>
//             <View style={styles.transferIconContainer}>
//               <Image style={styles.transferIcon} source={require('../assets/bankCardIcon.webp')} />
//             </View>
//             <View style={styles.transferTextContainer}>
//               <Text style={styles.transferTitle}>Add Debit Card</Text>
//               <Text style={styles.transferSubtitle}>Instant fee: $1.90</Text>
//             </View>
//           </View>
//         </View>
//         )}

//         <View style={styles.paymentContainer}>
//           <View style={[styles.schedulePaymentContainer, styles.borderBottom]}>
//             <Text style={styles.schedulePaymentTitle}>Schedule Payment</Text>
//             <Text style={styles.schedulePaymentSubtitle}>Auto transfers initiated weekly every Monday</Text>
//             <Switch
//               trackColor={{ false: colors.secondary, true: colors.primary }}
//               thumbColor={isScheduledPaymentEnabled ? colors.white : colors.white}
//               ios_backgroundColor={colors.secondary}
//               onValueChange={toggleSwitch}
//               value={isScheduledPaymentEnabled}
//             />
//           </View>

//           <View style={styles.fastCashOutContainer}>
//             <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//             <Text style={styles.fastCashOutTitle}>Fast Cash Out</Text>
//             <Text style={styles.fastCashOutFee}>Instant fee: $1.90</Text>
//             </View>
//             <Text style={styles.fastCashOutSubtitle}>Available in minutes to 1 day.</Text>
//           </View>
//         </View>

//       </ScrollView>

//       {/* Modal for Date Range Selection */}
//       <Modal
//         animationType="none"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//           <View style={styles.modalHeader}>
//             <Text style={styles.modalTitle}>Date Range</Text>
//             <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
//           <Image style={styles.closeIcon} source={require('../assets/closeIcon.webp')} />
//         </TouchableOpacity>
//         </View>
//         <View style={styles.line} />
//         <ScrollView style={styles.dateRangeList}>
//               {earningsData.map((item, index) => (
//                 <View key={index} style={styles.dateRangeItemContainer}>
//                   <TouchableOpacity
//                     style={styles.dateRangeItem}
//                     onPress={() => handleDateRangeSelect(item.dateRange, item.amount)}
//                   >
//                     <Text style={styles.dateRangeText}>{item.dateRange}</Text>
//                     <Text style={styles.dateRangeAmount}>{item.amount}</Text>
//                   </TouchableOpacity>
//                   {index < earningsData.length - 1 && <View style={styles.dottedLine2} />}
//                 </View>
//               ))}
//             </ScrollView>
            
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   dateRangeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: dimensions.paddingLevel3,
//   },
//   dateRangeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderRadius: 8,
//     padding: dimensions.paddingLevel2,
//     backgroundColor: colors.white,
//   },
//   dateRangeText: {
//     fontSize: fontSizes.fontMidMedium,
//     color: colors.secondary,
//     marginRight: 5,
//   },
//   downArrowIcon: {
//     width: 12,
//     height: 12,
//   },
//   totalEarnings: {
//     fontSize: fontSizes.fontXLarge,
//     fontWeight: '700',
//     color: colors.black,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: dimensions.paddingLevel4,
//   },
//   text1: {
//     fontSize: fontSizes.fontLarge,
//     fontWeight: '700',
//     color: colors.black,
//   },
//   icon: {
//     width: 18,
//     height: 18,
//   },
//   orderSummary: {
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderRadius: 10,
//     margin: dimensions.paddingLevel3,
//     marginTop: 0,
//   },
//   orderSummaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical:5,
//     borderColor: "lightgray",
//   },
//   borderBottom: {
//     borderWidth: 1,
//     borderColor: "gray",
//   },
//   orderSummaryText: {
//     fontSize: fontSizes.fontMidMedium,
//     color: colors.black,
//     padding: dimensions.paddingLevel3,
//     fontWeight: '500',
//   },
//   orderDetail: {
//     padding: dimensions.paddingLevel3,
//     marginTop: "-5%"
//   },
//   orderCard: {
//     backgroundColor: colors.white,
//     borderRadius: 10,
//     padding: dimensions.paddingLevel3,
//     marginVertical: 7,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//     elevation: 5,
//   },
//   orderInfoRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//   },
//   orderNumber: {
//     fontSize: fontSizes.fontMidMedium,
//     fontWeight: '700',
//     color: colors.black,
//   },
//   orderDate: {
//     fontSize: fontSizes.fontMedium,
//     color: colors.secondary,
//     marginLeft:12
//   },
//   orderInfo: {
//     fontSize: fontSizes.fontMedium,
//     color:colors.secondary,
//   },
//   orderPrice: {
//     fontSize: fontSizes.fontLarge,
//     fontWeight: '700',
//     color: colors.primary,
//   },
//   downloadButton: {
//     backgroundColor: colors.primary,
//     borderRadius: 10,
//     marginTop:'5%',
//     padding: dimensions.paddingLevel2,
//     alignItems: 'center',
//     flexGrow: 1,   // Allow the button to grow and take available space
//     flexShrink: 1, // Allow the button to shrink if necessary
//   },
//   downloadButtonText: {
//     color: colors.white,
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '600',
//   },
//   icon2: {
//     width: 25,
//     height: 25,
//     marginLeft: 10,
//     marginTop:15,
//     resizeMode: 'contain',
//   },
//   transferSummary: {
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderRadius: 10,
//     margin: dimensions.paddingLevel3,
//   },
//   transferSummaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderColor: "lightgray",
//     padding: dimensions.paddingLevel3,
//   },
//   borderBottom: {
//     borderBottomWidth: 1,
//     borderBottomColor: "gray",
//   },
//   transferIconContainer: {
//     width: 55,
//     height: 55,
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderRadius:7,
//     backgroundColor: colors.white,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: dimensions.paddingLevel3,
//   },
//   transferIcon: {
//     width: 35,
//     height: 35,
//   },
//   transferTextContainer: {
//     flex: 1,
//   },
//   transferTitle: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '600',
//     color: colors.black,
//   },
//   transferSubtitle: {
//     fontSize: fontSizes.fontMedium,
//     color: colors.secondary,
//   },
//   paymentContainer: {
//     backgroundColor: colors.black,
//     borderRadius: 15,
//     margin: dimensions.paddingLevel3,
//   },
//   schedulePaymentContainer: {
//     paddingBottom: dimensions.paddingLevel5,
//     alignItems:"center",
//     padding: dimensions.paddingLevel4,
//   },
//   schedulePaymentTitle: {
//     fontSize: fontSizes.fontXLarge,
//     fontWeight: '700',
//     color: colors.white,
//   },
//   schedulePaymentSubtitle: {
//     fontSize: fontSizes.fontMidMedium,
//     textAlign:"center",
//     color: colors.white,
//     marginVertical: 15,
//   },
//   fastCashOutContainer: {
//     padding: dimensions.paddingLevel3,
//   },
//   fastCashOutTitle: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '700',
//     color: colors.white,
//   },
//   fastCashOutSubtitle: {
//     fontSize: fontSizes.fontMidMedium,
//     color: colors.secondary,
//     marginVertical: 5,
//   },
//   fastCashOutFee: {
//     fontSize: fontSizes.fontMidMedium,
//     color: colors.white,
//     fontWeight:'400'
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: colors.white,
//     borderRadius: 10,
//     padding: 20,
//   //  alignItems: 'center',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//    // marginBottom: 20,
//     padding:10
//   },
//   modalTitle: {
//     fontSize: fontSizes.fontLarge,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color:colors.black
//   },
//   dateRangeList: {
//     width: '100%',
//     maxHeight: 300,
//   },
//   dateRangeItem: {
//     padding: 15,
//    // borderBottomWidth: 1,
//    // borderBottomColor: colors.lightGray,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   dateRangeText: {
//     fontSize: fontSizes.fontMidMedium,
//     color:colors.secondary
//   },
//   dateRangeAmount: {
//     fontSize: fontSizes.fontMidMedium,
//    // fontWeight: 'bold',
//     color:colors.secondary
//   },
 
//   closeIcon: {
//     width: 13,
//     height: 13,
//   },
//   dottedLine2:{
//     borderBottomWidth: 1,
//    borderColor: 'lightgray',
//      borderStyle: 'dashed',  
//      marginBottom:5
//   },
//   line: {
//     height: 1,
//     backgroundColor: 'lightgray',
//     marginBottom:8
//    // flex: 1,
//   },
  
// });

import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Switch,Modal } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { colors, dimensions, fontSizes, imageSizes } from '../styles/constants';
import MainHeaderComponent from '../components/MainHeaderComponent';

export default function EarningsScreen() {
  const data = [10, 20, 60, 40, 30, 80, 50]; // Example data
  const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = ['25', '26', '27', '28', '29', '30', '31'];

  const [isScheduledPaymentEnabled, setIsScheduledPaymentEnabled] = React.useState(false);

  const [showCompletedOrder, setShowCompletedOrder] = React.useState(true);
  const [showOrderDetail, setShowOrderDetail] = React.useState(true);
  const [showDepositsAndTransfer, setShowDepositsAndTransfer] = React.useState(true);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedDateRange, setSelectedDateRange] = React.useState('Mar 25 - Apr 1');
  const [earningsData, setEarningsData] = React.useState([
    { dateRange: 'Mar 25 - Apr 1', amount: '$100.00' },
    { dateRange: 'Mar 18 - Mar 25', amount: '$50.00' },
    { dateRange: 'Mar 11 - Mar 18', amount: '$0.00' },
    { dateRange: 'Mar 4 - Mar 11', amount: '$0.00' },
    { dateRange: 'Feb 26 - Mar 4', amount: '$0.00' },
    { dateRange: 'Feb 19 - Feb 26', amount: '$0.00' }
  ]);

  

  const [totalEarnings, setTotalEarnings] = React.useState('$100.00');

  const openModal = (type) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDateRangeSelect = (dateRange, amount) => {
    setSelectedDateRange(dateRange);
    setTotalEarnings(amount);
    setModalVisible(false);
  };


  const toggleSwitch = () => setIsScheduledPaymentEnabled(previousState => !previousState);

  const completedOrder = [
    {
      onDemand:'1',
      scheduled:'3',
      dedicated:'0'
    }
  ]

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainHeaderComponent title="Earnings" />

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
          Earnings
        </Text>
        
        {/* Date Range Selector and Total Earnings */}

        {/* <View style={styles.orderSummary}>
        <View style={styles.dateRangeContainer}>
          <TouchableOpacity style={styles.dateRangeButton} onPress={openModal}>
            <Text style={styles.dateRangeText}>{selectedDateRange}  </Text>
            <Image style={styles.downArrowIcon} source={require('../assets/downArrow.webp')} />
          </TouchableOpacity>

          <Text style={styles.totalEarnings}>{totalEarnings}</Text>
        </View>
        
        <View style={{ height: 200, padding: 20 }}>
          <BarChart
            style={{ height: 180 }}
            data={data}
            svg={{ fill: colors.primary }} // Customize the bar color
            contentInset={{ top: 10, bottom: 40 }}
            spacing={5.8}
          >
            <Grid />
          </BarChart>
          <View style={styles.chartBottom}>
              <XAxis
                style={styles.xAxis}
                data={data}
                formatLabel={(value, index) => xLabels[index]}
                contentInset={{ left: 10, right: 10 }}
                svg={{ fontSize: 10, fill: 'black' }}
                
              />
              <View style={styles.dateLabelsContainer}>
                {dates.map((date, index) => (
                  <Text key={index} style={styles.dateLabel}>{date}</Text>
                ))}
              </View>
            </View>
        </View>
        </View> */}

         
        {/* Date Range Selector and Total Earnings */}
        <View style={styles.orderSummary}>
          <View style={styles.dateRangeContainer}>
            <TouchableOpacity style={styles.dateRangeButton} onPress={openModal}>
              <Text style={styles.dateRangeText}>{selectedDateRange}</Text>
              <Image style={styles.downArrowIcon} source={require('../assets/downArrow.webp')} />
            </TouchableOpacity>

            <Text style={styles.totalEarnings}>{totalEarnings}</Text>
          </View>

          <View style={styles.chartContainer}>
            <BarChart
              style={styles.barChart}
              data={data}
              svg={{ fill: colors.primary }} // Customize the bar color
              contentInset={{ top: 10, bottom: 40 }}
              spacing={0.2} // Adjust spacing between bars
            >
              <Grid />
            </BarChart>

            <View style={styles.xAxisContainer}>
              <XAxis
                style={styles.xAxis}
                data={data}
                formatLabel={(value, index) => xLabels[index]}
                contentInset={{ left: 10, right: 10 }}
                svg={{ fontSize: 10, fill: 'black' }}
              />
              <View style={styles.dateLabelsContainer}>
                {dates.map((date, index) => (
                  <View key={index} style={styles.dateLabelContainer}>
                    {/* <Text style={styles.dateLabel}>{date}</Text> */}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.text1}>Completed Order</Text>
          <TouchableOpacity  onPress={() => setShowCompletedOrder(!showCompletedOrder)}>
          <Image style={styles.icon} source={showCompletedOrder ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
          </TouchableOpacity>
        </View>

        {showCompletedOrder && (
          <View style={styles.orderSummary}>
            {completedOrder.map((completedOrder, index) => (
              <View key={index}>
                <View style={[styles.orderSummaryRow, styles.borderBottom]}>
                  <Text style={styles.orderSummaryText}>On Demand</Text>
                  <Text style={styles.orderSummaryText}>{completedOrder.onDemand}</Text>
                </View>
                <View style={[styles.orderSummaryRow, styles.borderBottom]}>
                  <Text style={styles.orderSummaryText}>Scheduled</Text>
                  <Text style={styles.orderSummaryText}>{completedOrder.scheduled}</Text>
                </View>
                <View style={styles.orderSummaryRow}>
                  <Text style={styles.orderSummaryText}>Dedicated</Text>
                  <Text style={styles.orderSummaryText}>{completedOrder.dedicated}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={styles.sectionHeader}>
          <Text style={styles.text1}>Order Detail</Text>
          <TouchableOpacity onPress={() => setShowOrderDetail(!showOrderDetail)}>
          <Image style={styles.icon} source={showOrderDetail ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
          </TouchableOpacity>
        </View>

        {showOrderDetail && (
        <View style={styles.orderDetail}>
          <View style={styles.orderCard}>
            <View style={styles.orderInfoRow}>
              <Text style={styles.orderNumber}>Order #123456</Text>
              <Text style={styles.orderDate}>02/26/23</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
               <Text style={styles.orderPrice}>$60</Text>
            </View>
            <Text style={styles.orderInfo}>120 ml • 1 hr 12 min • Delivery</Text>
          </View>
          <View style={styles.orderCard}>
            <View style={styles.orderInfoRow}>
              <Text style={styles.orderNumber}>Order #123456</Text>
              <Text style={styles.orderDate}>02/26/23</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
               <Text style={styles.orderPrice}>$40</Text>
            </View>
            <Text style={styles.orderInfo}>120 ml • 1 hr 12 min • Delivery</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Download Current Statement</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.icon2} source={require('../assets/settingsIcon.webp')} />
          </TouchableOpacity>
        </View>
        </View>
        )}

        <View style={styles.sectionHeader}>
          <Text style={styles.text1}>Deposits and Transfer</Text>
          <TouchableOpacity onPress={() => setShowDepositsAndTransfer(!showDepositsAndTransfer)}>
          <Image style={styles.icon} source={showDepositsAndTransfer ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')} />
          </TouchableOpacity>
        </View>
        {showDepositsAndTransfer && (
        <View style={styles.transferSummary}>
          <View style={[styles.transferSummaryRow, styles.borderBottom]}>
            <View style={styles.transferIconContainer}>
              <Image style={styles.transferIcon} source={require('../assets/bankIcon.webp')} />
            </View>
            <View style={styles.transferTextContainer}>
              <Text style={styles.transferTitle}>Link Bank Account</Text>
              <Text style={styles.transferSubtitle}>Receive without paying a fee</Text>
            </View>
          </View>
          <View style={styles.transferSummaryRow}>
            <View style={styles.transferIconContainer}>
              <Image style={styles.transferIcon} source={require('../assets/bankCardIcon.webp')} />
            </View>
            <View style={styles.transferTextContainer}>
              <Text style={styles.transferTitle}>Add Debit Card</Text>
              <Text style={styles.transferSubtitle}>Instant fee: $1.90</Text>
            </View>
          </View>
        </View>
        )}

        <View style={styles.paymentContainer}>
          <View style={[styles.schedulePaymentContainer, styles.borderBottom]}>
            <Text style={styles.schedulePaymentTitle}>Schedule Payment</Text>
            <Text style={styles.schedulePaymentSubtitle}>Auto transfers initiated weekly every Monday</Text>
            <Switch
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor={isScheduledPaymentEnabled ? colors.white : colors.white}
              ios_backgroundColor={colors.secondary}
              onValueChange={toggleSwitch}
              value={isScheduledPaymentEnabled}
            />
          </View>

          <View style={styles.fastCashOutContainer}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={styles.fastCashOutTitle}>Fast Cash Out</Text>
            <Text style={styles.fastCashOutFee}>Instant fee: $1.90</Text>
            </View>
            <Text style={styles.fastCashOutSubtitle}>Available in minutes to 1 day.</Text>
          </View>
        </View>

      </ScrollView>

      {/* Modal for Date Range Selection */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Date Range</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.closeIcon} source={require('../assets/closeIcon.webp')} />
        </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <ScrollView style={styles.dateRangeList}>
              {earningsData.map((item, index) => (
                <View key={index} style={styles.dateRangeItemContainer}>
                  <TouchableOpacity
                    style={styles.dateRangeItem}
                    onPress={() => handleDateRangeSelect(item.dateRange, item.amount)}
                  >
                    <Text style={styles.dateRangeText}>{item.dateRange}</Text>
                    <Text style={styles.dateRangeAmount}>{item.amount}</Text>
                  </TouchableOpacity>
                  {index < earningsData.length - 1 && <View style={styles.dottedLine2} />}
                </View>
              ))}
            </ScrollView>
            
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  dateRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: dimensions.paddingLevel3,
  },
  dateRangeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: dimensions.paddingLevel2,
    backgroundColor: colors.white,
  },
  dateRangeText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.secondary,
    marginRight: 5,
  },
  downArrowIcon: {
    width: 12,
    height: 12,
  },
  totalEarnings: {
    fontSize: fontSizes.fontXLarge,
    fontWeight: '700',
    color: colors.black,
  },
  chartContainer: {
    marginTop: 20,
  },
  barChart: {
    height: 200,
  },
  xAxisContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    position: 'relative',
  },
  xAxis: {
    height: 20,
  },
  dateLabelsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: -10, // Adjust this margin based on your needs
  },
  dateLabelContainer: {
    alignItems: 'center',
    flex: 1,
  },
  dateLabel: {
    fontSize: 10,
    color: 'black',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: dimensions.paddingLevel4,
  },
  text1: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.black,
  },
  icon: {
    width: 18,
    height: 18,
  },
  orderSummary: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    margin: dimensions.paddingLevel3,
    marginTop: 0,
  },
  orderSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical:5,
    borderColor: "lightgray",
  },
  borderBottom: {
    borderWidth: 1,
    borderColor: "gray",
  },
  orderSummaryText: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.black,
    padding: dimensions.paddingLevel3,
    fontWeight: '500',
  },
  orderDetail: {
    padding: dimensions.paddingLevel3,
    marginTop: "-5%"
  },
  orderCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: dimensions.paddingLevel3,
    marginVertical: 7,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  orderInfoRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  orderNumber: {
    fontSize: fontSizes.fontMidMedium,
    fontWeight: '700',
    color: colors.black,
  },
  orderDate: {
    fontSize: fontSizes.fontMedium,
    color: colors.secondary,
    marginLeft:12
  },
  orderInfo: {
    fontSize: fontSizes.fontMedium,
    color:colors.secondary,
  },
  orderPrice: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.primary,
  },
  downloadButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop:'5%',
    padding: dimensions.paddingLevel2,
    alignItems: 'center',
    flexGrow: 1,   // Allow the button to grow and take available space
    flexShrink: 1, // Allow the button to shrink if necessary
  },
  downloadButtonText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
  },
  icon2: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginTop:15,
    resizeMode: 'contain',
  },
  transferSummary: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    margin: dimensions.paddingLevel3,
  },
  transferSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: "lightgray",
    padding: dimensions.paddingLevel3,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  transferIconContainer: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius:7,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: dimensions.paddingLevel3,
  },
  transferIcon: {
    width: 35,
    height: 35,
  },
  transferTextContainer: {
    flex: 1,
  },
  transferTitle: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
    color: colors.black,
  },
  transferSubtitle: {
    fontSize: fontSizes.fontMedium,
    color: colors.secondary,
  },
  paymentContainer: {
    backgroundColor: colors.black,
    borderRadius: 15,
    margin: dimensions.paddingLevel3,
  },
  schedulePaymentContainer: {
    paddingBottom: dimensions.paddingLevel5,
    alignItems:"center",
    padding: dimensions.paddingLevel4,
  },
  schedulePaymentTitle: {
    fontSize: fontSizes.fontXLarge,
    fontWeight: '700',
    color: colors.white,
  },
  schedulePaymentSubtitle: {
    fontSize: fontSizes.fontMidMedium,
    textAlign:"center",
    color: colors.white,
    marginVertical: 15,
  },
  fastCashOutContainer: {
    padding: dimensions.paddingLevel3,
  },
  fastCashOutTitle: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.white,
  },
  fastCashOutSubtitle: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.secondary,
    marginVertical: 5,
  },
  fastCashOutFee: {
    fontSize: fontSizes.fontMidMedium,
    color: colors.white,
    fontWeight:'400'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
  //  alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   // marginBottom: 20,
    padding:10
  },
  modalTitle: {
    fontSize: fontSizes.fontLarge,
    fontWeight: 'bold',
    marginBottom: 10,
    color:colors.black
  },
  dateRangeList: {
    width: '100%',
    maxHeight: 300,
  },
  dateRangeItem: {
    padding: 15,
   // borderBottomWidth: 1,
   // borderBottomColor: colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateRangeText: {
    fontSize: fontSizes.fontMidMedium,
    color:colors.secondary
  },
  dateRangeAmount: {
    fontSize: fontSizes.fontMidMedium,
   // fontWeight: 'bold',
    color:colors.secondary
  },
 
  closeIcon: {
    width: 13,
    height: 13,
  },
  dottedLine2:{
    borderBottomWidth: 1,
   borderColor: 'lightgray',
     borderStyle: 'dashed',  
     marginBottom:5
  },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
    marginBottom:8
   // flex: 1,
  },
  
});



