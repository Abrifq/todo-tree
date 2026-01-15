#! /usr/local/bin/node

var fs = require( 'fs' );
var cp = require( "child_process" );

var raw = cp.execSync( "curl -s https://raw.githubusercontent.com/microsoft/vscode-codicons/main/src/template/mapping.json" ).toString();
var mappings = JSON.parse( raw );

var codicons = new Set();
for(const codiconID in mappings)
    for (const codiconName of mappings[codiconID]) 
        codicons.add(codiconName);

fs.writeFileSync( 'src/codiconNames.js', "module.exports = " + JSON.stringify( Array.from(codicons), null, 2 ) + ";\n" );
