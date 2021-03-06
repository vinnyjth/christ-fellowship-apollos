import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import FeedItemCard from '.';

storiesOf('FeedItemCard', module)
  .add('Default', () => {
    const centered = {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#f7f7f7',
    };

    return (
      <View style={centered}>
        <FeedItemCard
          title={'Promised Land'}
          channelType={'Series'}
          images={'https://picsum.photos/600/400/?random'}
        />
      </View>
    );
  })
  .add('isLoading', () => {
    const centered = {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#f7f7f7',
    };

    return (
      <View style={centered}>
        <FeedItemCard
          title={'Promised Land'}
          channelType={'Series'}
          images={'https://picsum.photos/600/400/?random'}
          isLoading
        />
      </View>
    );
  })
  .add('With icon', () => {
    const centered = {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#f7f7f7',
    };
    return (
      <View style={centered}>
        <FeedItemCard
          title={'Promised Land'}
          channelType={'Series'}
          channelTypeIcon={'video'}
          images={'https://picsum.photos/600/400/?random'}
          backgroundColor={'salmon'}
        />
      </View>
    );
  })
  .add('With dark backgroundColor', () => {
    const centered = {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#f7f7f7',
    };
    return (
      <View style={centered}>
        <FeedItemCard
          title={'Promised Land'}
          channelType={'Series'}
          images={'https://picsum.photos/600/400/?random'}
          backgroundColor={'salmon'}
          isLight={false}
        />
      </View>
    );
  })
  .add('With isLight and light backgroundColor', () => {
    const centered = {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#f7f7f7',
    };
    return (
      <View style={centered}>
        <FeedItemCard
          title={'Promised Land'}
          channelType={'Series'}
          images={'https://picsum.photos/600/400/?random'}
          backgroundColor={'papayawhip'}
          isLight
        />
      </View>
    );
  });
// .add('As liked', () => {
//   const centered = {
//     justifyContent: 'center',
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//   };
//   return (
//     <View style={centered}>
//       <FeedItemCard
//         title={'Promised Land'}
//         category={'Series'}
//         images={'https://picsum.photos/600/400/?random'}
//         isLiked
//       />
//     </View>
//   );
// })
// .add('As liked with backgroundColor', () => {
//   const centered = {
//     justifyContent: 'center',
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//   };
//   return (
//     <View style={centered}>
//       <FeedItemCard
//         title={'Promised Land'}
//         category={'Series'}
//         images={'https://picsum.photos/600/400/?random'}
//         backgroundColor={'salmon'}
//         isLight={false}
//         isLiked
//       />
//     </View>
//   );
// })
// .add('As liked with isLight and light backgroundColor', () => {
//   const centered = {
//     justifyContent: 'center',
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//   };
//   return (
//     <View style={centered}>
//       <FeedItemCard
//         title={'Promised Land'}
//         category={'Series'}
//         images={'https://picsum.photos/600/400/?random'}
//         backgroundColor={'papayawhip'}
//         isLight
//         isLiked
//       />
//     </View>
//   );
// });
