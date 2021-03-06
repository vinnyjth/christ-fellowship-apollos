import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { Paragraph, BodyText } from 'apolloschurchapp/src/ui/typography';
import PaddedView from 'apolloschurchapp/src/ui/PaddedView';

import H2 from '.';

storiesOf('typography/H2', module)
  .add('Default', () => (
    <H2>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H2>
  ))
  .add('padded', () => (
    <PaddedView>
      <H2 padded>Padded Heading Big and Long</H2>
      <Paragraph>
        <BodyText>
          <BodyText italic>Paragraph</BodyText>
          {
            " why do the nations rage, and the peoples plot a vain thing? The kings of the earth take a stand, and the rulers take counsel together, against Yahweh, and against his Anointed, saying, «Let's break their bonds apart, and cast their cords from us. He who sits in the heavens will laugh. The LORD will have them in derision. Then he will speak to them in his anger, and terrify them in his wrath: Yet I have set my King on my holy hill of Zion.» I will tell of the decree. Yahweh said to me, You are my son. Today I have become your father. Ask of me, and I will give the nations for your inheritance, the uttermost parts of the earth for your possession. You shall break them with a rod of iron. You shall dash them in pieces like a potter's vessel. Now therefore be wise, you kings. Be instructed, you judges of the earth. Serve Yahweh with fear, and rejoice with trembling. Give sincere homage to the Son, lest he be angry, and you perish in the way, for his wrath will soon be kindled. Blessed are all those who take refuge in him."
          }
        </BodyText>
      </Paragraph>
    </PaddedView>
  ))
  .add('isLoading', () => (
    <H2 isLoading>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H2>
  ))
  .add('Border Box – platform testing', () => {
    const border = { borderWidth: 1, borderStyle: 'solid' };

    return (
      <View>
        <H2 style={border}>Heading 2</H2>
        <H2 style={border}>
          {
            '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
          }
        </H2>
      </View>
    );
  });
