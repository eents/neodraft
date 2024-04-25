$('#open-neighbors-btn').click(function(){
    $('#open-neighbors-btn').css('z-index', -2)
    $('#neighbors').css('animation-name', 'open-neighbors')
    $('#close-neighbors-btn').fadeIn(2100)
    $('#close-neighbors-btn').css('display', 'flex')
    })

$('#close-neighbors-btn').click(function(){
    $('#open-neighbors-btn').css('z-index', 1)
    $('#neighbors').css('animation-name', 'close-neighbors')
    $('#close-neighbors-btn').fadeOut(600)
})

$(document).ready(function () {
        // Array of strings for subtitles
        var subtitles = [
            '"Talking to Cyber Spirits!"',
            '"Hidden Floor Discovered!"',
            '"Powered by Binaural Beats!"',
            '"Vibrations from the Void!"',
            '"Temporal Convergence Activated!"'
            // Add more strings as needed
        ];

        // Function to pick a random subtitle
        function getRandomSubtitle() {
            var randomIndex = Math.floor(Math.random() * subtitles.length);
            return subtitles[randomIndex];
        }

        // Initial subtitle on page load
        $('#index-subtitle').text(getRandomSubtitle());

        // Change subtitle on button click
        $('#change-subtitle-button').click(function () {
            var currentSubtitle = $('#index-subtitle').text();
            var newSubtitle;

            do {
                newSubtitle = getRandomSubtitle();
            } while (newSubtitle === currentSubtitle);

            // Shake effect on logo-img
            $('#logo-img').effect('shake', { times: 3, distance: 11 }, 666);

            $('#index-subtitle').fadeOut(400, function () {
                $(this).text(newSubtitle).fadeIn(400);
            });
        });
    });