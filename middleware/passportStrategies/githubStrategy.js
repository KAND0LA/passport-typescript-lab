"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_github2_1 = require("passport-github2");
const githubStrategy = new passport_github2_1.Strategy({
    clientID: "fe591319a37ddfd0c519",
    clientSecret: "02ab37719b2d302ddf7a030c0162d8776051554b",
    callbackURL: "http://localhost:8000/auth/github/callback",
    passReqToCallback: true,
}, function (req, accessToken, refreshToken, profile, done) {
    // Here you could potentially find or create a user in your database
    // For the sake of simplicity, we're just returning the profile
    done(null, profile);
});
const passportGitHubStrategy = {
    name: 'github',
    strategy: githubStrategy,
};
exports.default = passportGitHubStrategy;
