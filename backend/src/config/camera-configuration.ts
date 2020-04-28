export default () => ({
    camera: {
        i2cAddress: 0x40,
        horizontalServo: {
            channelNum: 1,
            minDutyCyclePercentage: .01,
            maxDutyCyclePercentage: .15,
            defaultAngle: Math.PI / 2
        },
        verticalServo: {
            channelNum: 2,
            minDutyCyclePercentage: .01,
            maxDutyCyclePercentage: .1,
            defaultAngle: 0
        },
    }
})