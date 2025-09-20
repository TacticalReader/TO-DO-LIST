# TO-DO-LIST
Here is a detailed `README.md` for the [TacticalReader/TO-DO-LIST](https://github.com/TacticalReader/TO-DO-LIST) project:

***

# TO-DO-LIST

A clean and minimal **To-Do List Web App** written in vanilla HTML, CSS, and JavaScript, designed for efficient daily task management. The app lets you add, complete, and delete tasks, with persistent localStorage support to keep your list saved between browser sessions.

## Features

- **Add Tasks:** Quickly add new tasks using the input box or the Enter key.
- **Mark Complete:** Click the checkbox or task to toggle completion status.
- **Delete Tasks:** Instantly remove tasks using the delete button.
- **Data Persistence:** All your tasks are saved in your browser’s localStorage and are restored on reload.
- **Empty State Message:** See a friendly message when your task list is empty.
- **Modern UI:** Responsive, minimal design using Font Awesome icons.
- **Accessibility:** Input auto-focused for fast entry and keyboard-friendly operation.



## Getting Started

### Clone the Repository

```bash
git clone https://github.com/TacticalReader/TO-DO-LIST.git
cd TO-DO-LIST
```

### Run Locally

Simply open `index.html` in your web browser:

```bash
open index.html
# or double-click the file in your file manager
```

No build tools or installations are required!

## Project Structure

```
TO-DO-LIST/
├── index.html      # Main HTML document
├── styles.css      # Core CSS styling
├── script.js       # Task logic (add, complete, delete, localStorage)
└── README.md       # This file
```

### Files

- **index.html:** Contains the UI layout, input form, task display, and links to scripts and styles.
- **styles.css:** Handles the appearance, including layout, button styling, and completed/empty states.
- **script.js:** Implements all logic for task management, including storage, state toggling, rendering, and interactions.

## Usage Guide

1. **Add a Task:**  
   Type your task in the input box and click "Add Task" or press Enter. Your task will appear in the list.

2. **Mark as Completed:**  
   Click the checkbox or the task text. Completed tasks will show a strike-through and faded color.

3. **Delete a Task:**  
   Click the trash can icon beside a task to remove it instantly.

4. **Persistence:**  
   Your tasks remain saved automatically. Just revisit the page to see your current list.

## Customization

- **Styling:**  
  Modify `styles.css` to change colors, fonts, or layout.
- **Functionality:**  
  Add more features to `script.js` such as task editing, due dates, or categories.

## Dependencies

- [Font Awesome](https://fontawesome.com/) (for icons, loaded via CDN)

No other dependencies required!

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Icons by [Font Awesome](https://fontawesome.com/).
- Inspired by classic productivity tools and minimalist UI design.

***

**Contributions are welcome!** Feel free to submit an issue or open a pull request if you'd like to help improve the app.

***

This `README.md` provides all necessary details for usage, contribution, and further development of your TO-DO-LIST app.
