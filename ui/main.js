var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementByID('count');
    span.innerHTML = counter.toString();
    alert(counter.toString());
};

