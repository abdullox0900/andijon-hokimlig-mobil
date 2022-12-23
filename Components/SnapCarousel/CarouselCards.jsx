import React from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem.jsx'
import data from './data'

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null);

  return (
    <View style={{paddingTop:0}}>
      <Carousel
        layout={'default'} 
        layoutCardOffset={`18`}
        ref={isCarousel}
        data={data}
        autoplay={true}
        loop={true}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <View style={{height:65,marginTop:-20}}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          
          dotStyle={{
            width: 25,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.8}
          tappableDots={true}
        />
      </View>
    </View>
  )
}

export default CarouselCards
