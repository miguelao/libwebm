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

// Here we'd like to use a node.js approach.  For that, there's a post.js file
// where the single line below  is added, to facilitate exporting of (all)
// symbols.

module.exports.LibWebm = Module;
