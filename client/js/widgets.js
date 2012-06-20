(function() {
  var Entry,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.wn = {};

  Entry = (function(_super) {

    __extends(Entry, _super);

    function Entry(params) {
      var pos, sample, samples_node, semlink, semlinks_node, _i, _j, _len, _len2, _ref, _ref2;
      Entry.__super__.constructor.call(this, params);
      this.sense = params.sense;
      this.node.addClass('wn_entry');
      this.node.append($("<span class='lemma'>" + this.sense.word.lemma + " </span>"));
      this.node.append($("<span class='sensenum'>[1] </span>"));
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
      this.node.append($("<span class='pos'>" + pos + " </span>"));
      this.node.append($("<span class='definition'>" + this.sense.synset.definition + ". </span>"));
      samples_node = this.node.append($("<span class='samples'></span>"));
      _ref = this.sense.synset.samples;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        sample = _ref[_i];
        samples_node.append($("<span class='sample'>" + sample + "</span>"));
      }
      semlinks_node = this.node.append($("<div class='semlinks'></div>"));
      _ref2 = this.sense.synset.semlinks;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        semlink = _ref2[_j];
        semlinks_node.append($("<span class='semlink'>" + semlink.target.id + " </span>"));
      }
      return this.node;
    }

    return Entry;

  })(fk.Widget);

  window.wn.Entry = Entry;

}).call(this);
