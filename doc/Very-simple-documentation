# Little documentation

This is a very simple documentation. 

Replace `{{host}}` by your hostname (e.g. http://localhost:3000)

:bulb: Route `GET {{host}}/` will redirect to `GET {{host}}/tasks`

## Access all the tasks

  ```
  GET {{host}}/tasks
  ``` 
  Returns a json with all the tasks in you DB, if there is no task, it will return an empty array : `[]`

## Access all the tasks

```
GET {{host}}/tasks
``` 
Returns a json with all the tasks in you DB, if there is no task, it will return an empty array : `[]`

## Access one task

```
GET {{host}}/tasks/{id}
``` 
You need to give the id of the task in the URL
e.g. : `http://localhost:5000/tasks/1`


Returns a json with the task corresponding to the id (if it exists).

If there is no task, it will return a message "Task not found"

## Create one task

```
POST {{host}}/tasks
``` 
You need to send a json with the following informations:
| FIELD | TYPE OF DATA | REQUIRED ?
| :---: | :---: | :---: |
| name | string | yes |
| completed | boolean | no |

Returns a json with the task created, or an error message if there is a problem

## Update one task

```
PATCH {{host}}/tasks/{id}
``` 
You need to give the id of the task in the URL
e.g. : `http://localhost:5000/tasks/1`

You also need to send a json with at least one of the following informations:
| FIELD | TYPE OF DATA | REQUIRED ?
| :---: | :---: | :---: |
| name | string | no |
| completed | boolean | no |

Returns a json with the updated task corresponding to the id (if it exists).

If there is no task, it will return a error message

## Delete one task

```
DELETE {{host}}/tasks/{id}
``` 
You need to give the id of the task in the URL
e.g. : `http://localhost:5000/tasks/1`

Returns a message "Task deleted".

If there is no task, it will return a message "Task not found"
