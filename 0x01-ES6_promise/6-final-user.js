// Import the functions from their respective modules
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define and export the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the signUpUser and uploadPhoto functions with the provided arguments
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Return a promise that resolves with the results of the two promises
  return Promise.allSettled([signUpPromise, uploadPromise])
    .then(results => {
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    });
}

