import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import Stepper from './Stepper';


export default function DialogCard() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <View className='justify-center px-4 h-full'>
      <TouchableOpacity className='h-full justify-center' onPress={() => setOpen(true)}>
        <Text className='text-gray-50'>{count}</Text>
      </TouchableOpacity>
      <Portal>
        <Dialog visible={open} onDismiss={() => setOpen(false)}>
          <Dialog.Title>Dose</Dialog.Title>
          <Dialog.Content>
            <Stepper count={count} setCount={setCount} />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setOpen(false)}>CANCELAR</Button>
            <Button onPress={() => setOpen(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
