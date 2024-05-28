# Run this proyect as a docker container
To run this proyect:  
1) Create a script named `contenerize_and_run_task_list.sh`  

2) As content of the file:
```sh
#!/bin/bash

# Clone repository
git clone https://github.com/j-madruga/task-list.git

# Move to directory
cd task-list

# Build image
docker build -t task-list-1 .

# Run image
docker run -d -p 8080:80 --name task-list-1 task-list-1
```

3) Give neccessary privileges to the file  
```sh
chmod +x contenerize_and_run_task_list.sh
```

4) Run script:
```sh
./contenerize_and_run_task_list.sh
```