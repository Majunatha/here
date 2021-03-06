package stepdefenations;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefenation {
	WebDriver driver;

	@Given("^user is already launch application$")
	public void user_is_already_launch_application() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://developer.here.com/documentation");
	}

	@When("^verify loading of documentaion page$")
	public void verify_loading_of_documentaion_page() {
		String actualPageTitle = driver.getTitle();
		String expectedPageTitle = "Documentation, Code Examples and API References - HERE Developer";
		if (actualPageTitle.equalsIgnoreCase(expectedPageTitle)) {
			System.out.println("Page Title Match");
		} else {
			System.out.println("Page Title Not Matched");
		}
	}

	@Then("^verify status code$")
	public void verify_status_code() throws IOException {
		String currentUrl = driver.getCurrentUrl();
		URL url = new URL(currentUrl);
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setRequestMethod("GET");
		connection.connect();
		int code = connection.getResponseCode();
		System.out.println("Response code of the object is " + code);
		if (code == 200) {
			System.out.println("Valid URL");
		} else {
			System.out.println("Invalid URls");
		}

	}

	@Then("^Verify Angular JS initialization in documentation page$")
	public void verify_Angular_JS_initialization_in_documentation_page() {
		if (angularHasFinishedProcessing()) {
			System.out.println("Angular JS should be initialized");
		} else {
			System.out.println("Angular JS should NOT be initialized");
		}

	}

	@Then("^verify all internal links$")
	public void verify_all_internal_links() throws IOException, InterruptedException {
		List<String> links = new ArrayList<String>();
		WebElement documentElement = driver.findElement(By.xpath("//span[@data-title='Documentation']"));
		Actions actions = new Actions(driver);
		actions.moveToElement(documentElement).perform();
		List<WebElement> allLinks = documentElement
				.findElements(By.xpath("//span[@data-title='Documentation']//parent::a//following-sibling::div//a"));
		for (int i = 1; i <= allLinks.size() - 1; i++) {
			allLinks.get(i).click();
			Thread.sleep(5000);
			String currentUrl = driver.getCurrentUrl();
			URL url = new URL(currentUrl);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("GET");
			connection.connect();
			int code = connection.getResponseCode();
			System.out.println("Response code of the object is " + code);
			if (code == 200) {
				System.out.println("Valid URL");
			} else {
				System.out.println("Invalid URls");
			}
			links.add(currentUrl);
			Thread.sleep(3000);
			driver.navigate().back();
			Thread.sleep(3000);
		}
		Iterator<String> itr = links.iterator();
		while (itr.hasNext()) {
			System.out.println(itr.next());
		}
	}

	public static boolean angularHasFinishedProcessing() {
		return new ExpectedCondition<Boolean>() {
			public Boolean apply(WebDriver driver) {
				String hasAngularFinishedScript = "var callback = arguments[arguments.length - 1];\n"
						+ "var el = document.querySelector('html');\n" + "if (!window.angular) {\n"
						+ "    callback('false')\n" + "}\n" + "if (angular.getTestability) {\n"
						+ "    angular.getTestability(el).whenStable(function(){callback('true')});\n" + "} else {\n"
						+ "    if (!angular.element(el).injector()) {\n" + "        callback('false')\n" + "    }\n"
						+ "    var browser = angular.element(el).injector().get('$browser');\n"
						+ "    browser.notifyWhenNoOutstandingRequests(function(){callback('true')});\n" + "}";

				JavascriptExecutor javascriptExecutor = (JavascriptExecutor) driver;
				String isProcessingFinished = javascriptExecutor.executeAsyncScript(hasAngularFinishedScript)
						.toString();

				return Boolean.valueOf(isProcessingFinished);
			}
		} != null;
	}

}
