$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/JavaPractice/HERE/src/main/java/features/documentation.feature");
formatter.feature({
  "line": 1,
  "name": "Documentatin Test",
  "description": "",
  "id": "documentatin-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Here Documentation Test",
  "description": "",
  "id": "documentatin-test;here-documentation-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already launch application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify loading of documentaion page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify status code",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify Angular JS initialization in documentation page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify all internal links",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenation.user_is_already_launch_application()"
});
formatter.result({
  "duration": 22373605700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenation.verify_loading_of_documentaion_page()"
});
formatter.result({
  "duration": 35191600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenation.verify_status_code()"
});
formatter.result({
  "duration": 1935496100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenation.verify_Angular_JS_initialization_in_documentation_page()"
});
formatter.result({
  "duration": 656800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenation.verify_all_internal_links()"
});
