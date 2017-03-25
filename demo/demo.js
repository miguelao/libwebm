var libwebm = require('../a.out.js').LibWebm;

var seven = libwebm._saySeven();

var repair =  libwebm.cwrap('repairFile', 'number', ['string', 'string']);
repair('/working/input.webm', '/working/output.webm')



var blob = new Blob(['blob data']);
var blobUrl = URL.createObjectURL(blob);

var repair2 =  libwebm.cwrap('repairMegaBlob', 'number', ['string', 'string']);
repair2(blobUrl, 'blabla')

/*
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
