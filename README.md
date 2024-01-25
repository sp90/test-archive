# test-archive

To run the code run

Its a compiled single executable to run the server to avoid the need for dependencies

```
./run-server
```

## Build or run your self

#### Install bun `1.0.25`

```
curl -fsSL https://bun.sh/install | bash
```

#### Run server

```
bun run index.ts
```

#### Watch server

```
bun run --watch index.ts
```

#### Compile single executable 
```
bun build ./index.ts --compile --outfile run-server
```
