import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, Image } from 'react-native';
import {vw, vh} from '../Constants'
import Carousel from 'react-native-snap-carousel';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class MyCarousel extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'#fff',
              borderRadius: 20,
              height: "60%",
              borderColor:'#F2E6E7',
              marginTop:'5%',
              justifyContent:"center"
              }}>
              {
                this.props.children
              }  
          </View>

        )
    }

    render() {
        return (
         
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={vw*0.8}
                  itemWidth={vw*0.8}
                  renderItem={this._renderItem.bind(this)}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
        );
    }
}

