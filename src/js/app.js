(function () {
"use strict";

    // todo construct for the sake of consistency

    function Todo(task, id){
        this.task = task;
        this.id = id;
    }

    // Model


    var model = {
        tasks: [
            new Todo('Do groceries', Date.now()),
            new Todo('Run 2 miles', Date.now()+1)
        ]
    };


    // Controller

    var controller = {
        init: function () {
            view.init();
        },

        getTasks: function () {
            return model.tasks;
        },

        addTask: function (task) {
            var id = this.getTasks().length + Date.now();
            var newTodo = new Todo(task, id);
            model.tasks.push(newTodo);
        }
    };


    // View

    var view = {
      init: function () {
          this.list = document.getElementById('list-ul');
          this.buttonAdd = document.getElementById('btn-add');
          this.addBox = document.getElementById('add');
          this.addTask = document.getElementById('add-task');
          this.addTaskDef = "Add your task";
          this.addTask.value = this.addTaskDef;
          this.addButton = document.getElementById('add-button');


          this.renderList();
          this.bindEvents();


      },
      renderList: function () {
          this.list.innerHTML = '';

          for (var i = controller.getTasks().length - 1; i >=0; i--){

              this.list.appendChild(this.generateLi(controller.getTasks()[i]));
          }

      },
        generateLi: function (task) {
            var newLi = document.createElement('li');
            newLi.setAttribute('class', 'list-li');
            newLi.innerHTML =  '<input type="checkbox" class="list-check" id="'+ task.id + '" /> <label class="list-txt" for="'+ task.id +'">' + task.task +' <span class="list-tick">X</span> </label>';

            return newLi;

        },
        addShow: function(){
            this.addBox.className = 'add-show';
        },
        addHide: function(){
            this.addBox.className = 'add-hide';
        },

        bindEvents: function () {

            document.addEventListener('click', function (event) {

                if (event.target === document.body){
                    view.addHide();
                }

            });


            this.buttonAdd.addEventListener('click', function(evt){
                evt.preventDefault();
                view.addShow();
            });

            this.addTask.addEventListener('focus', function () {
                view.addTask.value = '';
            });

            this.addTask.addEventListener('blur', function () {
                if (view.addTask.value === ''){
                    view.addTask.value = view.addTaskDef;
                }
            });

            this.addButton.addEventListener('click', function(){
                controller.addTask(view.addTask.value);
                view.renderList();
                view.addHide();
                view.addTask.value = view.addTaskDef;

            });



        }
    };

    controller.init();

}());