// Game initialization
$(document).ready(function() {
    $('.game-status').text('Ready! Press the button to start');
    $('.start-btn').on('click', function() {
        $('.game-status').text('Game Started! Good luck!');
    });
});