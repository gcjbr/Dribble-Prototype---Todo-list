(function () {
"use strict";

    // todo construct for the sake of consistency

    function Todo(task, id){
        this.task = task;
        this.id = id;
    }

    // Model

    // Initializing a model with a few tasks

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
          controller.addTask('teste');
          this.renderList();

      },
      renderList: function () {


          for (var i = controller.getTasks().length - 1; i >=0; i--){

              this.list.appendChild(this.generateLi(controller.getTasks()[i]));
          }

      },
        generateLi: function (task) {
            var newLi = document.createElement('li');
            newLi.setAttribute('class', 'list-li');
            var liHtml = '<input type="checkbox" class="list-check" id="'+ task.id + '" /> <label class="list-txt" for="'+ task.id +'">' + task.task +' <span class="list-tick">X</span> </label>';
            newLi.innerHTML = liHtml;

            return newLi;

        }
    };

    controller.init();

}());

/*


$(function() {

    // vars

    $list = $('#list-ul');
    $newLi = "<li class='list-li'><input type='checkbox' class='list-check' id='item3' /><label class='list-txt' for='item3'>Finish this list<span class='list-tick'>X</span></label></li>";
    $buttonAdd = $('.button-add');
    $add = $('.add');

    // bindings


    $buttonAdd.on("click", function(e){
        e.preventDefault();
        e.stopPropagation();

        $add.slideToggle();


    });


    $(document).click(function(){
        $add.slideUp();
    });


    $add.click(function(e){
        e.stopPropagation();
    });

    // set initial states




});*/
