#!/bin/sh

EMSCRIPTEN_FOLDER=/p/github/emsdk_portable/

if [ -z ${EMSCRIPTEN} ];
then source $EMSCRIPTEN_FOLDER/emsdk_env.sh;
fi;

CMD="emcc -std=c++11  -I`pwd`  \
repair_webm.cc \
mkvmuxer/mkv*.cc \
mkvparser/mkv*.cc \
common/file_util.cc \
common/hdr_util.cc \
--post-js post.js \
-s EXPORTED_FUNCTIONS=\"['_repairFile','_repairMegaBlob','_saySeven']\" \
-s ASYNCIFY=1 \
"
#-s MODULARIZE=1 -s EXPORT_NAME=\"'LibWebm'\" \

echo $CMD && eval $CMD


# var em_module = require('./a.out.js');
# var repair =  em_module.cwrap('repairFile', 'number', ['string', 'string']);
# repair('~/Downloads/recording.webm', '~/Downloads/recording3.webm')
