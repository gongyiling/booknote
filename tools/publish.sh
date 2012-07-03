#!/usr/bin/env bash

PROJ_ROOT=..
PUB_ROOT=/home/web/booknote
TMP=/tmp
cp -r $PROJ_ROOT/back $TMP/
cp -r $PROJ_ROOT/static $TMP/
cp -r $PROJ_ROOT/templates $TMP/
if [ ! -d $TMP/proto ]; then
	mkdir $TMP/proto
fi
cp -r $PROJ_ROOT/proto/*.py $TMP/proto/
sudo su - web
cp -r $TMP/back $PUB_ROOT/
cp -r $TMP/static $PUB_ROOT/
cp -r $TMP/templates $PUB_ROOT/
if [ ! -d $PUB_ROOT/proto ]; then
	mkdir $PUB_ROOT/proto
fi
cp -r $TMP/proto/*.py $PUB_ROOT/proto/

