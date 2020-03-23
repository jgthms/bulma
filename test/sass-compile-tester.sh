#!/bin/bash

# CONSTANTS

TEST_DIR=$(dirname $BASH_SOURCE)
FILES=$TEST_DIR/sass/*
CSS_DIR=$TEST_DIR/css
SASS_OPTIONS=--sourcemap=none

# FUNCTIONS

build_sass()
{
	  echo "Processing $1 file…"

	  local fileName=$(basename -- "$1")
	  local name="${fileName%.*}"
		local destFile="$CSS_DIR/$name.css"

		sass "$1" "${destFile}"
}

run_it()
{
	rm -r $CSS_DIR

	if [ ! -d "${CSS_DIR}" ]; then
	  echo "Creating $CSS_DIR directory…"
		mkdir -p "${CSS_DIR}"
	fi

	if [ $1 ]
	then
		build_sass $1
	else
		for f in $FILES
		do
			build_sass $f
		done
	fi
}

# EXECUTION

run_it $@
