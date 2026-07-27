import { Keyboard, Pressable } from "react-native";
import { DismissKeyboardProps } from "./types";

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
