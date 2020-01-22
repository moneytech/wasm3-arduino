export const LOW: u32  = 0;
export const HIGH: u32 = 1;

export const INPUT: u32        = 0x0;
export const OUTPUT: u32       = 0x1;
export const INPUT_PULLUP: u32 = 0x2;


export declare function millis(): u32;
export declare function delay(ms: u32): void;
export declare function pinMode(pin: u32, mode: u32): void;
export declare function digitalWrite(pin: u32, value: u32): void;
export declare function getPinLED(): u32;

@external("print")        declare function _print(ptr: usize, len: i32): void;

export function print(str: string): void {
  _print(changetype<usize>(String.UTF8.encode(str)), String.UTF8.byteLength(str))
}

export function println(str: string): void {
  print(str + '\n')
}

