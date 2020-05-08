export default () => ({
    camera: {
        i2cAddress: 0x40,
        horizontalServo: {
            channelNum: 1,
            minDutyCyclePercentage: .14,
            maxDutyCyclePercentage: .02,
            defaultAngle: Math.PI / 2
        },
        verticalServo: {
            channelNum: 2,
            minDutyCyclePercentage: .1,
            maxDutyCyclePercentage: .01,
            defaultAngle: Math.PI / 9
        },
    }
})