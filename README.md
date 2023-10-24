# AlyBox

Library mod containing various extra features and fixes.

## Logic Steps

Logic Steps is a simple library for Patch Steps that adds some extra functionality, namely logic flow control.

### `IF`

Takes two properties, `cond` and `thenSteps`. `cond` is evaluated as a regular JS expression (meaning it can be literally anything as long as it returns a truthy/falsy value), if `cond` ends up being truthy, `thenSteps` is executed. Else, nothing happens and the step is skipped.

```json
[
  {
    "type": "IF",
    "cond": "1 + 1 == 2",
    "thenSteps": [
      {
        "type": "SET_KEY",
        "index": "a",
        "content": 1
      }
    ]
  }
]
```

### `FUNCTION` and `CALL`

`FUNCTION` allows you to define a set of steps to be executed at some later point. Takes two properties, `name` and `body`.

`CALL` allows you to call a previously defined function. Takes a single property; the function name.

```json
[
  {
    "type": "FUNCTION",
    "name": "SET_A_TO_TRUE",
    "body": [
      {
        "type": "SET_KEY",
        "index": "a",
        "content": 1
      }
    ]
  },
  {
    "type": "CALL",
    "name": "SET_A_TO_TRUE"
  }
]
```

### `LABEL` and `GOTO`

`LABEL` allows you to define a label to jump to.

`GOTO` allows you to jump to a label defined anywhere in your steps.

Both steps take only one property; `name`, which is the label name.

```json
[
  {
    "type": "DEBUG",
    "value": true
  },
  {
    "type": "COMMENT",
    "value": "This always runs!"
  },
  {
    "type": "GOTO",
    "name": "SKIP_GOODBYE"
  },
  {
    "type": "COMMENT",
    "value": "Goodbye! This shouldn't run!"
  },
  {
    "type": "LABEL",
    "name": "SKIP_GOODBYE"
  },
  {
    "type": "COMMENT",
    "value": "We just skipped the goodbye log!"
  }
]
```

The above steps will log the following to the console:

```
This always runs!
We just skipped the goodbye log!
```

### `PRINT_STEPS`

Doesn't take any properties. Simply logs all steps to the console if debug mode is enabled.

```json
[
  {
    "type": "DEBUG",
    "value": true
  },
  {
    "type": "PRINT_STEPS"
  }
]
```
