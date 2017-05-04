var ClozeCard = function(text, cloze) {
	if (!(this instanceof ClozeCard)) { 
    return new ClozeCard(text,cloze);
  }
    this.cloze = cloze;
    this.fullText = text;
    this.partialParse = function(text, cloze) {
        var origText = text;
        var partialText = text.replace(cloze, "...");
        if (origText === partialText) {
            console.log("CLOZE NOT CONTAINED IN ORIGINAL TEXT")
            return text;
        } else {
            return partialText
        }
    };
    this.partial = this.partialParse(text, cloze)
};

module.exports = ClozeCard;
