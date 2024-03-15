import { test, expect } from "vitest";
import { createBoard } from "./main.js";

test("invalid input (out of range 0-4) should return 0", () => {
  expect(createBoard(1)).toBe(0);
});

test("invalid input (out of range 0-4) should return 0", () => {
  expect(createBoard(20)).toBe(0);
});

test("invalid input (string) should return 0", () => {
  expect(createBoard("foo")).toBe(0);
});

test("first square should be [01] for board size 4", () => {
  const expected = "[01]";
  const board = createBoard(4);
  const actual = board[0][0];
  expect(actual).toBe(expected);
});

test("number 4 is replaced with fire emoji (board size 6)", () => {
  const expected = "[🔥]";
  const board = createBoard(6);
  const actual = board[0][3];
  expect(actual).toBe(expected);
});

test("n^2 square is replaced with fireworks emoji", () => {
  const expected = "[🎇]";
  const board = createBoard(6);
  const actual = board[5][5];
  expect(actual).toBe(expected);
});

test("the length of the array is equal to the size (for size 6)", () => {
  const expected = 6;
  const board = createBoard(6);
  const actual = board.length;
  expect(actual).toBe(expected);
});

test("the length of each element is equal to the size  (for size 6)", () => {
  const expected = 6;
  const board = createBoard(6);
  const actual = board[0].length;
  expect(actual).toBe(expected);
});

test("the first row of the board has numbers 1-5 (including fire emoji) for size 5", () => {
  const expected = ["[01]", "[02]", "[03]", "[🔥]", "[05]"];
  const board = createBoard(5);
  const actual = board[0];
  expect(actual).toEqual(expect.arrayContaining(expected));
});

test("all the numbers for board size 5 are correct", () => {
  const expected = [
    ["[01]", "[02]", "[03]", "[🔥]", "[05]"],
    ["[06]", "[07]", "[🔥]", "[09]", "[10]"],
    ["[11]", "[🔥]", "[13]", "[14]", "[15]"],
    ["[🔥]", "[17]", "[18]", "[19]", "[🔥]"],
    ["[21]", "[22]", "[23]", "[🔥]", "[🎇]"],
  ];
  const board = createBoard(5);
  const actual = board;
  expect(actual).toEqual(expect.arrayContaining(expected));
});
