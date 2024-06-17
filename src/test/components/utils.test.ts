import {describe, expect, test} from "@jest/globals";
import {binToHex} from "../../components/utils.ts";

describe('Utils', () => {
  test('h', () => {
    const result = binToHex("1101001010011111");
    expect(result).toStrictEqual(['0xD2', '0x9F']);
  })
})