// import React, { useState } from 'react';
// import {
//   View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal,
// } from 'react-native';
// import HeaderComponent from '../components/HeaderComponent';
// import { colors, dimensions, fontSizes } from '../styles/constants';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

// export default function PickupTaskScreen() {
//   const [photoUri, setPhotoUri] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handlePhotoUpload = () => {
//     setModalVisible(true);
//   };

//   const selectFromGallery = () => {
//     const options = {
//       mediaType: 'photo',
//     };
//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const uri = response.assets?.[0]?.uri;
//         if (uri) {
//           setPhotoUri(uri);
//         }
//         setModalVisible(false);
//       }
//     }).catch((error) => {
//       console.log('ImagePicker Error: ', error);
//     });
//   };

//   const capturePhoto = () => {
//     const options = {
//       mediaType: 'photo',
//     };
//     launchCamera(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const uri = response.assets?.[0]?.uri;
//         if (uri) {
//           setPhotoUri(uri);
//         }
//         setModalVisible(false);
//       }
//     }).catch((error) => {
//       console.log('ImagePicker Error: ', error);
//     });
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: colors.white }}>
//       <HeaderComponent title="Pick Up Task" />
//       <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//         <View style={styles.orderRow}>
//           <Text style={styles.titleText}>Order #7162533</Text>
//           <Image style={styles.iIcon} source={require('../assets/iIcon.webp')} />
//         </View>
//         <View style={styles.dottedLine} />

//         <View style={styles.row2}>
//           <Image style={styles.addressIcon} source={require('../assets/addressIcon.webp')} />
//           <Text style={styles.addressText}>
//             10750 Saint Charles Rock{'\n'}
//             Road Saint Ann, MO 63074, US
//           </Text>
//         </View>
//         <View style={styles.row3}>
//         <View style={styles.row5}>
//           <Image style={styles.directionIcon} source={require('../assets/directionIcon.webp')} />
//           <Text style={{fontSize:fontSizes.fontMidMedium,marginLeft:5}}>Direction</Text>
//           </View>
//           <View style={styles.row4}>
//             <Image style={styles.callIcon} source={require('../assets/messageIcon.webp')} />
//             <Image style={styles.callIcon} source={require('../assets/callIcon.webp')} />
//           </View>
//         </View>
//         <View style={styles.dottedLine} />

//         <View style={styles.row2}>
//           <Image style={styles.addressIcon} source={require('../assets/messageIcon2.webp')} />
//           <Text style={styles.subTitleText}>Pick-Up Instruction</Text>
//         </View>
//         <Text style={styles.subText}>
//         Come in to front store entrance and say you’re here for “A My Deliver”...
//         </Text>
//         <View style={styles.dottedLine} />

//         <Text style={styles.repText}>Rep. Name</Text>
//         <View style={styles.input}>
//         <Text style={styles.nameText}>John Doe</Text>
//         </View>
//         <View style={styles.dottedLine} />

//         <View style={styles.input}>
//         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
//         <Text style={styles.nameText}>Select Drop-Off Status</Text>
//         <Image style={styles.arrowIcon} source={require('../assets/rightArrow.webp')} />
//         </View>
//         </View>

//         <View style={styles.input}>
//             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
//             <Text style={styles.nameText}>Extra Charge and Time</Text>
//             <Image style={styles.arrowIcon} source={require('../assets/rightArrow.webp')} />
//             </View>
//         </View>

//         <View style={styles.dottedLine} />

//         <Text style={styles.repText}>Rep. Signature</Text>
//         <View style={styles.signatureBox}>
//           {/* Placeholder for signature */}
//         </View>
//         <View style={styles.dottedLine} />

//         <Text style={styles.repText}>Photo</Text>
//         <TouchableOpacity style={styles.photoBox} onPress={handlePhotoUpload}>
//           {photoUri ? (
//             <Image source={{ uri: photoUri }} style={styles.uploadedPhoto} />
//           ) : (
//             <Text style={styles.photoText}>Click here to upload photo</Text>
//           )}
//         </TouchableOpacity>
//         <View style={styles.dottedLine} />

//         <TouchableOpacity style={styles.confirmButton}>
//           <Text style={styles.confirmButtonText}>Confirm Pick-up</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       <Modal
//         animationType="none"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//               <Text style={styles.modalText}>Upload Delivery Photo</Text>
//               <Image style={styles.arrowIcon} source={require('../assets/closeIcon.webp')} />
//             </View>
          
//             <TouchableOpacity  onPress={selectFromGallery}>
//             <Image style={styles.arrowIcon} source={require('../assets/galleryIcon.webp')} />
//               <Text style={styles.textStyle}>Upload From Photos</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={capturePhoto}>
//             <Image style={styles.arrowIcon} source={require('../assets/cameraIcon.webp')} />
//               <Text style={styles.textStyle}>Capture Photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.modalButton, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.white,
//   },
//   scrollViewContainer: {
//     padding: dimensions.paddingLevel3,
//   },
//   orderRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: '5%',
//   },
//   titleText: {
//     fontSize: fontSizes.fontLarge,
//     fontWeight: '700',
//     color: colors.black,
//   },
//   iIcon: {
//     width: 18,
//     height: 18,
//   },
//   dottedLine: {
//     borderBottomWidth: 1.5,
//     borderColor: 'lightgray',
//     borderStyle: 'dashed',
//     marginVertical: 15,
//   },
//   row2: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginTop: '5%',
//   },
//   addressText: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '400',
//     color: colors.black,
//     marginLeft:15,
//     lineHeight:24
//   },
//   addressIcon: {
//     width: 28,
//     height: 28,
//   },
//   callIcon: {
//     width: 40,
//     height: 40,
//     marginLeft:15
//   },
//   row3: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop:'7%'
//   },
//   row4: {
//     flexDirection: 'row',
//   },
//   row5: {
//     flexDirection: 'row',
//     height: dimensions.heightLevel3,
//     width:dimensions.widthLevel14,
//     borderColor: "lightgray",
//     borderWidth: 1,
//     borderRadius: 30,
//     justifyContent:'center',
//     alignItems:'center',
//     marginLeft:'5%'
//   },
//   directionIcon:{
//     width: 20,
//     height:20,
//   },
//   subTitleText: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '700',
//     color: colors.black,
//     marginLeft:15,
   
//   },
//   subText: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '400',
//     color: colors.secondary,
//     marginLeft:'11%',
//     margin:10,
//     lineHeight:24
//   },
//   repText: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '700',
//     color: colors.black,
//     marginTop: '2%',
//   },
//   nameText: {
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '600',
//     color: colors.black,
  
//   },
//   input: {
//     height: dimensions.heightLevel4,
//     borderColor: "lightgray",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: dimensions.paddingLevel2,
//     marginTop: '5%',
//     marginBottom:5,
//     justifyContent:'center'
//   },
//   signatureBox: {
//     height: 180,
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     borderRadius: 10,
//     marginVertical: 20,
//   },
//   photoBox: {
//     height: 180,
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   photoText: {
//     color: 'lightgray',
//     fontSize:fontSizes.fontMediumPlus
//   },
//   uploadedPhoto: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 5,
//   },
//   confirmButton: {
//     backgroundColor: colors.primary,
//     borderRadius: 10,
//     padding: 15,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   confirmButtonText: {
//     color: colors.white,
//     fontSize: fontSizes.fontMediumPlus,
//     fontWeight: '600',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     paddingHorizontal: dimensions.paddingLevel9,
//     paddingVertical:dimensions.paddingLevel3,
//    // alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalButton: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     backgroundColor: '#2196F3',
//     marginVertical: 5,
//   },
//   buttonClose: {
//     backgroundColor: '#f44336',
//   },
//   textStyle: {
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//    // textAlign: 'center',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   arrowIcon: {
//     width: 17,
//     height: 17,
//     justifyContent:'center'
//   },
// });


import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import { colors, dimensions, fontSizes } from '../styles/constants';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

export default function PickupTaskScreen() {
  const [photoUri, setPhotoUri] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
        <Text style={styles.subText}>
          Come in to front store entrance and say you’re here for “A My Deliver”...
        </Text>
        <View style={styles.dottedLine} />

        <Text style={styles.repText}>Rep. Name</Text>
        <View style={styles.input}>
          <Text style={styles.nameText}>John Doe</Text>
        </View>
        <View style={styles.dottedLine} />

        <View style={styles.input}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.nameText}>Select Drop-Off Status</Text>
            <Image style={styles.arrowIcon} source={require('../assets/rightArrow.webp')} />
          </View>
        </View>

        <View style={styles.input}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.nameText}>Extra Charge and Time</Text>
            <Image style={styles.arrowIcon} source={require('../assets/rightArrow.webp')} />
          </View>
        </View>

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

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Pick-up</Text>
        </TouchableOpacity>
      </ScrollView>

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
    width:dimensions.widthLevel4,
    height:dimensions.heightLevel13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    color:colors.black
    
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
   // justifyContent:'center',
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
  // dottedLine: {
  //   borderBottomWidth: 1,
  //   borderColor: 'lightgray',
  //   borderStyle: 'dashed',
  //   marginVertical: 15,
  // },
  line: {
    height: 1,
    backgroundColor: 'lightgray',
   // flex: 1,
  },
});
