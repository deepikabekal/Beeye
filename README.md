# Beeye-1.0
Created with CodeSandbox

## Description
A Front end page of a Team Management Application.

## Table of Contents
* [Deployed App](#deployedapp)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Techologies Used](#technologiesused)
* [Functionality](#functionality)
* [Contributing](#contributing)

## Deployed App

## Screenshot
<img src="src/assets/images/screenshot.png" width=650 height = 500>

## Installation
1. Make sure you have Node.js installed.
2. Clone this repo using ssh on your local machine.
```
git clone git@github.com:deepikabekal/Beeye-1.0.git
```
3. Open terminal and make sure to cd to the root of the repo.
4. Open the repo in your text editor.
5. Install all the dependencies by running the following command.
```
npm install
```
6. Run the application using the below command.
```
npm start
```

## Technologies Used
### Front-end
* React
* CSS 

### Libraries
* Fontawesome
* googleapis

## Functionality
* User story for this project was not provided. Hence some sections are static and some dynamic
* As far as possible, the components are made dynamic.
* When the links in the header is clicked, respective name appears in the addressbox.
* In Left Menu section, the tabs are clickable. When clicked, a section is displayed with the heading same as the tab name and a message stating "Page under development" except for "Tâches" (Tasks). When clicked on "Tâches" tab, "Tâches" section is displayed where you can add tasks by clicking on the + button in the section header. The tasks however appear with predefined value (as provided in the design).
* When Sélectionner tout (Select All) checkbox is clicked , all the checkboxes get checked and unchecked respectively.
* In the Tenue des journaux (Keeping of newspapers) section, when any tab (except for "Équipe" (Team)) is clicked, respective section header and a message stating "Page under development" is displayed. When "Équipe" tab is clicked, respective section (as per design) is displayed.
* At the bottom of the "Équipe" section, a list of team member info appears. When clicked, a graph section is displayed. The graph section content is predefined (as per design) for all the members of the team. 
* As far as possible the icons used are as per the design but in some cases when the icon was not available (due to not having pro account) a similar one was used. For toggle bar buttons in graph section, characters are used instead of icons.
* Scrollbars are added to Tasks and Graph section to optimize space.
* Hover effects are added to buttons and graph section.
* The page is made responsive for smaller screens.


## Contributing
1. Fork the repo.
2. Add feature or make changes.
3. Make a pull request for review.

