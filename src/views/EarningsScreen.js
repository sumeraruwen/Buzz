import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import { colors, dimensions, fontSizes, imageSizes } from '../styles/constants';
import MainHeaderComponent from '../components/MainHeaderComponent';

export default function EarningsScreen() {
  const data = [10, 20, 60, 40, 30, 80, 50]; // Example data
  const [isScheduledPaymentEnabled, setIsScheduledPaymentEnabled] = React.useState(false);

  const [showCompletedOrder, setShowCompletedOrder] = React.useState(true);
  const [showOrderDetail, setShowOrderDetail] = React.useState(true);
  const [showDepositsAndTransfer, setShowDepositsAndTransfer] = React.useState(true);

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
        <View style={{ height: 200, padding: 20 }}>
          <BarChart
            style={{ height: 150 }}
            data={data}
            svg={{ fill: colors.primary }} // Customize the bar color
            contentInset={{ top: 30, bottom: 30 }}
          >
            <Grid />
          </BarChart>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
   // marginTop:-8
  },
  orderPrice: {
    fontSize: fontSizes.fontLarge,
    fontWeight: '700',
    color: colors.primary,
  },
  downloadButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    //margin: dimensions.paddingLevel3,
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
    resizeMode: 'contain',  // Ensure the icon scales properly within its container
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
    //padding: dimensions.paddingLevel3,
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
});

