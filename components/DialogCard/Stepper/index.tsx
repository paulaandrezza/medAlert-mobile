import React from 'react';
import { View } from 'react-native';
import { Divider, FAB, Text } from 'react-native-paper';

export default function Stepper({count, setCount}) {

  return (
    <View className='items-center'>
      <View className='items-center flex-row justify-center py-4'>
        <FAB
          icon="minus"
          onPress={() => setCount(count - 1)}
        />
        <Text className='text-lg mx-8'>{count}</Text>
        <Divider />
        <FAB
          icon="plus"
          onPress={() => setCount(count + 1)}
        />
      </View>
      <Text className='text-lg mx-8'>mililitros</Text>
    </View>
  );
}
