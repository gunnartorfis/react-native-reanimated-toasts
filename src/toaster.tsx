import * as React from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Toaster: React.FC = () => {
  return (
    <View
      style={[
        {
          position: 'absolute',
          top: 200,
        },
      ]}
    >
      <Toast
        classNames={{
          toastContent: 'bg-yellow-200',
        }}
      />
    </View>
  );
};

const Toast: React.FC<{
  classNames: {
    toastContent: string;
  };
}> = ({ classNames }) => {
  return (
    <>
      <Animated.View className={cn(classNames?.toastContent)}>
        <Text>Works</Text>
      </Animated.View>
      <View className={cn(classNames?.toastContent)}>
        <Text>Doesn't work</Text>
      </View>
    </>
  );
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
