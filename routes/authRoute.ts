import express from "express";
import passport from 'passport';
import { forwardAuthenticated } from "../middleware/checkAuth";

const router = express.Router();

router.get("/login", forwardAuthenticated, (req, res) => {
  res.render("login");
})

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) { 
      return next(err); 
    }
    if (!user) { 
      // Redirect to the login page with an error message
      return res.redirect('/auth/login?error=' + info.message); 
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      return res.redirect('/dashboard');
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
  });
  res.redirect("/auth/login");
});

export default router;
