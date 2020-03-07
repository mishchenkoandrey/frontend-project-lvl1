#!/usr/bin/env node

import { greeting, game } from '../../src/index.js';

import evenGame from '../../src/games/even-game.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(evenGame);
