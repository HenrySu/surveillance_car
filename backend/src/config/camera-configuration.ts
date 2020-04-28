export default () => ({
    camera: {
        i2cAddress: 0x40d,
        horizontalServo: {
            channelNum: 1,
            minDutyCyclePercentage: .01,
            maxDutyCyclePercentage: .15,
            defaultDutyCyclePercentage: .08
        },
        verticalServo: {
            channelNum: 2,
            minDutyCyclePercentage: .01,
            maxDutyCyclePercentage: .1,
            defaultDutyCyclePercentage: .01
        },
    }
})