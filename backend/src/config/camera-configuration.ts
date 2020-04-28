export default () => ({
    camera: {
        i2cAddress: 0x40d,
        verticalServo: {
            channelNum: 1,
            minDutyCyclePercentage: .01,
            maxDutyCyclePercentage: .15
        },
        horizontalServo: {
            channelNum: 2,
            minDutyCyclePercentage: .01,
            maxDutyCyclePercentage: .1
        },
    }
})