import React from "react";
import { Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function CircularProgressBar({
    backgroundColor = "black",
    position = "absolute",
    top = null,
    right = null,
    left = null,
    bottom = null,
    progress = 0,
    rotation = 0,
    size = 30,
    width = 3,
}) {
    const progressPercent = Math.floor(progress * 10);
    const progressColor =
        progress <= 5 ? "red" : progress <= 7 ? "yellow" : "green";

    const circularProgressStyle = {
        position,
        top,
        right,
        left,
        bottom,
        backgroundColor,
        borderRadius: 50,
    };

    return (
        <AnimatedCircularProgress
            style={circularProgressStyle}
            rotation={rotation}
            size={size}
            width={width}
            fill={progressPercent}
            tintColor={progressColor}
        >
            {() => (
                <Text style={{ color: "white", fontSize: 13 }}>
                    {Math.floor(progressPercent)}
                </Text>
            )}
        </AnimatedCircularProgress>
    );
}
