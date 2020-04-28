export default () => ({
    camera: {
        i2cAddress: 0x40d,
        horizontalServo: {
            channelNum: 1,
            minDutyCyclePercentage: .01,
            maxDutyCyclePercentage: .15
        },
        verticalServo: {
            channelNum: 2,
            minDutyCyclePercentage: .01,
            maxDutyCyclePercentage: .1
        },
    }
})