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
  "name": "verify all internal links",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenation.user_is_already_launch_application()"
});
formatter.result({
  "duration": 16902260400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenation.verify_loading_of_documentaion_page()"
});
formatter.result({
  "duration": 30113900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenation.verify_status_code()"
});
formatter.result({
  "duration": 1520207100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenation.verify_all_internal_links()"
});
formatter.result({
  "duration": 93129741200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-9J8UA3C\u0027, ip: \u0027192.168.0.150\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}), userDataDir\u003dC:\\Users\\NARESH\\AppData\\Local\\Temp\\scoped_dir4676_959959334}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56158}, acceptInsecureCerts\u003dfalse, browserVersion\u003d80.0.3987.149, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 6e92c2816062d149f0f3101d5b5c321e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepdefenations.StepDefenation.verify_all_internal_links(StepDefenation.java:72)\r\n\tat ✽.Then verify all internal links(D:/JavaPractice/HERE/src/main/java/features/documentation.feature:8)\r\n",
  "status": "failed"
});
});