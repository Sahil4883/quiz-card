# Quiz-App

## Overview

Quiz-App is a web-based application that allows users to create, manage, and test their knowledge with custom question-and-answer cards. Users can add new cards, delete existing ones, and quiz themselves on the questions in their deck. The application tracks whether the user knew the answer or not, helping them to identify areas for improvement.

## Features

- **Create Cards:** Add new question-and-answer pairs to your deck.
- **Delete Cards:** Remove any question-and-answer pairs that are no longer needed.
- **Randomized Quizzes:** Test your knowledge with randomly selected questions from your deck.
- **Response Tracking:** Mark whether you knew the answer or not to keep track of your progress.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Usage

1. **Creating a Card:**

   - Navigate to the "Create Card" section.
   - Enter your question and its corresponding answer.
   - Click the "Add Card" button to save the card to your deck.

2. **Deleting a Card:**

   - Navigate to the "Deck" section.
   - Locate the card you want to delete.
   - Click the "Delete" button to remove the card from your deck.

3. **Taking a Quiz:**
   - Navigate to the "Quiz" section.
   - A random question from your deck will be displayed.
   - If you knew the answer, click the "Right" button.
   - If you didn't remember the answer, click the "Wrong" button.
   - The application will keep track of your responses.

## Technologies Used

- **Frontend:** Next.js & React.js
- **Backend:** Next.js api,Node.js
- **Database:** postgresql
- **Auth:** Clerk
- **Styling:** CSS, Tailwind

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Contact

For any questions or suggestions, please contact or open an issue on GitHub.

---

Thank you for using Quiz-App! We hope it helps you improve your knowledge and skills. Happy learning!
