$(function() {
  const verbs = ["killing", "ruining", "eating", "ending", "not buying", "getting rid of", "not having"];
  const nouns = ["email", "napkins", "diamonds", "houses", "golf", "capitalism", "the police", "God", "razors", "marriage", "the government", "cubicles", "savings accounts", "voting", "waiting 'til marriage", "Republicans", "this generation", "wine", "cereal", "bar soap", "basic human decency", "the sanctity of marriage", "in-person communication", "children", "gambling"];
  const reasons = ["they're lazy", "they're entitled", "of socialism", "they hate success", "they hate themselves", "they take too many vacations", "they don't take enough vacations", "I said so", "they were given participation trophies", "they're gay", "of smartphones", "of SJWs", "they live with their parents", "they leak government secrets", "they watch too much Netflix"];
  const things = ["entitlement", "communism", "kale", "excessive vacations", "social media", "selfies", "memes", "feelings", "participation trophies", "crowdfunding", "sexting", "the homosexual agenda", "the liberal agenda", "smartphones", "Pepe", "hashtags", "avocados", "emojis", "Netflix and chill"];

  function random(array) {
    return array[Math.floor(Math.random()*array.length)]
  }

  function getHeadline() { // doesn't work well when headlines is global
    const headlines = ["Millennials are " + random(verbs) + " " + random(nouns) + " because " + random(reasons), "Millennials are " + random(verbs) + " " + random(nouns) + " with " + random(things), "Millennials hate " + random(nouns) + " because " + random(reasons)];

    return random(headlines);
  }

  $("#headline").text(getHeadline());

  $("button").on("click", function() {
    $("#headline").text(getHeadline());
  });

});
