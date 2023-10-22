# waterviewpkwy
a comprehensive water quality tool to visualize, track, and predict water quality levels in bodies of water 

# Contributors:
Gaurang Goel
Matthew Hui
Prakul Singh
Prateek Mishra

# Name

WaterView - View *Water*

# Description

A comprehensive water quality tool to visualize, track, and predict water quality levels around the world, leveraging machine learning and round-the-clock massive API integration.

Our platform combines real-time water quality tracking and predictive analytics, integrating data from 11 sources to provide live water quality indices. Our predictive model, trained on 18,000+ data points, offers 99.7% accuracy in predicting water quality, presented through intuitive visuals for various stakeholders.

# Installation

1. Clone the entire repo into a directory of your choice. 
2. Add in your own API keys for Google Cloud, then run the model_training.py file to develop the model.
3. For the front-end, run npm start in the frontend directory to build the app
4. For the AR experience, download RealityComposer on your iOS/macOS device and run the .reality file found in the AR folder of the repo.
5. You should be ready to go!


# Support
Please contact us at one of the following emails if you have any questions.
prateek.mishra@utdallas.edu
prakul.singh@utdallas.edu
matthew.hui@utdallas.edu
gaurang.goel@utdallas.edu

# Roadmap / Future Plans

This project is extremely modular and lends itself well to multiple aspects of development. Beyond the obvious improvements in visuals and front-end development, we're excited to improve integration with our Chatbot Assistant. In addition, performance and speed are relatively slow, which is another area of focus.

Currently, to build our initial predictive model, we are only querying from the US Census Bureau. While this provides accurate estimations for items like rent, our initial predictive model becomes much less accurate on items such as household expenditures and discretionary income breakdowns. Querying from multiple trustworthy databases, such as the US Bureau of Labor Statistics, would allow us to build a much more ideal and realistic budgeting model.

Our current program only supports one user at a time (per local host, so this isn't a huge issue). However, addressing this issue of concurrency would be a huge priority before this code could be pushed towards production.

![AR Experience](https://github.com/jhinericusername/waterviewpkwy/blob/96bc7ae511e76c6c1ac7548fc8fcf973d63af951/AR/IMG_0114.png)
