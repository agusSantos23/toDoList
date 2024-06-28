import Task from '../models/task.model.js'

export const getTasks = async (req,res) => {

    const tasks = await Task.find({
        user: req.user.id
    })
    res.json(tasks)
}

export const createdTasks = async (req,res) => {
    const {title,completed} = req.body
    const newTask = new Task({
        title,
        completed,
        user: req.user.id
    })
    const saveTask = await newTask.save()

    res.json(saveTask);
}

export const getTask = async (req,res) => {

    const task = await Task.findById(req.params.id)

    if(!task)return res.status(404).json({message: "Task not found"})

    res.json(task)
}

export const deleteTasks = async (req,res) => {

    const task = await Task.findByIdAndDelete(req.params.id)

    if(!task)return res.status(404).json({message: "Task not found"})

    res.sendStatus(204)
}

export const updateTasks = async (req,res) => {

    const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
    if(!task)return res.status(404).json({message: "Task not found"})
    res.json(task)

}

