#!/bin/bash

if [[ -n $NEXT_PUBLIC_BASE_PATH ]]; then
  DIRECTORY=${NEXT_PUBLIC_BASE_PATH/\//''}
  cd public
  mkdir $DIRECTORY
  mv * $DIRECTORY || echo "move public files to /$DIRECTORY";
fi