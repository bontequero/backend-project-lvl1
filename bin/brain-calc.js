#!/usr/bin/env node

import runGame from '../src/index.js';
import calc from '../src/games/brain-calc.js';

const game = calc();
runGame(game);
