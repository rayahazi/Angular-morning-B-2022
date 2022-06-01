# Ways to pass data between components in Angular: 

```
app
    * users
        * login
        * register
        * myUser
    * shop
        * items
        * categories
        * favorites
```

### @Input() 

pass data from parent to child component

### @Output()

pass data from child to parent component

### Example:
We want to transfer data from `favorites` to `myUser`: 


#### First way: using input & output
1. favorites -> shop (output)
2. shop -> app (output)
3. app -> users (input)
4. users -> myUser (input)


#### Second way - using service (global data)

