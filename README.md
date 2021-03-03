# StockMarketTracker
Simple stock market tracking app buil as a assignment project.

#
 SpringBoot as backend  
 Frontend built with React / Typescript / Semantic Ui 
 
##

currently only supports companies listed on united states.
The data is fetched from https://www.alphavantage.co/ using the free api version. 

Api calls are limited to 5 per minutes and 500 per day. Thus usability of app depends around this quota. On the root url app fetches data directly from the provider so is bound to fail for multiple request 

On the /demo endpoint api calls are routed through the app server and the data for "Microsoft , Sony , Apple , Tesla , Nokia" is cached every 24 hours so the searching these compnies is not affected due to the limitations

## Devlopement Instructions 
    $ ./mvnw spring-boot:run 

If you want to build the project 

    $ ./mvnw clean package

After the build is complete locate the .jar file under /target
copy the data folder located on the project root toroot folder of jar file.
This step is optional. Application will automatically fetch the data for "Microsoft , Sony , Apple , Tesla , Nokia" on inital load but will take a while due to api limitations 

Run the .jar file

If you are running this app on your local machine, application can be accesed at localhost:8080 


## This app is for demonstration purpose only
