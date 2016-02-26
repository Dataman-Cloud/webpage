#! /bin/bash
bower install
rm -rf build/*
npm install --global gulp
npm install
gulp && gulp rev
