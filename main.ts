namespace skybit {
    /**
     * Provides access to basic skybit functionality.
     */
    //% color=190 weight=100 icon="\u1F340" block="Basic Blocks"
    //% block
    export function sqrt(value: number): number {
        return value * value;
    }
    //% color=190 weight=100 icon="\u1F340" block="Basic Blocks"
    //% username.defl="see sign-in card for info" pin.min=0000 pin.max=9999 pin.defl=0
    //% block
    export function tweetbitSign_in(username: string, pin: number): void {
        radio.sendValue(username, pin)
    }
    //% color=190 weight=99 icon="\u1F340" block="Basic Blocks"
    //% tweetText.defl="<a17CharTweet>"
    //% block
    export function tweetbitPost(tweetText: string): void {
        radio.sendString("#" + tweetText)
    }
    //% color=190 weight=98 icon="\u1F340" block="Basic Blocks"
    //% username.defl="see sign-in card for info" pin.min=0000 pin.max=9999 pin.defl=0
    //% block
    export function logbitSign_in(username: string, pin: number): void {
        radio.sendValue(username, pin)
    }
    //% color=190 weight=97 icon="\u1F340" block="Basic Blocks"
    //% block
    export function logbitPost(sensor_name: string, value: number): void {
        radio.sendValue("&" + sensor_name, value)
    }
    //% color=190 weight=96 icon="\u1F340" block="Basic Blocks"
    //% block
    export function forecastbitRequest(forecastType: string): void {
        radio.sendString(forecastType)
        //and listen for reply? or listen seperately?
    }
    //% color=190 weight=94 icon="\u1F340" block="Basic Blocks"
    //% block
    export function triviabitRequest(): void {
        radio.sendString("get_trivia")
    }
    //% color=190 weight=0 icon="\u1F340" block="Basic Blocks"
    //% block
    export function checkIfActive(): number {
        return 1
    }
}


// radio.onReceivedValue(function (name: string, value: number) {

// })


namespace p2pbit {
    /**
     * Provides access to basic micro:bit functionality.
     */
    //% color=140 weight=100 icon="\u1F340" block="Basic Blocks"
    //% block
    export function sendToPeer(sensorname: string, value: number): void {

    }
    //% color=140 weight=99 icon="\u1F340" block="Basic Blocks"
    //% block
    export function recieveFromPeer(sensorname: string, ): number {
        // radio.onReceivedValue(function (name: string, value: number) {
        //     if (name==sensorname) {
        //         return value
        //     }
        // })
        return 99
    }
}
