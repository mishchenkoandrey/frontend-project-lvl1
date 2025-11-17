install:
	npm install --legacy-peer-deps
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
	
