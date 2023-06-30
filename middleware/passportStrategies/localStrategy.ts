import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { getUserByEmailIdAndPassword, getUserById} from "../../controllers/userController";
import { PassportStrategy } from '../../interfaces/index';

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = getUserByEmailIdAndPassword(email, password);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, {
        message: "User not found in database. Please register first."
      });
    }
  }
);

passport.serializeUser((user: Express.User, done) => {
  done(null, (user as any).id);
});

passport.deserializeUser((id: unknown, done) => {
  let user = getUserById(id as string);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});


const passportLocalStrategy: PassportStrategy = {
  name: 'local',
  strategy: localStrategy,
};

export default passportLocalStrategy;
