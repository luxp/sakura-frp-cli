#!/usr/bin/env node
let execSync = require('child_process').execSync
let fs = require('fs')
let path = require('path')
let os = require('os')

let osType = os.type()
let binPath = path.resolve(__dirname, osType)

if (fs.existsSync(binPath)) {
  execSync(binPath, { stdio: 'inherit' })
} else {
  console.log(`暂时不支持此操作系统:${binPath}`)
}
