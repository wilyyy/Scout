# Scout

### FIRST TIME SET UP

	git clone https://github.com/wilyyy/Scout.git
	npm install		
		
### MAKING CHANGES

	git branch branch-name  
	git checkout branch-name

### PUSHING YOUR CHANGES ONCE YOU ARE DONE

	git add .
	git commit -m "write a message describing the change you made"
	git push origin branch-name

### PULLING LATEST VERSION OF THE APP INTO YOUR LOCAL MACHINE
		
	git pull origin main
	npm install

### Resetting a branch after making a mistake

	git reset --hard origin/branch-name

## Naming Conventions

#### Variables - camelCase

	const variableName;
	let variableName;
	/* for variables that need to be reassigned */

try not to use var

#### Functions - PascalCase and arrow functions

	const MyFunctionName = () => {}
