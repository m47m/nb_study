## show
### ^ "the line begins with"
```shell
grep 'sam' names.txt
grep '^sam' names.txt
```

### & "the line ends with"
```shell
grep 'sam' names.txt
grep 'sam$' names.txt
```

### . "match any ONE character"
```shell
grep 'sam' names.txt
grep 's.m' names.txt
grep -wr 's.w' name.txt
```

### \ escaping for special characters
```shell
grep '\.' /etc/login.defs
```

### * match the previous element 0 or more times
let* === le let lett letttt
```shell
# begins with /;has 0 or more characters ;ends with /
grep -r '/.*/' /etc/
```
