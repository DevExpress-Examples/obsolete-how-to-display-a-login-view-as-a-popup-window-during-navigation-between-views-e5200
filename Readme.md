# (Obsolete) How to display a login view as a popup window during navigation between views

<p><strong>Starting with 14.2, please use <a href="http://js.devexpress.com/Documentation/Tutorial/SPA_Framework/Logon_When_Navigating_to_a_View/?version=14_2#Logon_When_Navigating_to_a_View">this</a> example.<br />This approach can be applied starting with 13.2.9. <br /> </strong><br /> This example demonstrates how to check whether the user is logged in and display a login view when it is necessary during navigation. </p>
<p>It is necessary to perform the following steps to accomplish this task:</p>
<p>1. Add a new view and place a <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Widgets/dxPopup?version=13_2"><u>dxPopup</u></a> in it.</p>
<p>2. Implement the required logic for this view in a corresponding view model.</p>
<p>3. Handle the <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Application_Framework/HtmlApplication/Events?version=13_2#initialized"><u>HtmlApplication.initialized</u></a> event. In this event handler, get the login view template using the <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Application_Framework/HtmlApplication/Methods?version=13_2#getViewTemplateviewName"><u>HtmlApplication.getViewTemplate</u></a> method and add the view to the view port. This will allow you to display its internal popup using options from its view model.</p>
<p>4. Bind the login view model to the view markup using <a href="http://knockoutjs.com/documentation/introduction.html"><u>Knockout</u></a>.</p>
<p>5. Declare a global variable for determining when a user is logged in. In this example we set this option to false by default, and we will set it to true when a user is logged in. This variable can be accessed from any part of the application and we can change its value in the login view model.</p>
<p>6. Handle the <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Application_Framework/HtmlApplication/Events?version=13_2#navigating"><u>HtmlApplication.navigating</u></a> event. In this event handler, we can get a view info (see <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Application_Framework/HtmlApplication/Methods?version=13_2#getViewTemplateInfoviewName"><u>HtmlApplication.getViewTemplateInfo</u></a>) for the navigated view and check user credentials if necessary. For this purpose, we added the secure option to those views that should not be displayed for unauthorized users. If the user unauthorized, we can call a method from the login view model to display dxPopup from the login view. Moreover, you can cancel navigation by setting the cancel parameter of the event handler to true.</p>
<p><strong>See also:</strong><br /> <a href="https://www.devexpress.com/Support/Center/p/E4460">How to send authenticated requests to the OData service</a></p>

<br/>


