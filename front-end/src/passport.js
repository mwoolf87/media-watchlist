const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new GitHubStrategy({
    clientID: "adfd89cb994f24e4b937",
    clientSecret: "f720d7e40b5125783b7c600f598e194712ee4939",
    callbackURL: "https://media-watch-list.herokuapp.com/watchlist"
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));