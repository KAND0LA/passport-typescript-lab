import { Strategy as GitHubStrategy } from 'passport-github2';
import { PassportStrategy } from '../../interfaces/index';

const githubStrategy = new GitHubStrategy(
    {
        clientID: "fe591319a37ddfd0c519",
        clientSecret: "02ab37719b2d302ddf7a030c0162d8776051554b",
        callbackURL: "http://localhost:8000/auth/github/callback",
        passReqToCallback: true,
    },
    
    function (req: any, accessToken: any, refreshToken: any, profile: any, done: any) {
        // Here you could potentially find or create a user in your database
        // For the sake of simplicity, we're just returning the profile
        done(null, profile);
    }
);

const passportGitHubStrategy: PassportStrategy = {
    name: 'github',
    strategy: githubStrategy,
};

export default passportGitHubStrategy;
