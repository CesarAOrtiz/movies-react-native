import React from "react";
import { Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function CircularProgressBar(props) {
    const {
        backgroundColor = "black",
        position = "absolute",
        top = 0,
        right = 0,
        progress = 0,
        rotation = 0,
        size = 30,
        width = 3,
    } = props;

    const lowProgress = progress >= 5 ? "yellow" : "red";
    const highProgress = progress >= 7.5 ? "green" : lowProgress;
    const progressPercent = parseInt(progress * 10, 10);

    const circularProgressStyle = {
        position: position,
        top: top,
        right: right,
        backgroundColor: backgroundColor,
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
            {(fill) => (
                <Text
                    style={{
                        color: "white",
                        fontSize: 16,
                    }}
                >
                    {fill}
                </Text>
            )}
        </AnimatedCircularProgress>
    );
}
