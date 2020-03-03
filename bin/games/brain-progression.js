#!/usr/bin/env node

import { greeting, progressionGame, game } from '../../src/index.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(progressionGame);
