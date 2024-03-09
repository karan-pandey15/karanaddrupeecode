import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {WebView} from 'react-native-webview';
const Knowledge = () => {
  const [videoUri, setVideoUri] = useState('');

  const playVideo = uri => {
    setVideoUri(uri);
  };

  return (
    <View style={{flex: 1}}>
      {/* Section 1 */}
      <Text
        style={{
          marginTop: 20,
          textAlign: 'center',
          fontSize: 16,
          marginBottom: 30,
          fontWeight: 'bold',
        }}>
        Choosing the Right Loan: A Comprehensive Guide...
      </Text>
      <TouchableOpacity
        onPress={() =>
          playVideo('https://youtu.be/tb6xbFp9Zfs?si=S_-RMJ6u7I4FH6yw')
        }
        style={{
          width: '100%',
          height: '40%',
          borderWidth: 1,
          borderColor: 'black',
        }}>
        {videoUri.includes('tb6xbFp9Zfs') ? (
          <WebView source={{uri: videoUri}} style={{flex: 1}} />
        ) : (
          <Image
            source={require('../images/youtubee.jpg')} // Specify the path to your image
            style={{flex: 1, resizeMode: 'cover', width: '100%'}} // Adjust the resizeMode as needed
          />
        )}
      </TouchableOpacity>

      {/* Section 2 */}
      <Text
        style={{
          marginTop: 20,
          textAlign: 'center',
          fontSize: 16,
          marginBottom: 30,
          fontWeight: 'bold',
        }}>
        Loan Matcher: Find Your Perfect Loan Type...
      </Text>
      <TouchableOpacity
        onPress={() =>
          playVideo('https://youtu.be/J28bwxjl4EA?si=4U6gdoEVjEKZWnFh')
        }
        style={{
          width: '100%',
          height: '40%',
          borderWidth: 1,
          borderColor: 'black',
        }}>
        {videoUri.includes('J28bwxjl4EA') ? (
          <WebView source={{uri: videoUri}} style={{flex: 1}} />
        ) : (
          <Image
            source={require('../images/youtubee.jpg')} // Specify the path to your image
            style={{flex: 1, resizeMode: 'cover', width: '100%'}} // Adjust the resizeMode as needed
          />
        )}
      </TouchableOpacity>

      {/* Border Bottom */}
      <View style={{borderBottomWidth: 1, borderBottomColor: 'black'}} />

      {/* Text Sections */}
      <View style={{flex: 1}}>
        {/* Text Section 1 */}
        <View style={{flex: 1}}>
          <Text>AddRupee 1</Text>
        </View>

        {/* Border Bottom */}
        <View style={{borderBottomWidth: 1, borderBottomColor: 'black'}} />

        {/* Text Section 2 */}
        <View style={{flex: 1}}>
          <Text>AddRupee 2</Text>
        </View>
      </View>
    </View>
  );
};

export default Knowledge;
