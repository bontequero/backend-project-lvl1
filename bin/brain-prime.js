#!/usr/bin/env node

import runGame from '../src/index.js';
import prime from '../src/games/brain-prime.js';

const game = prime();
runGame(game);
