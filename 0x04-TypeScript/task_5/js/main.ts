// Define the MajorCredits interface
export interface MajorCredits {
  credits: number;
  brand: string;
}

// Define the MinorCredits interface
export interface MinorCredits {
  credits: number;
  brand: string;
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand, // Assuming both subjects have the same brand
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand, // Assuming both subjects have the same brand
  };
}
