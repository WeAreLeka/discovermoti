<script>
	jQuery(document).ready(function () {

		var vidUrl = $("#splash > source").attr('src');

		// make sure the video is avalaible and if not, hide the video element to avoid black screen
		$.get(vidUrl).fail(function() {
			$("#splash").hide();
		});

		// get video width and height
		$("#splash").on("loadedmetadata", function () {
			$("#splash").css('visibility', 'visible');
			centerVid();
		});

		//functions declarations
		function centerVid() {
			$("#splash").css('right', (($(window).width()/2) - ($("#splash").width()/2)));
		}

		// update the video size and position on resize.
		$(window).resize(function() {
			centerVid();
		});
	});
</script>
