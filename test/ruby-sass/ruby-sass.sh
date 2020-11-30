#!/bin/bash

# CONSTANTS

TEST_DIR=$(dirname $BASH_SOURCE)
FILES=$TEST_DIR/sass/*
CSS_DIR=$TEST_DIR/build
CSS_FILES=$TEST_DIR/build/*.css
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

build_all_css_files()
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

check_keywords_inclusion()
{
	for f in $CSS_FILES
	do
		BASE=$(basename $f)
		KEYWORDS_FILE=$TEST_DIR/keywords/$BASE.txt
		while read p; do
			if ! grep -q "$p" "$f"
			then
			#   echo "Ok"
			# else
			  echo "$p not found in $f"
			fi
	    # echo "Checking for $p "
		done < $KEYWORDS_FILE
	done
}

# EXECUTION

build_all_css_files $@
check_keywords_inclusion $@
