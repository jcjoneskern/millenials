$(function() {
  const verbs = ["killing", "ruining", "eating", "ending", "not buying", "getting rid of"];
  const nouns = ["email", "napkins", "diamonds", "houses", "golf", "typewriters", "yachts", "capitalism", "the police", "God", "razors", "marriage", "the government", "cubicles", "savings accounts", "voting", "waiting 'til marriage", "Republicans", "this generation", "wine", "cereal", "bar soap", "basic human decency", "the sanctity of marriage"];
  const reasons = ["they're lazy", "they're entitled", "of socialism", "they hate success", "they hate themselves", "they take too many vacations", "they don't take enough vacations", "I said so", "they were given participation trophies", "they're gay", "of smartphones", "of SJWs", "they live with their parents"];
  const things = ["entitlement", "communism", "kale", "excessive vacations", "social media", "selfies", "memes", "feelings", "participation trophies", "crowdfunding", "sexting", "the homosexual agenda", "the liberal agenda", "smartphones", "Pepe", "hashtags", "avocados"]

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
    let thing = function() {
      return things[Math.floor(Math.random()*things.length)];
    }

    const headlines = ["Millennials are " + verb() + " " + noun() + " because " + reason(), "Millennials are " + verb() + " " + noun() + " with " + thing(), "Millennials hate " + noun() + " because " + reason()];
    let headline = function() {
      return headlines[Math.floor(Math.random()*headlines.length)];
    }

    return headline();
  }

  $("#headline").text(getHeadline());

  $("button").on("click", function() {
    $("#headline").text(getHeadline());
  });

});
