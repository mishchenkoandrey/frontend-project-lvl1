install:
	npm install
build:
	npm run build
start:
	npx node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
	