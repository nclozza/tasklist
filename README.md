# Prerequisites

- Install [Visual Studio 2019](https://visualstudio.microsoft.com/vs/)
- Install [.NET 5.0 SDK or later](https://dotnet.microsoft.com/download/dotnet/5.0)
- Install [Node.js 14.0 or later](https://nodejs.org/en/)

## Run the backend

- Open the file `Backend/Tasklist.sln` with Visual Studio 2019
- Start the service by pressing the "play" button

## Run the frontend

- Check the URL where the backend service was initialized; if it is not `https://localhost:44348` please change it in `Frontend/src/configuration/API.js`
- Open a terminal and `cd` into the `Frontend` directory
- Run the command `npm start`
