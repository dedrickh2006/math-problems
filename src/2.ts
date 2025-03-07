  function solveMathProblem() {
    const problem = getRandomMathProblem();
    const solution = problem.solve();
    console.log(`Solution: ${solution}`);
  }

  function getRandomMathProblem() {
    const problems = [
      new AdditionProblem(2, 3),
      new SubtractionProblem(5, 2),
      new MultiplicationProblem(4, 6),
      new DivisionProblem(10, 2),
    ];
    return problems[Math.floor(Math.random() * problems.length)];
  }

  class Problem {
    constructor(public readonly leftOperand: number, public readonly rightOperand: number) {}

    solve(): string | number {
      throw new Error("Not implemented");
    }
  }

  class AdditionProblem extends Problem {
    constructor(leftOperand: number, rightOperand: number) {
      super(leftOperand, rightOperand);
    }

    solve(): string | number {
      return this.leftOperand + this.rightOperand;
    }
  }

  class SubtractionProblem extends Problem {
    constructor(leftOperand: number, rightOperand: number) {
      super(leftOperand, rightOperand);
    }

    solve(): string | number {
      return this.leftOperand - this.rightOperand;
    }
  }

  class MultiplicationProblem extends Problem {
    constructor(leftOperand: number, rightOperand: number) {
      super(leftOperand, rightOperand);
    }

    solve(): string | number {
      return this.leftOperand * this.rightOperand;
    }
  }

  class DivisionProblem extends Problem {
    constructor(leftOperand: number, rightOperand: number) {
      super(leftOperand, rightOperand);
    }

    solve(): string | number {
      return this.leftOperand / this.rightOperand;
    }
  }

  