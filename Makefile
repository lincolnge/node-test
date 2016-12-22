# .PHONY: all test clean

test: lint

lint:
	./node_modules/mocha/bin/mocha

istanbul:
	istanbul cover _mocha test/test.*
