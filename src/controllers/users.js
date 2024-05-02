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