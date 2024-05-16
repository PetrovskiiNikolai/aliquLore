interface Person {
  name: string;
  premium: boolean;
}

function getPersonResult(person: Person): string {
  // Check if 'person' is not null and has the required properties
  if (person && 'name' in person && 'premium' in person) {
    // Assuming 'premium' is a boolean that needs to be converted to a string
    const premiumStatus = person.premium ? 'Premium' : 'Standard';
    return `${person.name} - ${premiumStatus}`;
  }
  return 'Invalid person object';
}

// Example usage:
const personObj: Person = {
  name: 'John Doe',
  premium: true,
};

const result = getPersonResult(personObj);
console.log(result); // Output: John Doe - Premium
