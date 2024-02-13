import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from "react-native";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";
import { tokens } from "../../../tamagui.config";
import config from "../../../tamagui.config";

interface FloatingButtonProps {
  style?: StyleProp<ViewStyle>;
}
const { teal, tealLight, tealDark } = tokens.color;

const FloatingButton: React.FC<FloatingButtonProps> = (props) => {
  const animation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const menuStyle = {
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: animation,
      },
    ],
  };

  const firstItemStyle = {
    ...menuStyle,
    transform: [
      ...menuStyle.transform,
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70],
        }),
      },
    ],
  };

  const secondItemStyle = {
    ...menuStyle,
    transform: [
      ...menuStyle.transform,
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140],
        }),
      },
    ],
  };

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    setOpen(!open);
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.button,
            styles.secondary,
            firstItemStyle,
            {
              shadowRadius: 10,
              shadowColor: "#008080",
              shadowOpacity: 0.3,
              shadowOffset: { width: 0, height: 10 },
            },
          ]}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Link href="/home/add/addTodo">
              <MaterialIcons
                name="task"
                size={20}
                color="#008080"
              />
            </Link>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.button,
            styles.secondary,
            secondItemStyle,
            {
              shadowRadius: 10,
              shadowColor: "#008080",
              shadowOpacity: 0.3,
              shadowOffset: { width: 0, height: 10 },
            },
          ]}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Link href="/home/add/addTask">
              <Entypo
                name="paper-plane"
                size={20}
                color="#008080"
              />
            </Link>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <AntDesign
            name="plus"
            size={24}
            color="#FFF"
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    bottom: 80,
    right: 30,
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    backgroundColor: "#008080",
    shadowRadius: 10,
    shadowColor: "#008080",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFF",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FloatingButton;
