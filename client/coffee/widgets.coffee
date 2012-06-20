window.wn = {}

class Entry extends fk.Widget
    constructor: (params) ->
        super(params)
        @sense = params.sense
        
        @node.addClass('wn_entry')
        
        @node.append($("<span class='lemma'>#{@sense.word.lemma} </span>"))
        @node.append($("<span class='sensenum'>[1] </span>"))
        
        if @sense.pos == 'n' then pos = 'noun' else
        if @sense.pos == 'np' then pos = 'proper noun' else
        if @sense.pos == 'v' then pos = 'verb' else
        if @sense.pos == 'a' then pos = 'adj.' else
        if @sense.pos == 'r' then pos = 'adv.' else
        if @sense.pos == 's' then pos = 'adj. sat.'
        
        @node.append($("<span class='pos'>#{pos} </span>"))
        @node.append($("<span class='definition'>#{@sense.synset.definition}. </span>"))
        
        samples_node = @node.append($("<span class='samples'></span>"))
        for sample in @sense.synset.samples
            samples_node.append($("<span class='sample'>#{sample}</span>"))
        
        semlinks_node = @node.append($("<div class='semlinks'></div>"))
        for semlink in @sense.synset.semlinks
            semlinks_node.append($("<span class='semlink'>#{semlink.target.id} </span>"))
        
        return @node
        
window.wn.Entry = Entry
