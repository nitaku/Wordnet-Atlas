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

@get('/hello')
def hello():
    return 'Hello!'
    