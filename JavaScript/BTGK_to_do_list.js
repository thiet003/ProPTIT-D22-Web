const formInput = document.querySelector("#taskInput")
const listTask = document.querySelector("#listTask")
const listCompleted = document.querySelector("#listCompleted")
const listOverdue = document.querySelector("#listOverdue")
const typeWork = document.querySelector("#typeWork")
//localStorage.clear()
typeWork.addEventListener('change', function (e) {
    if (typeWork.value == "addTypeWork") {
        const modal = document.querySelector("#myModal")
        modal.querySelector("h2").textContent = ""
        modal.querySelector("p").textContent = ""
        modal.querySelector("input").style.display = "block"
        modal.querySelector("#cancel").addEventListener('click', function (e) {
            modal.querySelector("input").style.display = "none"
            modal.style.display = "none"

        })
        modal.querySelector("#ok").addEventListener('click', function (e) {
            modal.querySelector("input").style.display = "none"
            modal.style.display = "none"
            const option = document.createElement("option")
            option.value = modal.querySelector("input").value.trim()
            option.textContent = option.value
            option.setAttribute("selected", true)
            typeWork.appendChild(option)
        })
        modal.style.display = "block"
    }
})

document.querySelector("#pickSort").addEventListener('change', function (e) {
    displayListTask(pickSort, document.querySelector("#pickTypeWork").value)

})

document.querySelector("#pickTypeWork").addEventListener('change', function (e) {
    displayListTask(pickSort, document.querySelector("#pickTypeWork").value)
})

function countDayLeft(dl) {
    if (dl == "") return 10;
    const today = new Date();
    const y = (dl[0] - '0') * 1000 + (dl[1] - '0') * 100 + (dl[2] - '0') * 10 + (dl[3] - '0');
    const m = (dl[5] - '0') * 10 + (dl[6] - '0');
    const d = (dl[8] - '0') * 10 + (dl[9] - '0')
    const dayDl = y * 365 + m * 30 + d

    const year = today.getFullYear()
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dayNow = year * 365 + month * 30 + day;
    return dayDl - dayNow;
}

formInput.addEventListener('submit', function (e) {
    e.preventDefault()
    const task = document.querySelector("#form").cloneNode(true); // không clone value của select nên gán chay
    task.querySelector("#priority").value = formInput.querySelector("#priority").value
    task.querySelector("#typeWork").value = formInput.querySelector("#typeWork").value
    setPriorityForDeadline(task)
    addTaskToLocalStorage(task)
    displayListTask(pickSort, document.querySelector("#pickTypeWork").value)
    if(typeWork.options.length > 5){
        typeWork.querySelectorAll("option")[typeWork.length-1].removeAttribute("selected")
        console.log(typeWork.length );
        
    }   
    formInput.reset()

})

function pickSort() {
    const sort = document.querySelector("#pickSort").value
    if (sort == "Ưu tiên") {
        sortTaskByPriority(listTask)
        sortTaskByPriority(listCompleted)
        sortTaskByPriority(listOverdue)
    }
    else if (sort == "A -> Z") {
        sortTaskByA_Z(listTask)
        sortTaskByA_Z(listCompleted)
        sortTaskByA_Z(listOverdue)
    }
    else if (sort == "Z -> A") {
        sortTaskByZ_A(listTask)
        sortTaskByZ_A(listCompleted)
        sortTaskByZ_A(listOverdue)
    }
    else console.log("pickSort eroll");

}

function addButton(task) {

    const typeWork = task.querySelector("#typeWork")
    typeWork.addEventListener('change', function (e) {
        if (typeWork.value == "addTypeWork") {
            const modal = document.querySelector("#myModal")
            modal.querySelector("h2").textContent = ""
            modal.querySelector("p").textContent = ""
            modal.querySelector("input").style.display = "block"
            const value = typeWork.value
            modal.querySelector("#cancel").addEventListener('click', function (e) {
                typeWork.value = value
                modal.querySelector("input").style.display = "none"
                modal.style.display = "none"

            })
            modal.querySelector("#ok").addEventListener('click', function (e) {
                modal.querySelector("input").style.display = "none"
                modal.style.display = "none"
                const option = document.createElement("option")
                option.value = modal.querySelector("input").value.trim()
                option.textContent = option.value
                option.setAttribute("selected", true)
                typeWork.appendChild(option)
                repairInLocal(task)
            })
            modal.style.display = "block"
        }
    })

    const completedTask = task.querySelector("#completed")
    completedTask.addEventListener('change', function (e) {
        if (completedTask.value == "false") {
            //listCompleted.appendChild(task)
            completedTask.value = "true"
            repairInLocal(task)
            displayListTask(pickSort, document.querySelector("#pickTypeWork").value)
        }
        else {
            //listTask.appendChild(task)           
            completedTask.value = "false"
            repairInLocal(task)
            displayListTask(pickSort, document.querySelector("#pickTypeWork").value)
        }
    })

    const div = document.createElement("div");
    task.appendChild(div)
    // div.style. = {
        div.style.display = "flex"
        div.style.justifyContent = "space-around"
        

   // }

    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Xóa"
    div.appendChild(deleteTask)
    deleteTask.addEventListener('click', function (e) {
        const modal = document.querySelector("#myModal")
        modal.querySelector("h2").textContent = ""
        modal.querySelector("p").textContent = "Xác nhận xóa"
        modal.querySelector("#cancel").addEventListener('click', function (e) {
            modal.style.display = "none"

        })
        modal.querySelector("#ok").addEventListener('click', function (e) {
            modal.style.display = "none"

            deleteInLocalStrorage(task)
            displayListTask(pickSort, document.querySelector("#pickTypeWork").value)
        })
        modal.style.display = "block"
    })

    const repairTask = document.createElement("button")
    repairTask.textContent = "Sửa"
    div.appendChild(repairTask)
    repairTask.addEventListener('click', function (e) {
        //task.querySelector("#title").removeAttribute("disabled")       title làm id
        task.querySelector("#description").removeAttribute("disabled")
        task.querySelector("#deadline").removeAttribute("disabled")
        task.querySelector("#priority").removeAttribute("disabled")
        task.querySelector("#typeWork").removeAttribute("disabled")
    })

    const saveTask = document.createElement("button")
    saveTask.textContent = "Lưu"
    div.appendChild(saveTask)
    saveTask.addEventListener('click', function (e) {
        const modal = document.querySelector("#myModal")
        modal.querySelector("h2").textContent = ""
        modal.querySelector("p").textContent = "Xác nhận lưu"
        modal.querySelector("#cancel").addEventListener('click', function (e) {
            modal.style.display = "none"

        })
        modal.querySelector("#ok").addEventListener('click', function (e) {
            modal.style.display = "none"
            const t = task.cloneNode(true); // không clone value của select nên gán chay
            t.querySelector("#priority").value = task.querySelector("#priority").value
            t.querySelector("#typeWork").value = task.querySelector("#typeWork").value
            setPriorityForDeadline(t)
            repairInLocal(t)
            displayListTask(pickSort, document.querySelector("#pickTypeWork").value)
        })
        modal.style.display = "block"

    })

}

function disabledTask(task) {
    task.querySelector("#title").setAttribute("disabled", true)
    task.querySelector("#description").setAttribute("disabled", true)
    task.querySelector("#deadline").setAttribute("disabled", true)
    task.querySelector("#priority").setAttribute("disabled", true)
    task.querySelector("#typeWork").setAttribute("disabled", true)
}


function setPriorityForDeadline(task) {
    return new Promise(resolve => {
        const day = countDayLeft(task.querySelector("#deadline").value)
        const priority = task.querySelector("#priorityForDeadline")
        priority.removeAttribute("disabled")
        if (day < 0) task.querySelector("#o4").setAttribute("selected", true)
        else if (day < 2) task.querySelector("#o3").setAttribute("selected", true)
        else if (day < 4) task.querySelector("#o2").setAttribute("selected", true)
        else task.querySelector("#o1").setAttribute("selected", true)
        priority.setAttribute("disabled", true)
    });
}

function confirmationNotice(title, content) {
    const modal = document.querySelector("#myModal")
    modal.querySelector("h2").textContent = title
    modal.querySelector("p").textContent = content
    modal.querySelector("#cancel").addEventListener('click', function (e) {
        modal.style.display = "none"
        return 0;
    })
    modal.querySelector("#ok").addEventListener('click', function (e) {
        modal.style.display = "none"
        return 1;
    })
    modal.style.display = "block"
}

function sortTaskByPriority(container) { //list
    const list = container.querySelectorAll("#form")
    for (let i = 0; i < list.length; i++) {
        let order = 0
        const priority = list[i].querySelector("#priority")
        if (priority.value == "Cao") order += 1
        else if (priority.value == "Trung bình") order += 5
        else order += 10 // thấp

        const priorityForDl = list[i].querySelector("#priorityForDeadline")
        if (priorityForDl.value == "Gấp") order += 3
        else if (priorityForDl.value == "Hơi gấp") order += 6
        else order += 20  // thoải mái
        list[i].style.order = order
    }
}

function sortTaskByA_Z(container) {
    const listForm = container.querySelectorAll("#form")
    const list = Array.from(listForm);
    list.sort((a, b) => a.querySelector("#title").value.localeCompare(b.querySelector("#title").value));
    container.innerHTML = "";
    list.forEach(x => container.appendChild(x));
}

function sortTaskByZ_A(container) {
    const listForm = container.querySelectorAll("#form")
    const list = Array.from(listForm);
    list.sort((a, b) => a.querySelector("#title").value.localeCompare(b.querySelector("#title").value));
    container.innerHTML = "";
    list.reverse()
    list.forEach(x => container.appendChild(x));
}

function onlyShowTypeWorkTogether(container, val) {
    const list = container.querySelectorAll("#form")
    for (let i = 0; i < list.length; i++) {
        const select = list[i].querySelector("#typeWork")
        if (select.value != val && val != "Tất cả") {
            list[i].style.display = "none"
        } else list[i].style.display = "block"
    }
}

function addTaskToLocalStorage(taskInput) {  // form       
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(convertFormToObject(taskInput));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayListTask(sort, typeWork) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    listTask.innerHTML = ""
    listCompleted.innerHTML = ""
    listOverdue.innerHTML = ""

    tasks.forEach(task => {
        const form = convertObjToDom(task)
        addButton(form)
        if (task.typeWork != typeWork && typeWork != "Tất cả") {
            // không hiện            
        }
        else if (task.priorityForDeadline == "overTime") {
            listOverdue.appendChild(form);

        } else if (task.completed == "true") {
            form.querySelector("#completed").checked = true
            listCompleted.appendChild(form)
        } else {
            form.querySelector("#completed").checked = false
            listTask.appendChild(form)
        }
    });
    sort()
}

window.onload = function () {
    displayListTask(pickSort, document.querySelector("#pickTypeWork").value);
};

function convertFormToObject(form) {
    task = {
        title: form.querySelector("#title").value,
        description: form.querySelector("#description").value,
        deadline: form.querySelector("#deadline").value,
        priorityForDeadline: form.querySelector("#priorityForDeadline").value,
        priority: form.querySelector("#priority").value,
        typeWork: form.querySelector("#typeWork").value,
        completed: form.querySelector("#completed").value,
    }
    return task;
}

function convertObjToDom(objTask) {
    let domTask = document.querySelector("#form").cloneNode(true);
    domTask.querySelector("#submit").remove()
    domTask.querySelector("#priorityForDeadline").style.display = "block"
    domTask.querySelector("#completed").style.display = "block"

    domTask.querySelector("#title").value = objTask.title
    domTask.querySelector("#description").value = objTask.description
    domTask.querySelector("#deadline").value = objTask.deadline
    domTask.querySelector("#priorityForDeadline").value = objTask.priorityForDeadline
    domTask.querySelector("#priority").value = objTask.priority

    const typeWork = domTask.querySelector("#typeWork")
    let ok = 1
    for(let i = 0; i < typeWork.length; i++){
        if(objTask.typeWork == typeWork.querySelectorAll("option")[i].value){
            domTask.querySelector("#typeWork").value = objTask.typeWork
            ok = 0;
            break;
        }
    }
    if(ok == 1){
        const option = document.createElement("option")
        option.value = objTask.typeWork
        option.textContent = option.value
        option.setAttribute("selected", true)
        domTask.querySelector("#typeWork").appendChild(option)
    }
       
    domTask.querySelector("#completed").value = objTask.completed
    disabledTask(domTask)
    return domTask;
}

function deleteInLocalStrorage(taskDom) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTasks = []
    tasks.forEach(task => {
        if (JSON.stringify(task, ["title", "description"]) != JSON.stringify(convertFormToObject(taskDom), ["title", "description"])) {
            newTasks.push(task)
        }
    });
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}

function repairInLocal(form) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let i = 0; i < tasks.length; i++) {
        if (JSON.stringify(tasks[i], ["title"]) == JSON.stringify(convertFormToObject(form), ["title"])) {
            tasks[i] = convertFormToObject(form)
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// document.querySelector("#darkmode").addEventListener('click', function(e){
//     if(document.querySelector("#darkmode").checked){
//         document.querySelectorAll("*").forEach(function(e) {
            
//             e.style.background = "black"
//             e.style.color = "white";
//             e.style.border = "1px solid white "
//           });
        
       
//     }else{
//         document.querySelectorAll("*").forEach(function(e) {
//             e.style.color = "black";
//             e.style.background = "white"
//             e.style.opacity = 1
//         });
//     }
// })