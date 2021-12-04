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
    const lowProgress = progress >= 5 ? "yellow" : "red";
    const highProgress = progress >= 7.5 ? "green" : lowProgress;

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
            tintColor={highProgress}
        >
            {() => (
                <Text style={{ color: "white", fontSize: 16 }}>
                    {Math.floor(progressPercent)}
                </Text>
            )}
        </AnimatedCircularProgress>
    );
}
