var setWidth = function(newWidth) {
    if (newWidth<minWidth)
        newWidth = minWidth;
    else if (newWidth>maxWidth)
        newWidth = maxWidth
    width = newWidth
    contextDraft.lineWidth = width;
    contextReal.lineWidth = width;
    $('#width-val').html(width);
}
var minWidth = 0.5,
    maxWidth = 100,
    defaultWidth = 20,
    interval = 5,
    widthSpan = document.getElementById('width_val');
    widthSlide = document.getElementById('width-set');

widthSlide.addEventListener('input', function(){
    newWidth = $('#width-set').val();
    setWidth(newWidth);
})
