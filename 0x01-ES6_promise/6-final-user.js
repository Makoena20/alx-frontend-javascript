import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto functions with the provided arguments
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises
  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then(results => results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    })));
}

