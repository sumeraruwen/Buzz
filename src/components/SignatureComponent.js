// // SignatureComponent.js
// import React, { useRef, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import SignatureScreen from 'react-native-signature-canvas';

// export default function SignatureComponent({ onSave }) {
//   const [signature, setSignature] = useState(null);
//   const signatureRef = useRef(null);

//   const handleSignatureOK = (signatureData) => {
//     setSignature(signatureData);
//     onSave(signatureData);
//   };

//   const handleSignatureClear = () => {
//     signatureRef.current.clearSignature();
//     setSignature(null);
//   };

//   const handleSignatureEmpty = () => {
//     console.log('Signature pad is empty');
//   };

//   return (
//     <View>
//       <Text style={styles.label}>Customer Signature</Text>
//       <SignatureScreen
//         ref={signatureRef}
//         onOK={handleSignatureOK}
//         onEmpty={handleSignatureEmpty}
//         autoClear={false}
//         descriptionText="Sign here"
//         clearText="Clear"
//         confirmText="Save"
//         webStyle={`.m-signature-pad--footer { display: none; }`}
//       />
//       {signature && (
//         <TouchableOpacity onPress={handleSignatureClear}>
//           <Text style={styles.clearSignatureText}>Clear Signature</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   clearSignatureText: {
//     color: 'red',
//     marginVertical: 5,
//   },
// });
