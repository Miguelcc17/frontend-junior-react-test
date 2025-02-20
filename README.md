# Technical Interview - ReactJS

## Introduction

Welcome to our ReactJS technical interview. In this test, we want to evaluate how you develop an application by consuming an external API and displaying a list of videos. This is not an exam, but an opportunity to see how you work, structure your code, and solve problems.

## Disclaimer

Although we are using Amplify APIs, this test is not intended for any production use. The React code you write during the test is entirely your property, and we will not use it beyond the evaluation process. Our goal is to assess your skills, not to obtain completed work for any other purpose.

## Objective

Your task is to develop a ReactJS application that displays a list of videos by consuming an API. The interface should include:

- **Application title**.
- **Video list** in the format of your choice (table or cards).
  - It should display the **title**, **video status**, and **thumbnail**.
- **Footer with relevant information**.

### Optional Improvements (If Time Allows)

If you finish early, you can implement enhancements such as:

- Clicking on a video opens it in a **modal**.
- Adding a **text filter** to search for videos.
- Any other improvement you find relevant.

## Requirements

- The test duration is **60 minutes**.
- During the test:
  - **Share your screen and webcam**.
  - You may **look up information online**, but **DO NOT** use LLM tools.
  - You can ask questions at any time.
- At the end, we will have a **5-10 minute discussion** about the result and process.

## Installation & Execution

To get started, clone the repository and run the application:

```bash
# Clone the repository
git clone https://github.com/AmplifySoftware/frontend-junior-react-test.git
cd frontend-junior-react-test

# Install dependencies
npm install

# Run the application
npm start
```

## API

You will be provided with an **API Key** and API documentation. Use this API to fetch video data.

### Endpoints

#### Get Videos

- **URL:** `https://chrysalis.amplifysoft.io/media/videos`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer YOUR_API_KEY`
- **Response:**

```json
{
  "success": boolean,
  "message": [
    {
      "id": "string",
      "title": "string",
      "date": "string",
      "status": "string"
    }
  ]
}
```

- **Thumbnail Reference:** To reference a video's thumbnail image, use the following URL format:
  ```
  https://chrysalis.amplifysoft.io/media/thumbnails/[video id]/00:00:05:00/[video title]
  ```
  *Note:* Once your app can load videos, thumbnails may not be displayed correctly. If this happens, we will guide you and provide you with a username and password to access them.

#### Delete Video

- **URL:** `https://chrysalis.amplifysoft.io/media/videos/{videoId}`
- **Method:** `DELETE`
- **Headers:**
  - `Authorization: Bearer YOUR_API_KEY`
- **Response:**

```json
{
  "success": boolean,
  "message": "string"
}
```

## Evaluation

We are not looking for a perfect solution, but rather understanding how you approach the problem. We will evaluate:

- **Code structure and clarity**.
- **Use of ReactJS and best practices**.
- **Problem-solving skills**.
- **Communication and reasoning out loud**
- **Ability to improve the code if time allows**.

---

Good luck! Remember, this test is meant to get to know you better and see how you work. Don't hesitate to ask any questions.

