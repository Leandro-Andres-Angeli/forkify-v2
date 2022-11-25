# Forkify-v2
##Recipes app Forkify
Final activity from Jonas Schmedtman's Javascript course.Recipes app consuming data from API.In this app the user can get information of over 1.000.000 recipes.
User can calculate quantities of ingredients according number of diners.User can search for name of recipe , if recipe not found user is notified that recipe 
doesn't exist.
.User can bookmark favorites recipes.User can upload own 
recipes to API DB from other sites ,by supplying description , title ,source url , image source url and ingredients .ingredient's format input must be the following : quantities , unit, 
and name , otherwise app throws an error message and user is notified.
Project uses MVC architecture and publisher/subscriber pattern in order to establish the model and view interaction when data changes , this action is performed 
in the controller .Project done in Vanilla JS , using Classes ,declarative programming and functional programming.Compiled using Parcel.CSS styles using Sass for
better structure and faster development.To calculate fractions I used Fractions.js.
Remaining console.logs  in code for better understanding purposes in case someone what's to check out project.
live demo @ https://angeli-forkify.netlify.app
code @ https://github.com/Leandro-Andres-Angeli/forkify-v2/
