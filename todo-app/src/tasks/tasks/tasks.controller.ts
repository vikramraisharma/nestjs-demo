import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Task } from '../task.entity';
import { TasksService } from '../tasks.service';

// all of your API routes will be off of the tasks controller. see comments below
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    // This means to get all tasks, you will hit "localhost:3000/tasks/" in postman
    @Get()
    index(): Promise<Task[]>{
        return this.tasksService.findAll()
    }

    // This means to edit a task, you will hit "localhost:3000/tasks/create" in postman
    @Post('create')
    async create(@Body() taskData: Task): Promise<any>{
        return this.tasksService.create(taskData)
    }

    // To update a task, hit "localhost:3000/tasks/1/update" or any other ID
    @Put(':id/update')
    async update(@Param('id') id, @Body() taskData: Task): Promise<any>{
        taskData.id = Number(id);
        console.log('Update #: ' + taskData.id);
        return this.tasksService.update(taskData)
    }

    // To delete a task, hit "localhost:3000/tasks/1/delete" or any other ID
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any>{
        return this.tasksService.delete(id);
    }
}
