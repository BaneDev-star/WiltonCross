1. Code architecture
  - frontend
	I've used React.js frameworks with react-hook for frontend
	Using react-bootstrap for elements
	Using axios for http api call
  - backend
	Using nodejs express for making restful apis
	
2. Backend Logic
  Created three routes '/wilton/base', '/wilton/custom1', '/wilton/custom2'
  - /wilton/base
  Get 6 query parameters (A, B, C, D, E, F) and implemented base logic.
  - /wilton/custom1
  It's almost same as base api but implement custom1 logic
  - /wilton/custom2
  It's almost same as base api but implement custom2 logic

3. Frontend Logic
  Created 3 switches (A, B, C) for choose true/false
  Created 3 number input (D, E, F) for input numbers
  Created Select box (Algorithm) for choosing algorithms(base, custom1, custom2)

  If click submit then it will make endpoint with above values and get api response

4. How to install and run frontend/backend
  frontend is using port 3000 and backend is using 3000
  if npm start then open http://localhost:3000 in browser.

  - frontend
    cd frontend
    npm install
    npm start
  - backend
    cd backend
    npm install
    npm start

