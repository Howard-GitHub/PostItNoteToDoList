# Post-It-Note To-do-list

## A to-do-list program that utilizes post-it-notes and gives flexibility to divide tasks into separate sections.

This to-do-list program allows the user to create post it note sections at the starting dashboard, and multiple post-it-note to-do-lists can be created in each section. Each section can be given a title to categorize. The post-it-note to-do-lists contain the tasks and can contain a header to futher categorize tasks. Sections, to-do-lists, tasks, and the to-dio-list headers are also removable. This program gives control over the division of tasks, providing for flexibility in organization.

## DEMO

## Installation
1. Install Node.js
2. Clone this project: git clone **EDIT**
3. Go to the project directory
4. Install dependencies:
   - Command: npm install
5. Start server:
   - Command: npm start
  
## Usage

### Run project with "npm start"

####For the starting dashboard:
- Click on the plus button to create a section
- Click on the trash button for the sections to become deletable
  - Once the sections become deletable, click on the section you want to delete
    - Click on the "Back" button on the top left for the sections to not be deletable
       
####For inside a section:
- Click on the "Edit" button on the top right
   - Click on the section title textarea to edit the title of the entire section
   - Click on the plus button to create a to-do-list
     - Click on the "Add Header" button to create a header
      - Click on the textarea to start editing the header
      - Click on the "Remove Header" button to remove the header
     - Click on the "Add Task" button to create a task
      - Click on the textarea to start editing the task name
     - Click on the trash button for the to-do-lists to become deletable
       - Once the to-do-lists become deletable, click on the to-do-list you want to delete
       - Click on the "Back" button on the top left for the to-do-lists to net be deletable
   - Click on the "Done" button on the top right to exit the edit mode
   - Click on a task to remove a task (This is doable only in when the user is not in edit mode)
   - Click on the "Dashboard" button on the top left to exit the section
   
## Technologices Used
- React

## Credits
- Pin.png: image by OpenClipart-Vectors - link: https://pixabay.com/vectors/pushpin-push-pin-office-pin-red-147918/ - from Pixabay
- Plus.png: image by michael-kouassi - link: https://pixabay.com/illustrations/signe-plus-black-1923369/ - from Pixabay
- trashCan.png: image by Clker-Free-Vector-Images - link: https://pixabay.com/vectors/trashcan-trash-bin-garbage-293989/ - from Pixabay
