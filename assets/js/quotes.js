$('.random-quote-container').each(function() {
    let that = $(this);
    let quoteContentNode = that.children(".quote-content")[0];
    let quoteAuthorNode = that.children(".quote-author")[0];

    $.getJSON("./../quotes.json", function(quotes) {
        let randomIndex = Math.floor(Math.random()*quotes.length);
        let randomQuote = quotes[randomIndex];
        $(quoteContentNode).text("❝" + randomQuote["quote"] + "❞");
        $(quoteAuthorNode).text(randomQuote["author"]);
    });
});