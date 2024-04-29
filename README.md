# SNHU CS-465: Full Stack Development 1 with MEAN

## *Architecture*
  ### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
    This application features both a static and dynamic frontend which was achieved by various methods. The client facing side of the application was created with Express, Handlebars, CSS, and JavaScript. Express was used to route and render the webpages in the browser. Handlebars is a templating language used to create dynamic, reusable HTML with JavaScript functions. I utilized Handlebars for all webpages whether they were static or dynamic as it provides increased flexibility for future development. CSS was used for styling, and JavaScript allowed for the rendering of dynamic data fetched from the database using the API.

    The admin facing side of the application was created as an SPA using Angular. There are many benefits with creating the frontend with Angular as an SPA, with the most notable being fast page reloads after the initial page load. Once the SPA is initially loaded, full page refreshes are not required as it only updates the areas of the page where the data has changed. Developing an SPA with Angular also features the extended use of components, reducing redundant code and allowing for reusable code. 
    
  ### Why did the backend use a NoSQL MongoDB database?
    The purpose of using MongoDB as the database for this application is largely due to the similarity between MongoDB documents and JavaScript objects. MongoDB is essentially a document 'store' that stores data as BSON and JavaScript utilizes objects to hold data in the form of JSON. This creates an efficient method of passing data between the application and the MongoDB database as they both utilize JSON for sending, receiving, and storing data.

## *Functionality*
   ### How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
    JavaScript and JSON are different in a few ways with the biggest difference being: JavaScript is a programming language and JSON is a method of data formatting. JSON is incredibly valuable as it can be utilized by many programming languages and MongoDB to exchange data. Data exchange between the frontend and backend is the primary feature of Full Stack Development and JSON allows that exchange to occur.
    
   ### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.
    At the start of this course, we were given started files for the application which consisted of HTML files for the webpages and the CSS for the styling. I refactored all of the HTML pages into Handlebars templates as it permitted me to render data dynamically with greater efficiency. Using handlebars, I was able to reduce a significant amount of HTML since I was able to create reusable components to renders many objects of the same type. Without Handlebars and JavaScript, the codebase would have been much larger and more difficult to read. 

## *Testing*
  ### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
    Full Stack applications are complex with many interlocking components. A critical component of a Full Stack application is utilizing an API for exchanging data between a database and/or another application. Methods used to exchange data with API endpoints include GET, PUT, POST, and DELETE. The endpoints used with an API are the URLs/IP of the external entity data exchange is occurring with. There are various ways of testing an API endpoint with the methods listed above and include observing the console output in the browser with the developer tools or using software such as Postman. 

    Security is another important component of a Full Stack application as it is unwise to allow unauthenticated users to act on the API. A method for registering users into the database, encrypting their stored password, and validating login attempts provides one layer of security. When a user logs in, utilizing JSON web tokens for session authentication/authorization ensures that the right user has access to the right data and allowed actions. 
    

## *Reflection*
  ### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
    This course has been incredibly valuable in helping me reach my professional goals as it has helped me in developing my skills and knowledge with Full Stack development. Prior to this course, I had limited full Stack development experience and had never made an application with the MEAN stack. JavaScript was one of the first languages I learned to program with, but it had been a while since I used JavaScript prior to taking this course. Developing this Full Stack application refined my previous JavaScript skills and reinforced my understanding of how Full Stack applications work. 
    
    Looking forward, the skills I have gained and refined in this course have made me a much more marketable candidate in my field as it has helped me gain a firm understanding of using an API, databases, and Full Stack development with popular, in demand, JavaScript libraries.


