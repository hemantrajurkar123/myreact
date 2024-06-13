// source: Hitesh Choudhary Typescript YT
const TsFunctions = () => {
  // for paramters we can use the following syntax
  // for the return type of the whole function, we can provide its type just after the closing paranthesis
  function add(a: number, b: number): number {
    return a + b;
  }

  const sum = add(5, 6);
  console.log("sum is", sum);

  // providing default value to the function

  function userLogin(name: string, email: string, isPaid: boolean = false):any {
    return {name,email,isPaid}
  }

  const login = userLogin("ABC", "h@h.com"); //when we provide the default value, it wont give us the error that you have passed only 2 argument
  console.log("Login Details", login);

  return (
    <div>
      <h3>Typescript functions</h3>
    </div>
  );
};

export default TsFunctions;
