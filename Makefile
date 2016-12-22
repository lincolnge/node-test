# .PHONY: all test clean

all: test

test: lint

lint:
	./node_modules/mocha/bin/mocha

istanbul:
	istanbul cover _mocha test/test.*
