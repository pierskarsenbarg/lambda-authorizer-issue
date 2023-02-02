# Lambda authorizer demo

1. `npm install`
1. `pulumi stack init dev`
1. `pulumi config set {AWS region}`
1. `pulumi up -f`
1. Uncomment lines 189 - 203 (`route11`)
1. `pulumi up -y --skip-preview --logtostderr --logflow -v=9 2> logs.txt`

If you run the last line and leave it for a minute or so, then open the `logs.txt` that will be created, scroll right down the bottom you'll see the following error message: `Maximum number of Authorizers for this API has been reached.  Please contact AWS if you need additional Authorizers.`