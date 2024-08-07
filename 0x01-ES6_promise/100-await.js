// Import the required functions
import { uploadPhoto, createUser } from './utils';

// Define the async function
const asyncUploadUser = async () => {
  try {
    // Call uploadPhoto and createUser concurrently
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    // Return the responses in the specified format
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // Return empty object if any of the async functions fail
    return {
      photo: null,
      user: null
    };
  }
};

// Export the function
export default asyncUploadUser;

