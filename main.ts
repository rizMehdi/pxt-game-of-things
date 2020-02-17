namespace fun {
    /**
     * Provides access to basic micro:bit functionality.
     */
    //% color=100 weight=100 icon="\u1F340" block="Basic Blocks"
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
    //% block
    export function sq(value: number): number {
        return value * value;
    }
    export function signin_tweet(uname: string, pass: number): void {
        radio.sendValue(uname, pass)
    }
}