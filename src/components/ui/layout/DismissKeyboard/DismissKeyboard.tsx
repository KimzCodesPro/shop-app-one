import { Keyboard, Pressable, StyleProp, ViewStyle } from "react-native";

type DismissKeyboardProps = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

// Wrap a screen so tapping any empty area blurs the focused input and hides the
// keyboard. Interactive children (buttons, inputs) still handle their own taps.
const DismissKeyboard = ({ children, style }: DismissKeyboardProps) => {
  return (
    <Pressable style={style} onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </Pressable>
  );
};

export default DismissKeyboard;
