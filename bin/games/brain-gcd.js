#!/usr/bin/env node

import { greeting, gcdGame, game } from '../../src/index.js';

console.log('Welcome to the Brain Games!\n');

greeting();

game(gcdGame);
