#!/usr/bin/env node

import runGame from '../src/index.js';
import braineven from '../src/games/brain-even.js';

const game = braineven();
runGame(game);
