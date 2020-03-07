#!/usr/bin/env node

import { greeting, game } from '../../src/index.js';

import calcGame from '../../src/games/calc-game.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(calcGame);
