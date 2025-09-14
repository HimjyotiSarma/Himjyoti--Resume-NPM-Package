#!/usr/bin/env node

import { print } from './resume'
;(async () => {
  try {
    await print()
  } catch (err) {
    console.error('Error showing resume:', err)
    process.exit(1)
  }
})()
