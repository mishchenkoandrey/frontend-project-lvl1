#!/usr/bin/env node

import { greeting, calcGame, game } from '../../src/index.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(calcGame);
