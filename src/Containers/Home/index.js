import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { vh, vw } from '../../Constants'
import MyCarousel from '../../Components/Carousel'
import { Ionicons, AntDesign,Entypo, FontAwesome } from '@expo/vector-icons';

export default function Home() {

  const [news, setNews] = useState(['1', '2', '3'])

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 50, backgroundColor: '#87C650', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image style={{ width: 120, height: 30, marginLeft: 20 }} source={require('../../../assets/cricfoxLogo.png')} />
        <AntDesign name="setting" size={24} color="#fff" style={{ paddingRight: 20 }} />
      </View>
      <ScrollView>
        <View style={styles.topView}>
          <ImageBackground style={{ width: "100.8%", height: "100%", alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 40 }} source={require('../../../assets/homeBackgroundImage.png')} >

            <Text style={{ color: '#fff', fontWeight: 'bold' }} >Matches</Text>

            <MyCarousel>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={{fontSize:12, color:'#737a85'}}>Match Starts at 10:00 A.M(PST)</Text>
                <Entypo name="pin" size={20} color="grey" />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:5}}>
                <View>
                <Image style={{width:40,height:40, borderRadius:40, borderWidth:2, borderColor:'#F2E6E9'}} source={require('../../../assets/logo1.png')} />
                <Text style={{fontWeight:'bold'}}>Team A</Text>
                </View>
                <View>
                <Image style={{width:35,height:35}} source={require('../../../assets/vs.png')} />
                </View>
                <View>
                <Image style={{width:40,height:40, borderRadius:40, borderWidth:2, borderColor:'#F2E6E9'}} source={require('../../../assets/logo2.png')} />
                <Text style={{fontWeight:'bold'}}>Team B</Text>
                </View>   
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:'3%'}}>
              	<View>
                  <Text style={{color:'#737a85'}}>Series Name</Text>
                  <Text style={{color:'#737a85'}}  >Match # | Venue, City </Text>
                </View>
                <FontAwesome name="bell" size={24} color="#c5cdd9" />
                </View>
            </MyCarousel>
          </ImageBackground>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 18 }} >Cricfox Fantasy League</Text>
          <Text style={{ color: '#87C650', fontWeight: 'bold', fontSize: 12 }}>More</Text>
        </View>
        <View style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', width: vw * 0.8, height: 150, alignSelf: 'center', borderRadius: 20 }}>
          <Text style={{ color: '#737a85' }}>League Name</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: "2%" }}>
            <View>
              <Image style={{ width: 40, height: 40, borderRadius: 40, borderWidth: 2, borderColor: '#F2E6E9' }} source={require('../../../assets/logo1.png')} />
              <Text style={{ fontWeight: 'bold' }}>Team A</Text>
            </View>
            <View>
              <Image style={{ width: 40, height: 40 }} source={require('../../../assets/vs.png')} />
              <Text style={{ fontWeight: 'bold', color: '#87C650', width: 50 }}>Time Counter</Text>
            </View>
            <View>
              <Image style={{ width: 40, height: 40, borderRadius: 40, borderWidth: 2, borderColor: '#F2E6E9' }} source={require('../../../assets/logo2.png')} />
              <Text style={{ fontWeight: 'bold' }}>Team B</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: "space-around", alignItems: 'center', width: vw * 0.8, alignSelf: 'center', marginTop: 40, height: 90, borderRadius: 20 }}>
          <Text style={{ fontWeight: 'bold', width: '30%', color: '#676f7a' }}>YOUR ADS HERE</Text>
          <Image style={{ width: 50, height: 60 }} source={require('../../../assets/googleAd.png')} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
          <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 18 }} >Top Stories</Text>
          <Text style={{ color: '#87C650', fontWeight: 'bold', fontSize: 12 }}>More</Text>
        </View>
        <View style={{ width: vw * 0.8, height: 250, backgroundColor: '#fff', elevation: 10, alignSelf: 'center', borderRadius: 30, marginBottom: 20 }}>
          <Image style={{ width: '100%', height: '70%', borderRadius: 30, marginBottom: 10 }} source={require('../../../assets/batsman.jpg')}>
          </Image>
          <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold', paddingLeft: 20 }}>Story Brief Heading</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ color: 'gray' }}>Match Concise details</Text>
            <Text style={{ color: 'gray' }}>10h ago</Text>
          </View>
        </View>
        {
          news.map((item, index) => {
            return (
              <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around',alignSelf:'center', width: vw * 0.8, marginBottom: 20 }}>
                <Image style={{ width: 70, height: 70, borderRadius: 20 }} source={require('../../../assets/wicket.jpg')} />
                <View>
                  <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>Story Brief Heading</Text>
                  <Text style={{ color: 'gray', fontWeight: 'bold' }}>Heading two lines</Text>
                  <Text style={{ color: 'gray' }}>Match concide details </Text>
                  <Text style={{ color: 'gray' }}>10h ago</Text>
                </View>
              </View>
            )
          })
        }

        <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: '#87C650', marginBottom:5 }} >More News</Text>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  topView: {
    height: vh * 0.4
  },
  container: {
    flex: 1
  },
});
