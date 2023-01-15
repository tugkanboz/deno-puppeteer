# deno-puppeteer-demo
In this project puppeteer and deno are used.

### To subcommand scaffolds a basic Deno project
```
deno init
```

### To cache these versions in the Puppeteer cache, run the commands below
```
PUPPETEER_PRODUCT=chrome deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts
PUPPETEER_PRODUCT=firefox deno run -A --unstable https://deno.land/x/puppeteer@16.2.0/install.ts
```

### To run test 
```
deno run -A --unstable deno-puppeteer-test/test/login.js
```
