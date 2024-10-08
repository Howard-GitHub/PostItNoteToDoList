# Post-It-Note To-do-list

## A to-do-list web application that utilizes post-it-notes and gives flexibility to divide tasks into separate sections.

This to-do-list application allows the user to create post-it-note sections at the starting dashboard, and multiple post-it-note to-do-lists can be created in each section. Each section can be given a title for labeling categories. The post-it-note to-do-lists contain the tasks and can contain a header to futher categorize tasks. Sections, to-do-lists, tasks, and the to-do-list headers are also removable. This application gives control over the division of tasks, providing for flexibility in organization. All changes made on the application are saved, meaning when running the application again or when refreshing the application, the changes made on the application stay.

## Installation
1. Install Node.js
2. Clone this project
   - Command: `git clone https://github.com/Howard-GitHub/PostItNoteToDoList.git`
3. Go to the project directory
   - Command: `cd project`
4. Install dependencies:
   - Command: `npm install`
  
## Usage

### Run project with "npm start"

#### For the starting dashboard:
- Click on the plus button to create a section
- Click on the trash button for the sections to become deletable when you click on a section
- Click on the "Back" button on the top left to exit the delete mode
- Click on a section to enter that section
       
#### For inside a section:
- Click on the "Edit" button on the top right to edit a section
- In the edit mode, all textareas, such as for the section title, the to-list-header, and the tasks, become editable
- The buttons to modify a section will also appear in edit mode
- Post-it-note to-do-lists are also deletable after clicking on the trash button in edit mode and you can exit the delete mode by clicking on "Back"
- Tasks are deletable when clicked on when the application is not in edit mode
- Click on the "Dashboard" button on the top left to exit the section
   
## DEMO

### Demo of main dashboard:
![main dashboard demo gif](https://github.com/Howard-GitHub/PostItNoteToDoList/blob/main/project/src/assets/initialDashboardDemo.gif)

### Demo of section:
![section demo gif](https://github.com/Howard-GitHub/PostItNoteToDoList/blob/main/project/src/assets/sectionDemo.gif)


## Technologices Used
- React

## Credits
- pin.png: Image by OpenClipart-Vectors - link: https://pixabay.com/vectors/pushpin-push-pin-office-pin-red-147918/ - from Pixabay
- plus.png: Image by michael-kouassi - link: https://pixabay.com/illustrations/signe-plus-black-1923369/ - from Pixabay
- trashCan.png: Image by Clker-Free-Vector-Images - link: https://pixabay.com/vectors/trashcan-trash-bin-garbage-293989/ - from Pixabay
