# SMU Data Analytics Bootcamp Project 3: 
                                                           
    Wild Fires in the US from 1992-2015
    
    
   
    For this project, we were tasked to build a website that contains a landing/home page, an about us page, a work cited page, and an interactive data dashboard that tells an effective story of our chosen dataset. The dataset that we choose for our project is “US Wildfire data” taken from Kaggle. Our original dataset came in CSV format, with 18455 Kb in size, and has 43 columns. This dataset contains randomly selected 50,000 fire samples from a huge dataset of 1.88 Million US Wildfires ranging from wildfires data from the year 1992 to 2015. Our goal is to analyze the data, then determine if: 
- What months or seasonality has the highest number of wildfires in the US?
 - What region of the US that most likely to have more wildfires than others?

    We created a web-based dynamic dashboard that displays visual graphs and an interactive map to answer the research questions we came up with using the data we found. Data Cleaning We used Pandas and Jupyter Notebook to clean the data. First, we identify and drop all of the unneeded columns. Then, we dropped any cells that have null climate data in the column “Temp_pre_30.” After that, we selected the cells with names in the “Fire Name” column and dropped all with null values. Finally, we saved the cleaned version of the "Wildfires" dataset to new CSV and SQLite files. The original dataset is 18455 KB and has 43 columns, but after we cleaned it up, it contains 4883 kb and 23 columns.
Visualization & Design We built our dynamic website dashboard using HTML, JavaScript, and CSS. Our website consists of four pages: Home, Plots, About Us, and Resources. On our Home page, we have a little background about wildfires. We also have hot topics including which state has encountered the most wildfires, the leading cause of wildfires, how many wildfires occur every year, and the number of acres burned on average due to wildfires. If you click on the question, the answer will appear under the question. There is also a "Call to Action" box, which reminds every one of us to do our part when we see a wildfire. Our second page consists of two charts and a map. It has a filter option where you can filter to see the top 10 largest fires in your state and the percentage of wildfires by month in the state three that you choose. We created our map using Leaflet with a heat filter and marker clusters. The map’s layers are "Street Map", "Topographic Map", "Google Satellite", or "Water Color." The markers and heat map options can turn on or off using the filter selection. The colors used on this page are consistent with the color palette that we want to use for this project, warm colors, which are orange, yellow, and red. Our third page is “All About Us,” which contains a little information about each of the members of our group. Our last page is the “Resources” page, which listed websites where we got our work cited. 

    Please feel free to check out our website on Home Page (therobmay.pythonanywhere.com) and find out more information about wildfires by using the filtering options that we have on the plots page. The limitation of this project is the dataset itself. It is a random selection of 50,000 wildfires from a larger database of 1.88 Million wildfires. Another limitation is the year range of this dataset, 1992-2015, there were no recent data regarding the wildfires information that we can plot and see the recent trends between wildfires vs. climate, vs. seasonality and causes of wildfires other than what we already have. 

Please check out our interactive website at:
http://therobmay.pythonanywhere.com/
![image](https://github.com/theRobMay/SMU_Flask_Vis_Project/assets/129100456/fdddcdd5-228a-4242-b993-59bdd2f226fb)


