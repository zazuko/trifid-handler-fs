# trifid-handler-fs

File system handler for Trifid.

# Usage

The handler requires only a `path` property, that points to the path which contains the graphs as Turtle or N-Triples files.


## Examples

This configuration tells Trifid to use the `trifid-handler-fs` handler and uses the graph files in `node_modules/tbbt-ld`:

```
"handler": {
  "module": "trifid-handler-fs",
  "options": {
    "path": "node_modules/tbbt-ld"
  }
}
```
