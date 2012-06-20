window.wn = {}

class Entry extends fk.Widget
    constructor: (params) ->
        super(params)
        @sense = params.sense
        
        @node.addClass('wn_entry')
        
        if @sense.pos == 'n' then pos = 'noun' else
        if @sense.pos == 'np' then pos = 'proper noun' else
        if @sense.pos == 'v' then pos = 'verb' else
        if @sense.pos == 'a' then pos = 'adj.' else
        if @sense.pos == 'r' then pos = 'adv.' else
        if @sense.pos == 's' then pos = 'adj. sat.'
        
        samples_inner = ''
        for sample in @sense.synset.samples
            samples_inner += "<span class='sample'>#{sample}</span>"
            
        semlinks_inner = ''
        for semlink in @sense.synset.semlinks
            semlink_inner = ''
            for linked_sense in semlink.target.senses
                semlink_inner += "<span class='linked_sense'>#{linked_sense.word.lemma}, </span>"
                
            semlinks_inner += "<span class='semlink'>#{semlink_inner}</span> - "
            
        @node.append($("""
                       <a class='title' href='##{@sense.word.lemma}[#{@sense.sensenum}]'><span class='lemma'>#{@sense.word.lemma}</span> <span class='sensenum'>[#{@sense.sensenum}]</span></a>
                       <span class='pos'>#{pos}</span>
                       <span class='definition'>#{@sense.synset.definition}.</span>
                       <span class='samples'>#{samples_inner}</span>
                       <div class='semlinks'>#{semlinks_inner}</div>
                       """))
        
        return @node
        
window.wn.Entry = Entry
