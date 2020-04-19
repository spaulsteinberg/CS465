<!DOCTYPE html>
<html lang="en">
    <head>
      <title>ABET Website</title>
      <link rel="stylesheet" type="text/css" href="../styles/abet.css">
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
      <meta charset="UTF-8">
	  <?php session_start(); ?>
	  <script>
	  	var needToSave = false;
	  </script>
    </head>
  <body>
	  <script src="../scripts/abet.js"></script>
      <?php include 'nav.php' ?>
      <main class="main-container">
        <div class="main-content">
          <div class="results">
            <h1 class="container-header">Results<hr></h1>
            <div class="main-results-description">
              <p>Please enter the number of students who do not meet expectations, meet expectations, and exceed expectations. You can
              type directly into the boxes--you do not need to use arrows.
              </p>
            </div>
            <div class="outcome-description">
              <p id="embedded-description"></p>
            </div>
            <br>
            <table class="expectation-table">
              <tr>
                <th><strong>Not Meets Expectations</strong></th>
                <th ><strong>Meets Expectations</strong></th>
                <th><strong>Exceeds Expectations</strong></th>
                <th><strong>Total</strong></th>
              </tr>
            <tr>
				<form id="results-form" method="POST">
					<td><input type="number" id="notMeetsExpectations" min="0" value="0" required /></td>
					<td><input type="number" id=meetsExpectations min="0" value="0" required /></td>
					<td><input type="number" id=exceedsExpectations min="0" value="0" required /></td>
				</form>
					<td id="total"></td> <!-- keep outside of form to prevent dirty -->
            </tr>
            </table>
            <div class="save-results">
                <button class="save-results-btn" id="saveResults">Save Results</button>
            </div>
			<div id="inner-save"><p id="resultsSuccess"></p></div>
			<div id="inner-save"><p id="resultsFail"></p></div>
           <br><br><br>
            <hr class="end-results" align="center">
          </div>
          <div class="assessments">
            <h1 class="container-header">Assessment Plan<hr></h1>
            <div class="assessments-description">
              <ol>
                <li>Please enter your assessment plan for each outcome. The weights are percentages
                  from 0-100 and the weights should add up to 100%.
                </li>
                <li>Always press "Save Assessments" when finished, even if you removed as assessment. The trash can 
                  only removes an assessment from this screen&#9472;it does not remove it from the database until
                  you press "Save Assessments".
                </li>
              </ol>
            </div>
			<form id="assessment-form" method="POST">
            <table class="assessment-table">
              <tr>
                <th><strong>Weight (%)</strong></th>
                <th ><strong>Description</strong></th>
                <th><strong>Remove</strong></th>
              </tr>
            </table>
        <br>
        <div class="new-img-button">
          <input type="image" id="newAssessment" class ="new-button" src="../images/new-button.PNG">
        </div>
        <div class="save-assessments">
          <button type="submit" class="save-assessments-btn" id="saveAssessments">Save Assessments</button>
        </div>
        </div>
		</form>
		<div id="inner-save-2"><p id="assessmentsSuccess"></p></div>
		<div id="inner-save-2"><p id="assessmentsFail"></p></div>
		<div id="inner-save-2"><p id="weightsNot100"></p></div>
		<br><br>
        <hr class="end-results" align="center">
        <div class="narrative-summary">
          <h1 class="container-header">Narrative Summary<hr></h1>
          <div class="main-narratives-description">
            <p>Please enter your name for each outcome, including the student strengths for the outcome, student
              weaknesses for the outcomes, and suggested actions for improving student attainment of each outcome.
              <br><br>
			  <form id="narrative-form" method="POST">
			  <div id="n-d">
				<strong class="narrative-separators">Strengths</strong>
				<br>
				<textarea class="narratives-strengths" id="strengths" rows="4" maxlength="2000" placeholder="None" required></textarea>
				<br><br>
				<strong class="narrative-separators">Weaknesses</strong>
				<textarea class="narratives-weaknesses" id="weaknesses" rows="4" maxlength="2000" placeholder="None" required></textarea>
				<br><br>
				<strong class="narrative-separators">Actions</strong>
				<textarea class="narratives-actions" id="actions" rows="4" maxlength="2000" placeholder="None"></textarea>
			</div>
			  </form>
            </p>
          </div>
          <div class="save-narratives">
            <button class="save-narratives-btn" id="saveNarrative">Save Narrative</button>
          </div>
        </div>
        </div>
		<div id="inner-save-3"><p id="narrativeSuccess"></p></div>
		<div id="inner-save-3"><p id="narrativeFail"></p></div>
      </main>
    </div>
  </body>
</html>
