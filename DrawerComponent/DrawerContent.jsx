// import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';
// import {Avatar, Title} from 'react-native-paper';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

// const DrawerList = [
//   {icon: 'account', label: 'AddLeads', navigateTo: 'EmpForm'},
//   {icon: 'home-outline', label: 'Profile', navigateTo: 'EmpDashboard'},
//   {icon: 'add', label: 'Help & Support', navigateTo: 'Help'},
//   {icon: 'condition', label: 'Loan Terms', navigateTo: 'TermsAndConditions'},
//   {icon: 'account-group', label: 'Refer Friend', navigateTo: 'ReferShare'},
//   {icon: 'home-outline', label: 'Knowledge centre', navigateTo: 'knowledge'},
//   {icon: 'home-outline', label: 'Improve Cibil', navigateTo: 'knowledge'},
// ];

// const DrawerLayout = ({label, navigateTo}) => {
//   const navigation = useNavigation();
//   return (
//     <DrawerItem
//       icon={({color, size}) => (
//         <Avatar.Icon
//           size={size}
//           icon={
//             label === 'Home'
//               ? 'home'
//               : label === 'Profile'
//               ? 'account'
//               : label === 'User'
//               ? 'account-group'
//               : 'book'
//           }
//           color={color}
//         />
//       )}
//       label={label}
//       onPress={() => {
//         navigation.navigate(navigateTo);
//       }}
//       style={styles.drawerItem} // Added style for more top and bottom gap in links
//       labelStyle={styles.drawerItemLabel} // Added style for more top and bottom gap in links
//     />
//   );
// };

// const DrawerItems = props => {
//   return DrawerList.map((el, i) => {
//     return <DrawerLayout key={i} label={el.label} navigateTo={el.navigateTo} />;
//   });
// };
// <Image source={require("../images/googlePng.png")} />

// function DrawerContent(props) {
//   return (
//     <View style={styles.container}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <TouchableOpacity activeOpacity={0.8}>
//             <View style={styles.userInfoSection}>
//               <View style={{flexDirection: 'row', marginTop: 15}}>
//                 <View style={{marginLeft: 10, flexDirection: 'column'}}>
//                   <Title style={styles.title}>Karan Pandey</Title>
//                   <Text style={styles.caption} numberOfLines={1}>
//                     pandeykaran1515@gmail.com
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//           <View style={styles.drawerSection}>
//             <DrawerItems />
//           </View>
//         </View>
//       </DrawerContentScrollView>
//       <View style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({color, size}) => (
//             <Avatar.Icon size={size} icon="exit-to-app" color={color} />
//           )}
//           label="Sign Out"
//           labelStyle={{color: '#fff', fontSize: 22}} // Changed fontSize and color for signout
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // Set background color to aqua where the name and email are displayed
//   },
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//     paddingTop: 0,
//     paddingBottom: 40,
//     backgroundColor: '#017A99',
//   },
//   title: {
//     fontSize: 28,
//     marginTop: 10,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
//   caption: {
//     fontSize: 15,
//     lineHeight: 14,
//     width: '100%',
//     color: '#FFF',
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   drawerSection: {
//     marginTop: 20, // Increased marginTop for more gap from top
//     borderBottomWidth: 1,
//     borderBottomColor: '#dedede',
//   },
//   bottomDrawerSection: {
//     borderTopColor: '#dedede',
//     borderTopWidth: 1,
//     backgroundColor: '#017A99', // Background color aqua for sign out section
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   drawerItem: {
//     marginBottom: 20, // Increased marginBottom for more gap from bottom
//   },
//   drawerItemLabel: {
//     fontSize: 16,
//   },
// });

// export default DrawerContent;

import React from 'react';
import {View, StyleSheet, Text, Image, Linking} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Title} from 'react-native-paper';

const DrawerList = [
  {icon: 'account', label: 'AddLeads', navigateTo: 'EmpForm'},
  {icon: 'home-outline', label: 'Profile', navigateTo: 'EmpDashboard'},
  {icon: 'add', label: 'Help & Support', navigateTo: 'Help'},
  {icon: 'condition', label: 'Loan Terms', navigateTo: 'TermsAndConditions'},
  {icon: 'account-group', label: 'Refer Friend', navigateTo: 'ReferShare'},
  {icon: 'home-outline', label: 'Knowledge centre', navigateTo: 'knowledge'},
  {icon: 'home-outline', label: 'Improve Cibil', navigateTo: 'EmpForm'},
  {icon: 'home-outline', label: 'setting', navigateTo: 'EmpDashboard'},
];

const DrawerLayout = ({label, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({color, size}) => (
        <Avatar.Icon
          size={size}
          icon={
            label === 'Home'
              ? 'home'
              : label === 'Profile'
              ? 'account'
              : label === 'User'
              ? 'account-group'
              : 'book'
          }
          color={color}
        />
      )}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemLabel}
    />
  );
};

const DrawerItems = props => {
  return DrawerList.map((el, i) => {
    return <DrawerLayout key={i} label={el.label} navigateTo={el.navigateTo} />;
  });
};

function DrawerContent(props) {
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/addrupee/');
  };

  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100083152737651');
  };

  const openYouTube = () => {
    Linking.openURL('https://www.youtube.com/@addrupee4675');
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={{marginLeft: 10, flexDirection: 'column'}}>
                  <Title style={styles.title}>Karan Pandey</Title>
                  <Text style={styles.caption} numberOfLines={1}>
                    pandeykaran1515@gmail.com
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
          <View style={styles.followUsContainer}>
            <Text style={styles.followUsText}>Follow Us</Text>
            <View style={styles.socialIconsContainer}>
              <TouchableOpacity onPress={openInstagram}>
                <Image
                  source={require('../images/instagramlogo.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={openFacebook}>
                <Image
                  source={require('../images/fb.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={openYouTube}>
                <Image
                  source={require('../images/youtube.png')}
                  style={styles.socialIcony}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Avatar.Icon size={size} icon="exit-to-app" color={color} />
          )}
          label="Sign Out"
          labelStyle={{color: '#fff', fontSize: 22}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerContent: {
    flex: 1,
    marginTop: -5,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 40,
    backgroundColor: '#017A99',
  },
  title: {
    fontSize: 28,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#FFF',
  },
  caption: {
    fontSize: 15,
    lineHeight: 14,
    width: '100%',
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  drawerSection: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  bottomDrawerSection: {
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    backgroundColor: '#017A99',
  },
  drawerItem: {
    marginBottom: 10,
  },
  drawerItemLabel: {
    fontSize: 16,
  },
  followUsContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  followUsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  socialIcony: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default DrawerContent;
