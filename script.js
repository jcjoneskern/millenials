$(function() {
  const verbs = ["killing", "ruining", "eating", "obliterating", "aren't buying"];
  const nouns = ["napkins", "diamonds", "houses", "golf", "typewriters", "yachts", "capitalism", "the police", "God", "razors", "avocados"];
  const reasons = ["they're lazy", "they're entitled", "communism", "they hate success", "they hate themselves", "they buy too much kale", "they take too many vacations", "they don't take enough vacations"];
  // const headlines = ["Millenials are " + verb() + " " + noun() + " because " + reason(), "Millenials are " + verb() + " " + noun() + " with " + reason()];

  function getHeadline() {
    let verb = function() {
      return verbs[Math.floor(Math.random()*verbs.length)];
    }
    let noun = function() {
      return nouns[Math.floor(Math.random()*nouns.length)];
    }
    let reason = function() {
      return reasons[Math.floor(Math.random()*reasons.length)];
    }

    let headline = "Millenials are " + verb() + " " + noun() + " because " + reason();
    return headline;
  }

  $("button").on("click", function() {
    let headline = getHeadline();
    $("#headline").text(headline);
  });

});


// Millenials are xing y because z
// Millenials are xing y with z
// Millenials hate y because z
// Millenials can't a because z
