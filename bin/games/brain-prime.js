#!/usr/bin/env node

import { greeting, primeGame, game } from '../../src/index.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(primeGame);
