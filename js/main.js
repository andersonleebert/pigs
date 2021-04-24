(function () {
    // Event Handlers
    $('.bucketPicker').on('click', function(event) {
    	PickBucket($(this).data('bucket'));
    });

    $('#buckerNavItem').on('click', function(event) {
    	ShowBucketPicker();
    });

	// Functions
	function PickBucket(targetBucketType){
		HideBucketPicker();
		HideBucketViews();
		ShowBucketView(targetBucketType);
	}

    // Generics
    function GetBucketView(targetBucketType){
		return $('.bucketView').filter(function() {
			return $(this).data('bucket') === targetBucketType;
		});
	}
	function ShowBucketView(targetBucketType){
		var bucketView = GetBucketView(targetBucketType);
		bucketView.show();
	}
	function HideBucketViews(){
		$('.bucketView').hide();
	}
	function HideBucketPicker(){
		return $('#bucketPicker').slideUp('fast');
	}
	function ShowBucketPicker(){
		return $('#bucketPicker').slideDown('fast');
	}
})();