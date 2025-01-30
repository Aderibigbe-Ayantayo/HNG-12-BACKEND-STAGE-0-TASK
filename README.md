# HNG-12 Backend Stage 0 Task

## Project Description

This project is a public API for the HNG12 backend internship. The API provides basic information in JSON format.

## Technologies Used

- Node.js
- Express.js
- Render (for deployment)

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Aderibigbe-Ayantayo/HNG-12-BACKEND-STAGE-0-TASK.git
   cd hng12-backend-task
   ```

## API Endpoint

Using cURL:
curl -X GET https://hng-12-backend-stage-0-task.onrender.com
or
**GET** `https://hng-12-backend-stage-0-task.onrender.com/`
Using Fetch API in JavaScript:
fetch("https://hng-12-backend-stage-0-task.onrender.com")
.then(response => response.json())
.then(data => console.log(data));

## Example Response

```json
{
  "email": "adex.fadeel1989@gmail.com.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Aderibigbe-Ayantayo/HNG-12-BACKEND-STAGE-0-TASK"
}
```
## Useful Links

  https://hng.tech/hire/nodejs-developers

