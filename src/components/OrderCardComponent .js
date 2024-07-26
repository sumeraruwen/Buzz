import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, dimensions, fontSizes, imageSizes } from '../styles/constants';


const OrderCardComponent = ({ order }) => {

  const [showDetails, setShowDetails] = useState(true);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };


  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.orderNumber}>Order #{order.number}</Text>
        <Text style={styles.date}>{order.date}</Text>
        <View style={[styles.statusBadge, { backgroundColor: order.statusColor }]}>
          <Text style={[styles.statusText, {color:order.textColor}]}>{order.status}</Text>
        </View>
      </View>
      <View style={styles.cardMidTitle}>
        <View style={styles.detailsText}>
          <Text style={styles.text3}>120 ml • </Text>
          <Text style={styles.text3}>1 hr 12 min • </Text>
          <Text style={styles.text3}>Delivery</Text>
        </View>
        <TouchableOpacity onPress={toggleDetails}>
        <Image
            source={showDetails ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')}
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>
      </View>
      {showDetails && (
         
        <View style={styles.cardBody}>
          <View style={styles.line} />
          <View style={styles.userInfo}>
            <Image style={styles.userImage} source={{ uri: order.userImage }} />
            <Text style={styles.username}>{order.username}</Text>
            <Image style={styles.groupIcon} source={require('../assets/GIcon.webp')} />
          </View>
          <View style={styles.orderDetails}>
            <View style={styles.line} />

           <View style={styles.detailRow}>
              <Text style={styles.text1}>Type</Text>
              <Text style={styles.text2}>{order.type}</Text>
            </View>
            <View style={styles.dottedLine} />

            <View style={styles.detailRow}>
              <Text style={styles.text1}>Category</Text>
              <Text style={styles.text2}>{order.category}</Text>
            </View>
            <View style={styles.dottedLine} />

            <View style={styles.detailRow}>
              <Text style={styles.text1}>From</Text>
              <Text style={styles.text2}>{order.from}</Text>
            </View>
            <View style={styles.dottedLine} />

            <View style={styles.detailRow}>
              <Text style={styles.text1}>To</Text>
              <Text style={styles.text2}>{order.to}</Text>
            </View>
            <View style={styles.dottedLine} />

            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View style={styles.detailRow}>
              <Text style={styles.text3}>Total Distance: </Text>
              <Text style={styles.text3}>{order.distance}</Text>
            </View>
           

            <View style={styles.detailRow}>
              <Text style={styles.text3}>Total Time: </Text>
              <Text style={styles.text3}>{order.time}</Text>
            </View>
            </View>
            <View style={styles.line} />
          
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View style={styles.detailRow}>
              <Text style={styles.text1}>Cost: </Text>
              <Text style={styles.text2}>${order.cost}</Text>
            </View>
            
            <View style={styles.dottedLine} />

            <View style={styles.detailRow}>
              <Text style={styles.text1}>Extra Charge/Tip: </Text>
              <Text style={styles.text2}>${order.extraCharge}</Text>
            </View>
            </View>
          

            <View style={{flexDirection:"row", marginTop:10}}>
              <Text style={styles.text1}>Total Cost: </Text>
              <Text style={styles.text2}>${order.totalCost}</Text>
            </View>

          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: dimensions.paddingLevel3,
    marginVertical: dimensions.paddingLevel2,
    marginHorizontal: '5%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderNumber: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: 'bold',
    color: colors.black,
  },
  date: {
    fontSize: fontSizes.fontMedium,
    color: colors.black,
  },
  statusBadge: {
    paddingHorizontal: dimensions.paddingLevel2,
    paddingVertical: dimensions.paddingLevel1,
    borderRadius: 5,
  },
  statusText: {
    fontSize: fontSizes.fontMedium,
    fontWeight: '700',
   
  },
  cardMidTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    
   
  },
  detailsText: {
    flexDirection: 'row',
    color: colors.primary,
  },
   
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
   // marginTop:-5,
    marginVertical: 20,
  },
  cardBody: {
    marginTop: dimensions.paddingLevel1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    ...imageSizes.mediumImage,
    borderRadius: 11,
  },
  username: {
    flex: 1,
    marginLeft: dimensions.paddingLevel2,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: 'bold',
    color: colors.black,
  },
  groupIcon: {
    width: 22,
    height: 35,
  },
  orderDetails: {
  //  marginTop: dimensions.paddingLevel,
  },
  text1:{
    color: colors.secondary,
    fontSize: fontSizes.fontMidMedium,
  //  fontWeight: 'bold',

  },
  text2:{
    color: colors.black,
    fontSize: fontSizes.fontMidMedium,
    fontWeight: '500',
  },
  text3:{
    color: colors.secondary,
    fontSize: fontSizes.fontMedium,
  //  fontWeight: 'bold',

  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: 15,
   // marginTop:10
  },
  downloadButton: {
    backgroundColor: colors.primary,
    borderRadius: 7,
    padding: dimensions.paddingLevel2,
    alignItems: 'center',
    marginTop: dimensions.paddingLevel4,
  },
  downloadText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
  },
});

export default OrderCardComponent;
