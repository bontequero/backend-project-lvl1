#!/usr/bin/env node

import runGame from '../src/index.js';
import gcd from '../src/games/brain-gcd.js';

const game = gcd();
runGame(game);
