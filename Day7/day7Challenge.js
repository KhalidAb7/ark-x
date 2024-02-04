//Firts function 

async function fetchUserData() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // You might want to handle this error appropriately in your application
    }
}

// Example usage
fetchUserData()
    .then(data => {
        console.log('User Data:', data);
        // Process the user data as needed
    })
    .catch(error => {
        // Handle error if needed
    });



// Second Function

async function processUserData() {
        try {
            // Fetch user data
            const userData = await fetchUserData();
    
            // Use array methods to process the data
            const filteredUsers = userData.filter(user => user.gender !== 'male');
            const mappedUsers = filteredUsers.map(({ name, age }) => `Name: ${name}, Age: ${age}`);
    
            return mappedUsers;
        } catch (error) {
            console.error('Error processing user data:', error);
            throw error; // You might want to handle this error appropriately in your application
        }
    }
    
    // Example usage
    processUserData()
        .then(processedData => {
            console.log('Processed User Data:', processedData);
            // Further processing or display of the processed data
        })
        .catch(error => {
            // Handle error if needed
        });
    
// Third Function

async function summarizeAge() {
    try {
        const userData = await fetchUserData();
        return userData.reduce((sum, user) => (user.gender === 'male' ? sum + user.age : sum), 0);
    } catch (error) {
        console.error('Error summarizing age:', error);
        throw error;
    }
}

// Example usage
summarizeAge()
    .then(totalAge => console.log('Total Age of Male Users:', totalAge))
    .catch(error => console.error('An error occurred:', error));
