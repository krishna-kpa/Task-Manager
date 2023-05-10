const express = require('express');
const router = express.Router();
const {
        getAllTasks,
        createTask,
        getTask,
        updateTask,
        deleteTask
      } = require("../controllers/tasks");



router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


router.route('/view').get(getTask);
router.route('/update').get(updateTask);
router.route('/delete').get(deleteTask);

module.exports = router;