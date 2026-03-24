// @ts-nocheck

const userData = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

// console.log("🚀 ~ userData:", userData);

function processUser(user) {
  // console.warn("🚀 ~ processUser ~ user:", user);

  if (!user.email) {
    // console.error("🚀 ~ processUser ~ missing email:", user);
    return null;
  }

  // console.info("🚀 ~ processUser ~ processing user:", user);

  const result = {
    id: Math.random(),
    ...user,
  };

  // console.debug("🚀 ~ processUser ~ result:", result);
  // console.table("🚀 ~ processUser ~ table data:", result);
  // myLogger("🚀 ~ processUser ~ custom log:", result);

  return result;
}

const processedUser = processUser(userData);
// console.log("🚀 ~ processedUser:", processedUser);

// Multi-line logs
// console.log(
//   "🚀 ~ multi-line log:",
//   {
//     data: processedUser,
//     timestamp: new Date()
//   }
// );

// myLogger(
//   "🚀 ~ multi-line custom log:",
//   processedUser
// );
