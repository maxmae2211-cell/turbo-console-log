// @ts-nocheck

const userData = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

// Outdated log message: incorrect filename and line number
console.log('🚀 ~ oldFile.js:5 ~ userData:', userData);

function processUser(user) {
  // Outdated log message: incorrect filename and line number
  console.warn('🚀 ~ oldFile.js:8 ~ processUser ~ user:', user);

  if (!user.email) {
    // Outdated log message: incorrect filename and line number
    console.error('🚀 ~ oldFile.js:11 ~ processUser ~ missing email:', user);
    return null;
  }

  // Outdated log message: incorrect filename and line number
  console.info('🚀 ~ oldFile.js:15 ~ processUser ~ processing user:', user);

  const result = {
    id: Math.random(),
    ...user,
  };

  // Outdated log message: incorrect filename and line number
  console.debug('🚀 ~ oldFile.js:20 ~ processUser ~ result:', result);
  // Outdated log message: incorrect filename and line number
  console.table('🚀 ~ oldFile.js:21 ~ processUser ~ table data:', result);
  // Outdated log message: incorrect filename and line number
  myLogger('🚀 ~ index.ts:86 ~ processUser ~ custom log:', result);

  return result;
}

const processedUser = processUser(userData);
// Outdated log message: incorrect filename and line number
console.log('🚀 ~ oldFile.js:30 ~ processedUser:', processedUser);

// Multi-line logs with outdated metadata
console.log('🚀 ~ oldFile.js:35 ~ multi-line log:', {
  data: processedUser,
  timestamp: new Date(),
});

myLogger('🚀 ~ index.ts:89 ~ multi-line custom log:', processedUser);
