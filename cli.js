#!/usr/bin/env node
'use strict'
var inPublish = require('./index.js')
process.exit(inPublish() ? 0 : 1)
