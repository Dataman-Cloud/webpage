#! /bin/bash
npm install -g bower
bower install
rm -rf build/*
npm install --global gulp
npm install
gulp && gulp rev
