import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, Switch, TextInput
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import { colors, dimensions, fontSizes } from '../styles/constants';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

export default function PickupTaskScreen() {
  const [photoUri, setPhotoUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [textExpanded, setTextExpanded] = useState(false); // State to manage the text expansion
  const [statusModalVisible, setStatusModalVisible] = useState(false); // New state for status modal
  const [status, setStatus] = useState(''); // New state to track selected status
  const [reasons, setReasons] = useState(''); // State for reason input
  const [isDelayedExpanded, setIsDelayedExpanded] = useState(false);
  const [isFailedExpanded, setIsFailedExpanded] = useState(false);
  const [extraChargeModalVisible, setExtraChargeModalVisible] = useState(false);
  const [extraChargeTip, setExtraChargeTip] = useState(false); // For the switch
  const [extraChargeAmount, setExtraChargeAmount] = useState('');
  const [dateExtension, setDateExtension] = useState('');
  const [description, setDescription] = useState('');
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);


  const handlePhotoUpload = () => {
    setModalVisible(true);
  };

  const selectFromGallery = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setPhotoUri(uri);
        }
        setModalVisible(false);
      }
    }).catch((error) => {
      console.log('ImagePicker Error: ', error);
    });
  };

  const toggleTextExpansion = () => {
    setTextExpanded(!textExpanded);
  };

  const toggleStatusModal = () => {
    setStatusModalVisible(!statusModalVisible);
  };

  // const handleStatusChange = (selectedStatus) => {
  //   setStatus(selectedStatus);
  //   if (selectedStatus !== 'Success') {
  //     setReasons('');
  //   }
  // };

  const capturePhoto = () => {
    const options = {
      mediaType: 'photo',
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          setPhotoUri(uri);
        }
        setModalVisible(false);
      }
    }).catch((error) => {
      console.log('ImagePicker Error: ', error);
    });
  };

  const handleStatusChange = (selectedStatus) => {
    setStatus(selectedStatus);
    if (selectedStatus === 'Delayed') {
      setIsDelayedExpanded(true);
      setIsFailedExpanded(false);
    } else if (selectedStatus === 'Failed') {
      setIsDelayedExpanded(false);
      setIsFailedExpanded(true);
    } else {
      setIsDelayedExpanded(false);
      setIsFailedExpanded(false);
    }
    setReasons(''); // Clear reasons when switching status
    toggleStatusModal(); // Close the modal after selecting a status
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <HeaderComponent title="Pick Up Task" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.orderRow}>
          <Text style={styles.titleText}>Order #7162533</Text>
          <Image style={styles.iIcon} source={require('../assets/iIcon.webp')} />
        </View>
        <View style={styles.dottedLine} />

        <View style={styles.row2}>
          <Image style={styles.addressIcon} source={require('../assets/addressIcon.webp')} />
          <Text style={styles.addressText}>
            10750 Saint Charles Rock{'\n'}
            Road Saint Ann, MO 63074, US
          </Text>
        </View>
        <View style={styles.row3}>
          <View style={styles.row5}>
            <Image style={styles.directionIcon} source={require('../assets/directionIcon.webp')} />
            <Text style={{fontSize:fontSizes.fontMidMedium,marginLeft:5}}>Direction</Text>
          </View>
          <View style={styles.row4}>
            <Image style={styles.callIcon} source={require('../assets/messageIcon.webp')} />
            <Image style={styles.callIcon} source={require('../assets/callIcon.webp')} />
          </View>
        </View>
        <View style={styles.dottedLine} />

        <View style={styles.row2}>
          <Image style={styles.addressIcon} source={require('../assets/messageIcon2.webp')} />
          <Text style={styles.subTitleText}>Pick-Up Instruction</Text>
        </View>

        {/* <Text style={styles.subText}>
          Come in to front store entrance and say you’re here for “A My Deliver”...
        </Text> */}
         {/* Toggle the text based on the state */}
         <TouchableOpacity onPress={toggleTextExpansion}>
          <Text style={styles.subText}>
            Come in to front store entrance and say you’re here for “A My Deliver”...
            {textExpanded && '\nPlease also make sure to check the order number with the store representative, and ensure the package is securely sealed before leaving the premises.'}
          </Text>
          {/* <Text style={styles.showMoreText}>
            {textExpanded ? 'Show Less' : 'Show More'}
          </Text> */}
        </TouchableOpacity>

        <View style={styles.dottedLine} />

        <Text style={styles.repText}>Rep. Name</Text>
        <View style={styles.input}>
          <Text style={styles.nameText}>John Doe</Text>
        </View>
        <View style={styles.dottedLine} />

        <View style={styles.input}>
        {!status && (

            <TouchableOpacity onPress={toggleStatusModal}>
              <View style={styles.statusRow}>
                <Text style={styles.nameText}>Select Drop-Off Status</Text>
                <Image style={styles.arrowIcon} source={require('../assets/rightArrow.webp')} />
              </View>
            </TouchableOpacity>

        )}

        {status && (
          <TouchableOpacity onPress={toggleStatusModal} style={styles.selectedStatusContainer}>
            <View style={styles.statusRow}>
              <Switch
                value={true}
                trackColor={{ false: 'lightgray', true: status === 'Success' ? colors.success : status === 'Delayed' ? 'gray' : colors.failed }}
                thumbColor={status === 'Success' ? colors.success : status === 'Delayed' ? 'gray' : colors.failed}
              />
              <Text style={styles.switchLabel}>{status}</Text>
              <Image style={styles.arrowIcon} source={require('../assets/rightArrow.webp')} />
            </View>
          </TouchableOpacity>
        )}
        </View>

        {/* <View style={styles.input}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.nameText}>Extra Charge and Time</Text>
            <Image style={styles.arrowIcon} source={require('../assets/rightArrow.webp')} />
          </View>
        </View> */}
        <TouchableOpacity
  style={styles.input}
  onPress={() => setExtraChargeModalVisible(true)}
>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Text style={styles.nameText}>Extra Charge and Time</Text>
    <Image style={styles.arrowIcon} source={require('../assets/rightArrow.webp')} />
  </View>
</TouchableOpacity>


        <View style={styles.dottedLine} />

        <Text style={styles.repText}>Rep. Signature</Text>
        <View style={styles.signatureBox}>
          {/* Placeholder for signature */}
        </View>
        <View style={styles.dottedLine} />

        <Text style={styles.repText}>Photo</Text>
        <TouchableOpacity style={styles.photoBox} onPress={handlePhotoUpload}>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.uploadedPhoto} />
          ) : (
            <Text style={styles.photoText}>Click here to upload photo</Text>
          )}
        </TouchableOpacity>
        <View style={styles.dottedLine} />

        <TouchableOpacity style={styles.confirmButton} onPress={() => setConfirmModalVisible(true)}>
          <Text style={styles.confirmButtonText}>Confirm Pick-up</Text>
        </TouchableOpacity>
      </ScrollView>

     {/* Status Modal */}
     <Modal
        animationType="none"
        transparent={true}
        visible={statusModalVisible}
        onRequestClose={toggleStatusModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Pick-Up Status Option</Text>
              <TouchableOpacity onPress={toggleStatusModal}>
                <Image style={styles.closeIcon} source={require('../assets/closeIcon.webp')} />
              </TouchableOpacity>
            </View>

            <View style={styles.line} />

            {/* Success Switch */}
            <View style={styles.switchContainer}>
              <Switch
                value={status === 'Success'}
                onValueChange={() => handleStatusChange('Success')}
                trackColor={{ false: 'lightgray', true: colors.success }}
                thumbColor={status === 'Success' ? colors.success : 'gray'}
              />
              <Text style={styles.switchLabel}>Success</Text>
            </View>

            {/* Delayed Switch */}
            <View style={styles.switchContainer}>
              <View style={styles.statusRow}>
                <Switch
                  value={status === 'Delayed'}
                  onValueChange={() => handleStatusChange('Delayed')}
                  trackColor={{ false: 'lightgray', true: 'gray' }}
                  thumbColor={status === 'Delayed' ? 'gray' : 'lightgray'}
                />
                <Text style={styles.switchLabel}>Delayed</Text>
                <TouchableOpacity onPress={() => setIsDelayedExpanded(!isDelayedExpanded)}>
                  <Image
                    style={styles.arrowIcon}
                    source={isDelayedExpanded ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {isDelayedExpanded && (
              <TextInput
                style={styles.reasonInput}
                placeholder="Reasons for delay"
                value={reasons}
                onChangeText={setReasons}
              />
            )}

            {/* Failed Switch */}
            <View style={styles.switchContainer}>
              <View style={styles.statusRow}>
                <Switch
                  value={status === 'Failed'}
                  onValueChange={() => handleStatusChange('Failed')}
                  trackColor={{ false: 'lightgray', true: colors.failed }}
                  thumbColor={status === 'Failed' ? colors.failed : 'gray'}
                />
                <Text style={styles.switchLabel}>Failed</Text>
                <TouchableOpacity onPress={() => setIsFailedExpanded(!isFailedExpanded)}>
                  <Image
                    style={styles.arrowIcon}
                    source={isFailedExpanded ? require('../assets/upArrow.webp') : require('../assets/downArrow.webp')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {isFailedExpanded && (
              <TextInput
                style={styles.reasonInput}
                placeholder="Reasons for failure"
                value={reasons}
                onChangeText={setReasons}
              />
            )}

            <TouchableOpacity style={styles.submitButton} onPress={toggleStatusModal}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
  animationType="none"
  transparent={true}
  visible={extraChargeModalVisible}
  onRequestClose={() => setExtraChargeModalVisible(!extraChargeModalVisible)}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalText}>Request</Text>
        <TouchableOpacity onPress={() => setExtraChargeModalVisible(!extraChargeModalVisible)}>
          <Image style={styles.closeIcon} source={require('../assets/closeIcon.webp')} />
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Extra Charge/Tip</Text>
        <Switch
          value={extraChargeTip}
          onValueChange={setExtraChargeTip}
          trackColor={{ false: 'lightgray', true: 'green' }}
          thumbColor={extraChargeTip ? 'green' : 'gray'}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="$"
        keyboardType="numeric"
        value={extraChargeAmount}
        onChangeText={setExtraChargeAmount}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Date Extension</Text>
        <Switch
          value={!!dateExtension}
          onValueChange={() => setDateExtension(dateExtension ? '' : new Date().toLocaleDateString())}
          trackColor={{ false: 'lightgray', true: 'green' }}
          thumbColor={dateExtension ? 'green' : 'gray'}
        />
      </View>

      <Text style={styles.switchLabel}>Extra Charge/Tip</Text>
      {dateExtension && (
        <TextInput
          style={styles.input}
          placeholder="MM-DD-YY"
          value={dateExtension}
          onChangeText={setDateExtension}
        />
      )}

      <Text style={{fontSize: fontSizes.fontMediumPlus, padding: dimensions.paddingLevel3,color:colors.black,fontWeight:'600',}}>Description</Text>
      <TextInput
        style={styles.reasonInput}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>

      <TouchableOpacity style={styles.cancelButton} onPress={() => setExtraChargeModalVisible(false)}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={() => setExtraChargeModalVisible(false)}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      </View>
    </View>
  </View>
</Modal>

          <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalText}>Upload Delivery Photo</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image style={styles.closeIcon} source={require('../assets/closeIcon.webp')} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={{justifyContent:'center'}}>
      <TouchableOpacity style={styles.modalOption} onPress={selectFromGallery}>
        <Image style={styles.icon} source={require('../assets/galleryIcon.webp')} />
        <Text style={styles.textStyle}>Upload From Photos</Text>
      </TouchableOpacity>
      
      <View style={styles.dottedLine2} />
      <TouchableOpacity style={styles.modalOption} onPress={capturePhoto}>
        <Image style={styles.icon} source={require('../assets/cameraIcon.webp')} />
        <Text style={styles.textStyle}>Capture Photo</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

<Modal
  animationType="none"
  transparent={true}
  visible={confirmModalVisible}
  onRequestClose={() => setConfirmModalVisible(!confirmModalVisible)}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText2}>Do you want to drop-off using Route manager?</Text>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
      
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            // Add your confirm pick-up logic here
            setConfirmModalVisible(false);
          }}
        >
          <Text style={styles.submitButtonText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => setConfirmModalVisible(false)}
        >
          <Text style={styles.cancelButtonText}>No Drop-Off Now</Text>
        </TouchableOpacity>

      </View>
    </View>
  </View>
</Modal>

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
  orderRow: {
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
  iIcon: {
    width: 18,
    height: 18,
  },
  dottedLine: {
    borderBottomWidth: 1.5,
    borderColor: 'lightgray',
    borderStyle: 'dashed',
    marginVertical: 15,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '5%',
  },
  addressText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '400',
    color: colors.black,
    marginLeft: 15,
    lineHeight: 24,
  },
  addressIcon: {
    width: 28,
    height: 28,
  },
    arrowIcon: {
    width: 17,
    height: 17,
    justifyContent:'center'
  },
  callIcon: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '7%',
  },
  row4: {
    flexDirection: 'row',
  },
  row5: {
    flexDirection: 'row',
    height: dimensions.heightLevel3,
    width: dimensions.widthLevel14,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },
  directionIcon: {
    width: 20,
    height: 20,
  },
  subTitleText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.black,
    marginLeft: 15,
  },
  subText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '400',
    color: colors.secondary,
    marginLeft: '11%',
    margin: 10,
    lineHeight: 24,
  },
  repText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color: colors.black,
    marginTop: '2%',
  },
  nameText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
    color: colors.black,
  },
  input: {
    height: dimensions.heightLevel4,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: dimensions.paddingLevel2,
    marginTop: '5%',
    marginBottom: 5,
   // margin:10,
    justifyContent: 'center',
  },
  signatureBox: {
    height: 180,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    marginVertical: 20,
  },
  photoBox: {
    height: 180,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  photoText: {
    color: 'lightgray',
    fontSize: fontSizes.fontMediumPlus,
  },
  uploadedPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
   // margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
   //  width:dimensions.widthLevel3,
    // height:dimensions.heightLevel13,
    width: 320,
    padding: dimensions.paddingLevel1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:'center'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   // marginBottom: 20,
    padding:20
  },
  modalText: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '700',
    color:colors.black,
    
  },
  modalText2: {
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '500',
    color:colors.black,
    paddingHorizontal:15,
    paddingTop:10
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:dimensions.paddingLevel3,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dottedLine2:{
    borderBottomWidth: 1,
   borderColor: 'lightgray',
     borderStyle: 'dashed',
  },

  line: {
    height: 1,
    backgroundColor: 'lightgray',
   // flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  statusModalView: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: dimensions.widthLevel4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // modalHeader: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
  // modalText: {
  //   fontSize: fontSizes.fontMediumPlus,
  //   fontWeight: '700',
  // },
  closeIcon: {
    width: 15,
    height: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align the text and arrow to opposite ends
    marginBottom: 15,
    padding:dimensions.paddingLevel1,
    marginTop:2
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align the switch and text to the left, arrow to the right
  },
  switchLabel: {
    fontSize: fontSizes.fontMediumPlus,
    marginLeft: 10,
    color:colors.black,
    fontWeight:'600',
    flex: 1, // Take up remaining space between switch and arrow
   
  },
  arrowIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  reasonInput: {
    height: dimensions.heightLevel9,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    //paddingHorizontal: 55,
    margin: 10,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    paddingHorizontal:25,
    margin:10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor:"lightgray",
    borderRadius: 8,
    padding: 10,
    paddingHorizontal:20,
    margin:10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '500',
  },
  cancelButtonText: {
    color: colors.secondary,
    fontSize: fontSizes.fontMediumPlus,
    fontWeight: '500',
  },
  extraChargeModalView: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 320,
    padding: dimensions.paddingLevel3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
});


