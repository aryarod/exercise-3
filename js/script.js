console.log("connected!")

$(document).ready(function () {
    var characterState = 1; // Initial state
    var imagePathPrefix = 'images/state'; // Change 'images/' to the actual path where your images are stored

    /*
    // Mouseover event
    $('#character').on('mouseover', function () {
        characterState = (characterState % 5) + 1;
        updateCharacterState();
    });
    */

    // Click event
    $('#character').on('click', function () {
        characterState = (characterState % 5) + 1;
        updateCharacterState();
    });

    // Function to update character state
    function updateCharacterState() {
        var imagePath = imagePathPrefix + characterState + '.png';
        $('#character').attr('src', imagePath);
    }
});