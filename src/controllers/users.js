import Users from "../models/users.js";
import UserRoles from "../models/user_roles.js";
import Indivdual_tax_payer from "../models/indivdual_tax_payer.js";
import User_Roles from "../models/user_roles.js";
import Role_permission from "../models/role_permission.js";

// testing the wheter the api can be reached
export const get_users = function (req, res) {
    res.status(200).json({
      // success: yest_mesage,
      data: [
        {
          name: "John Doe",
          email: "something@gmal.com",
        },
      ],
    });
  };