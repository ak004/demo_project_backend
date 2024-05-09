import Users from "../models/users.js";
import UserRoles from "../models/user_roles.js";
import Indivdual_tax_payer from "../models/indivdual_tax_payer.js";
import User_Roles from "../models/user_roles.js";
import Role_permission from "../models/role_permission.js";
import users from "../routes/users.js";

// testing the wheter the api can be reached
export const get_users = function (req, res) {

  Users.find({}).then((users) => {
    res.status(200).json({
      data:users
    });

  })

  };


  export const create_user = function (req, res) {
   const {username, email, passowrd} = req.body;

    const user = new Users({
      userName:username,
      userEmail:email,
      password:passowrd,
      user_type:"admin"
    });
    user.save().then((user) => {
      res.status(200).json({
        data:user
      });
    })
  }

  export const get_user = function (req, res) {
    const {id} = req.body;

    Users.findById({_id:id}).then((user) => {
      res.status(200).json({
        data:user
      });
    })
  }