import {describe, expect, test} from "@jest/globals";
import {binToHex, is128Multiple} from "../../components/utils.ts";

describe('Utils', () => {
  test('converts short binary string', () => {
    const result = binToHex("1101001010011111");
    expect(result).toStrictEqual(['0xD2', '0x9F']);
  })

  test('identifies multiples of 128', () => {
    const result = is128Multiple(128);
    expect(result).toBeTruthy()

    const result2 = is128Multiple(512);
    expect(result2).toBeTruthy()

    const result3 = is128Multiple(514);
    expect(result3).toBeFalsy()
  })
})