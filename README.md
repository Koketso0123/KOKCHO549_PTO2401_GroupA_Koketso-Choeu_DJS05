1. How to Run the Code

-To run the Redux-inspired Tally Counter code, follow these steps:Set Up Environment: Ensure you have a JavaScript runtime environment available. You can use a web browser with developer tools (e.g., Chrome, Firefox) or Node.js.

-Copy the Code: Save the provided code in a JavaScript file, such as tally.js.

-Run the Code:If using a web browser, open the file in the browser and access the console via the developer tools (F12 or Ctrl + Shift + I).
If using Node.js, open a terminal, navigate to the directory containing the file, and run the command node tally.js.
Observe Output: The state changes will be logged directly to the console, allowing you to track how the tally counter's state evolves with each action dispatched.

2. Overview of the Approach

-State Management Concept:The project is inspired by the principles of Redux, a well-known state management library in the JavaScript ecosystem. The goal was to create a centralized store to manage the state of a simple tally counter, focusing on functional programming principles and immutability.

-Key Features Implemented:

=Actions: Three actions were defined—ADD, SUBTRACT, and RESET—to represent the core operations of the tally counter. These actions are dispatched to the store to trigger state changes.

=Reducer Function: The reducer is a pure function that determines how the state should change based on the action received. It handles the state transitions, ensuring that the state is updated predictably.

=Store: The store is the central piece that manages the state, allowing actions to be dispatched and listeners to subscribe to state changes. The store encapsulates the state and the logic to modify it, providing a clear and structured approach to managing application state.

-Functional Programming Principles:

=The project adheres to functional programming principles by ensuring the following:

~Immutability: The state is never modified directly. Instead, new states are returned by the reducer function based on the previous state and the action dispatched.
~Pure Functions: The reducer function is pure, meaning it does not have side effects and only depends on its inputs to produce an output.

3. Challenges Faced and Solutions

-Challenge 1: Mimicking Redux Functionality
Issue: The primary challenge was to replicate core Redux functionalities while keeping the implementation simple and focused.
Solution: The solution was to implement a minimalist version of Redux that includes only the most essential functions: dispatch, getState, and subscribe. By focusing on these core functions, the store behaves predictably and efficiently.

-Challenge 2: State Initialization
Issue: Ensuring the state was correctly initialized when the store was first created was crucial for predictable behavior.
Solution: The store automatically dispatched an initial dummy action (@@INIT) when it was created. This action triggered the reducer, ensuring the state was set to its initial value before any other actions were dispatched.
