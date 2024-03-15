# Emoji Board Challenge
## Description:

As a junior developer at a gaming development company, you've been assigned to contribute to the creation of a new board game. Your task is to develop a code that will generate the numerical layout for the game's board. The game board is expected to vary in size, determined by an integer input ranging from 4 to 10 inclusively. However, if any other value is entered, the code should return 0.

The generated board should consist of a grid of numbers, ranging from 1 to n^2, where n represents the size of the board. For example, for an input of 5, the board would be a 5x5 grid filled with numbers from 1 to 25.

To add a little twist to the game, every fourth number on the board should be replaced with a flames emoji 🔥. This will be used for when the player lands here, they will have to perform a special task. While the last field on the board should be replaced with an emoji of fireworks 🎇 to signify the end of the game.

The board should be represented visually with each cell enclosed in square brackets "[ ]", and numbers should be displayed inside these brackets. Single digit numbers should have 0 added to the front. The emojis can be copied from here: 🔥 🎇

Your task is to write a function that takes an integer input and returns an array representating the game board according to the specified rules. Ensure that the output accurately reflects the size of the board, the format of the numbers, and the placement of emojis as described above.

## Example:

#### Input:

5

#### Expected output:

[  
 ['[01]', '[02]', '[03]', '[🔥]', '[05]'],  
 ['[06]', '[07]', '[🔥]', '[09]', '[10]'],  
 ['[11]', '[🔥]', '[13]', '[14]', '[15]'],  
 ['[🔥]', '[17]', '[18]', '[19]', '[🔥]'],  
 ['[21]', '[22]', '[23]', '[🔥]', '[🎇]']  
]

#### Constraints:

- The input integer will be between 4 and 10.
- The output should be an array representating the game board as described.
- All emojis should be correctly placed according to the specified rules.
- If the input is outside the specified range, the function should return 0.


## Get started

To install all the dependencies:

- clone the repository
- `cd` into the folder

 - run the following command to get all dependencies

```bash
  npm install
```
Once you have everything up and running:
- Create your solution in `main.js`
- Test your solution:

```bash
  npm t
```

## Planning
<img width="690" alt="Screenshot 2024-03-15 at 12 02 28" src="https://github.com/SchoolOfCode/bc16-w6-hackathon-make-a-codewars-challenge-nashetty/assets/110870202/38f07974-4545-4609-9d43-36e66186a8c0">
<img width="703" alt="Screenshot 2024-03-15 at 12 04 52" src="https://github.com/SchoolOfCode/bc16-w6-hackathon-make-a-codewars-challenge-nashetty/assets/110870202/abe47a6e-d5bf-4589-aae1-81eb4b25cebe">

