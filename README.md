# Node.js Server Unresponsiveness and Delays Under Load

This repository demonstrates a common issue in Node.js applications: unresponsiveness and delays under load.  The problem stems from inefficient handling of long-running operations, potentially leading to event loop starvation and resource exhaustion.

## Bug Description
The provided `bug.js` file contains a simple HTTP server that simulates a 5-second delay for every request.  Under heavy load, this server will become unresponsive as the event loop becomes blocked, unable to process new requests.

## Bug Solution
The `bugSolution.js` file demonstrates how to mitigate this problem using asynchronous programming and techniques to avoid blocking the event loop.  It leverages asynchronous operations to handle requests concurrently without causing the server to hang.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`
4. Send multiple requests to the server concurrently (e.g., using tools like `wrk` or `ab`). Observe the server's responsiveness.

## How to see the solution
1. Run `node bugSolution.js`
2. Repeat step 4 from the previous section.

Compare the responsiveness of both servers under load to witness the effect of the solution.