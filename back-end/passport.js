const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new GitHubStrategy({
  clientID: "adfd89cb994f24e4b937",
  clientSecret: "2cf0e4d93a351ee6b218f01b6ce17c584c9242c0",
  callbackURL: "http://localhost:4000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));