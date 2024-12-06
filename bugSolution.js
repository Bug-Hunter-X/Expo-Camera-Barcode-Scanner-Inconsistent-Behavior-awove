// bugSolution.js
import * as React from 'react';
import { Camera, BarCodeScanner } from 'expo-camera';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData(data);
    // Additional logic to improve reliability: use multiple scans, average coordinates etc. 
    // Vibrate the device, confirm scan with multiple reads, implement a timeout etc.
  };

  if (hasPermission === null) {
    return <View><Text>Requesting camera permissions</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true}/>
      <Camera
        style={StyleSheet.absoluteFillObject}
        type={cameraType}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <View style={styles.scanBox}>
           {/* Additional visual cues to guide users. */}
          </View>
        </View>
      </Camera>
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>
      )}
      {barcodeData && (
        <Text>{barcodeData}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scanBox:{
    borderWidth:2,
    borderColor:'green',
    width:200,
    height:200,
    alignSelf: 'center',
    marginTop:100
  }
});
export default App; 