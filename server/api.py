from bottle import get, post, request, response, abort, view
import json

import pymongo
from pymongo.objectid import ObjectId
from pymongo import json_util
def xjson_dumps(d):
    return json.dumps(d, default=json_util.default)
def xjson_loads(s):
    return json.loads(s, object_hook=json_util.object_hook)

mongo = pymongo.Connection('opendata')

@get('/senses/<lang>/<lemma>[<sensenum:int>]')
def get_sense(lang, lemma, sensenum):
    try:
        sense = mongo.wordnet.senses.find({'lang': lang, 'word.lemma': lemma})[sensenum-1]
    except IndexError:
        abort(404, 'No such word sense.')
        
    return xjson_dumps(sense)
    