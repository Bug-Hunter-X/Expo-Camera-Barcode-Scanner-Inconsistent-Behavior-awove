# Expo Camera Barcode Scanner Inconsistency

This repository demonstrates a bug in Expo's Camera API where the barcode scanning functionality is unreliable. The `onBarCodeScanned` callback often fails to trigger, especially under less-than-ideal conditions (poor lighting, barcode not perfectly centered).

## Bug Description

The issue lies in the inconsistency of the `onBarCodeScanned` function within Expo's Camera API. While it generally functions correctly, it frequently fails to detect barcodes, particularly when the barcode isn't centrally positioned or the lighting conditions are suboptimal.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run the app using Expo Go or a similar method.
4. Point the camera at various barcodes, paying attention to different angles and lighting conditions.
5. Observe the inconsistent triggering of the `onBarCodeScanned` callback.

## Solution

The provided solution file `bugSolution.js` attempts to mitigate this issue by implementing techniques to improve barcode detection reliability. These improvements may not be foolproof, but they aim to address this inconsistency in barcode recognition.