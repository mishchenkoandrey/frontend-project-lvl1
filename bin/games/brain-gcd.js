#!/usr/bin/env node

import { greeting, question, game } from '../../src/index.js';

import gameName, { questionText } from '../../src/games/gcd-game.js';

greeting();

question(questionText);

game(gameName);
