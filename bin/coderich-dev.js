#!/usr/bin/env node

/* Copyright (c) 2023 Coderich LLC. All Rights Reserved. */

const { Command } = require('commander');
const { copyrightHeader, npmPublish, bootstrap } = require('../src');

const program = new Command();

program.name('Coderich').description('Coderich NodeJS Dev Commander');

program.command('npmPublish').argument('[version]').action(version => npmPublish({ version }));
program.command('bootstrap').action(bootstrap);
program.command('copyrightHeader').action(copyrightHeader);

//
program.parseAsync(process.argv);
