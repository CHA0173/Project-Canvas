$(document).ready(function(){

    $('#drawing-clear').click(function(){

        var elem = $(this).closest('button');

        $.confirm({
            'title'     : 'Clear Canvas Confirmation',
            'message'   : 'Any unsaved changes will be lost! <br />It cannot be restored at a later time! Continue?',
            'buttons'   : {
                'Yes'   : {
                    'class' : 'blue',
                    'action': function(){
                        //canvas.width = canvas.width;
                        contextDraft.clearRect(0,0,canvasDraft.width,canvasReal.height)
                        contextReal.clearRect(0,0,canvasReal.width,canvasReal.height)
                        ctx3.clearRect(0,0,canvasReal.width,canvasReal.height)
                        ctx4.clearRect(0,0,canvasReal.width,canvasReal.height)

                        //elem.slideUp();
                    }
                },
                'No'    : {
                    'class' : 'gray',
                    'action': function(){}  // Nothing to do in this case. You can as well omit the action property.
                }
            }
        });

    });



});


