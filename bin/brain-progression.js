#!/usr/bin/env node

import runGame from '../src/index.js';
import progression from '../src/games/brain-progression.js';

const game = progression();
runGame(game);
