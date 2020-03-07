#!/usr/bin/env node

import { greeting, game } from '../../src/index.js';

import progressionGame from '../../src/games/progression-game.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(progressionGame);
