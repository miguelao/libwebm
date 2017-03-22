
// An emscripten-generated a.out.js can be simply included as another
// script on a series ( <script src="../a.out.js"> </script> ), and then its
// guts are available via Module.cwrap(), for eaxmple.
//
// var repair =  Module.cwrap('repairFile', 'number', ['string', 'string']);
// repair('/working/input.webm', '/working/output.webm')
//
// where 'repairFile' should be exported at emcc compile time like
//  -s EXPORTED_FUNCTIONS="['_repairFile']"
//
// https://kripken.github.io/emscripten-site/docs/api_reference/module.html

// Here we'd like to use a node.js approach.  For that, there's a post.js
// file where a single line
//  module.exports.LibWebm = Module;
// is added, to facilitate exporting of (all) symbols.
var libwebm = require('../a.out.js').LibWebm;


var seven = libwebm._saySeven();

var repair =  libwebm.cwrap('repairFile', 'number', ['string', 'string']);
repair('/working/input.webm', '/working/output.webm')


/*

var blob = new Blob(['blob data']);
//FS.mkdir('/working');
//FS.mount(WORKERFS, {
//  blobs: [{ name: 'input.webm', data: blob }],
//  //files: files, // Array of File objects or FileList
//}, '/working');


console.log('loading repair()');
var repair =  Module.cwrap('repairFile', 'number', ['string', 'string']);

console.log('repair()ing');
repair('/working/input.webm', '/working/output.webm')
*/
