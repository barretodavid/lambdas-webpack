# Mutliple Lambdas with Webpack

Example on how to setup a workflow with multiple lambdas in the same project using typescript and webpack

## Commands

The npm scripts that end with the word `lambda` as in `zip:lambda` or `update:lambda` need to be called with the environment variable `LAMBDA` that defines to which lambda to apply the operation as shown below:

Generic

```
LAMBDA=<lambda-name> npm run zip:lambda
```

Example

```
LAMBDA=lambda-a npm run zip:lambda
```

The token `<lambda-name>` really refers to the name of the folder of the lambda inside of `src`.

The scripts that end with the word `all` as in `zip:all` or `update:all` do not need to be provided with an environment variable.
