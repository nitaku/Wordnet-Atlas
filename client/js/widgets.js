(function() {
  var Entry,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.wn = {};

  Entry = (function(_super) {

    __extends(Entry, _super);

    function Entry(params) {
      var linked_sense, pos, sample, samples_inner, semlink, semlink_inner, semlinks_inner, _i, _j, _k, _len, _len2, _len3, _ref, _ref2, _ref3;
      Entry.__super__.constructor.call(this, params);
      this.sense = params.sense;
      this.node.addClass('wn_entry');
      if (this.sense.pos === 'n') {
        pos = 'noun';
      } else {

      }
      if (this.sense.pos === 'np') {
        pos = 'proper noun';
      } else {

      }
      if (this.sense.pos === 'v') {
        pos = 'verb';
      } else {

      }
      if (this.sense.pos === 'a') {
        pos = 'adj.';
      } else {

      }
      if (this.sense.pos === 'r') {
        pos = 'adv.';
      } else {

      }
      if (this.sense.pos === 's') pos = 'adj. sat.';
      samples_inner = '';
      _ref = this.sense.synset.samples;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        sample = _ref[_i];
        samples_inner += "<span class='sample'>" + sample + "</span>";
      }
      semlinks_inner = '';
      _ref2 = this.sense.synset.semlinks;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        semlink = _ref2[_j];
        semlink_inner = '';
        _ref3 = semlink.target.senses;
        for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
          linked_sense = _ref3[_k];
          semlink_inner += "<span class='linked_sense'>" + linked_sense.word.lemma + ", </span>";
        }
        semlinks_inner += "<span class='semlink'>" + semlink_inner + "</span> - ";
      }
      this.node.append($("<a class='title' href='#" + this.sense.word.lemma + "[" + this.sense.sensenum + "]'><span class='lemma'>" + this.sense.word.lemma + "</span> <span class='sensenum'>[" + this.sense.sensenum + "]</span></a>\n<span class='pos'>" + pos + "</span>\n<span class='definition'>" + this.sense.synset.definition + ".</span>\n<span class='samples'>" + samples_inner + "</span>\n<div class='semlinks'>" + semlinks_inner + "</div>"));
      return this.node;
    }

    return Entry;

  })(fk.Widget);

  window.wn.Entry = Entry;

}).call(this);
