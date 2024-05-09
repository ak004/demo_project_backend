import * as users from "../controllers/users.js";

export default function (app) {
  app.route("/get_users").get(users.get_users);
  app.route("/create_user").post(users.create_user);
  app.route("/get_userById").post(users.get_user);
}