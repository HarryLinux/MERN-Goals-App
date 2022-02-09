// @desc   GET goals
// @route  GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "GET goals" });
};

// @desc   SET goal
// @route  POST /api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "SET goals" });
};

// @desc   UPDATE goal
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `UPDATE goals ${req.params.id}` });
};

// @desc   DELETE goal
// @route  GET /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `DELETE goals ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
