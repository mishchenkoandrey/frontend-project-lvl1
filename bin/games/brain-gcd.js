#!/usr/bin/env node

import { greeting, game } from '../../src/index.js';

import gcdGame from '../../src/games/gcd-game.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(gcdGame);
