// Random math problem solver
const solveMathProblem = () => {
  // Generate random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Generate a random operation (+, -, x, /)
  const operation = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];

  // Perform the operation
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  // Return the solution
  return { problem: `${num1} ${operation} ${num2}`, solution: result };
};
