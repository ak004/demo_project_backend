import * as users from "../controllers/users.js";

export default function (app) {
  app.route("/users").get(users.get_users);
}