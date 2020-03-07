#!/usr/bin/env node

import { greeting, game } from '../../src/index.js';

import primeGame from '../../src/games/prime-game.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(primeGame);
