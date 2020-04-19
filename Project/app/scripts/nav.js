var initids = new Array();
    var selectedSection = '<?php echo $_SESSION['selectedSection'];?>';
    var selectedMajor = '<?php echo $_SESSION['selectedMajor'];?>';
    console.log(selectedSection + selectedMajor);
    $(document).ready(function(){
        if(selectedSection && selectedMajor){
            $('#sectionMenu').val(selectedMajor + ' ' + selectedSection);
        }
    })
	/* This function is on initial load and takes care of first nav dropdown */
	$(function(){
        var selectedCourse = $("#sectionMenu").val().split(" ");
        console.log(selectedCourse[0] + " " + selectedCourse[1]);
        var descriptions = new Array();
        var firstOutcome;
		$.ajax({
			url: '../php/outcomes.php',
			method: 'get',
			dataType: 'JSON',
			data: {sectionId: selectedCourse[1], major: selectedCourse[0]},
			success:function(response){
				var links = $(".outcome-links");
				for (var i = 0; i < response.length; i++){
					console.log("in outcome links..." + response.length);
					var outcomeId = response[i]["outcomeId"];
					initids[i] = outcomeId;
					var outcomeDescription = response[i]["outcomeDescription"];
					descriptions[i] = outcomeDescription;
					var referenceString = "abet.php?outcome=" + outcomeId;
					var anchorId = "outcome" + outcomeId;
					//need to give these dynamic, unique ID's and query strings -- see referenceString and anchorId
					var a = "<a class='section-outcome' id='"+anchorId+"'><div id='"+outcomeId+"'>" + "Outcome <span class='outId'>" + outcomeId + "</span></div></a><hr class='new-hr'>";
					links.append(a);
					$("#" + anchorId).attr('href', referenceString);
				}
				var description = $("#embedded-description");
                var getOutcome = window.location.href.slice(-1);
                if(isNaN(getOutcome)){
                    getOutcome = initids[0];
                }
				for (var x = 0; x < initids.length; x++){
					if (initids[x] == getOutcome){
						var str = "<strong>Outcome " + getOutcome + " - " + selectedCourse[0] +  ": </strong>" + descriptions[x];
						description.html(str);
					}
                }
                if(window.location.pathname.includes('../main/abet.php')){
                    $("#outcome" + getOutcome + " div").addClass("selected-outcome");
                }
			},
			error:function(xhr, ajaxOptions, thrownError){
				console.log("failure");
				console.log(xhr.responseText);
				console.log(thrownError);
            },
            complete: function(){
                getResults();
				getAssessments();
				getNarratives();
            }

        });
	});
    /*password and stuff */
    $(document).ready(function(){
        $("#profile").click(function(){
            if($("#userMenu").css("display")=="none"){
                $("#userMenu").css("display", "block");
            } else {
                $("#userMenu").css("display", "none");
            }
        });

        $("#logout").click(function(){
            $.post('../php/logout.php', {}, function(){
                $(location).attr('href',"login.html");
            });
        });

        $("#changePassword").click(function(){
            $(location).attr('href',"../php/password.php");
        });

        $('#sectionMenu').on('change', function() {
            console.log("changing");
			var selection = this.value;
            var sMajor = selection.split(" ")[0];
            var sSection = selection.split(" ")[1];
            console.log(sSection + " " + sMajor);
            $.post('../php/rememberDropdown.php', {
                selectedSection: sSection,
                selectedMajor: sMajor
            },
            function(data, status){
                console.log(status);
                console.log(data);
                $(location).attr('href', '../main/abet.php');
            });
        });
    });