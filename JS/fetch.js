
// Create a function to fetch the last commit date for a GitHub user

const token = GITHUB_API_KEY
function getLastCommitDate(username) {
    // Replace 'YOUR_TOKEN_HERE' with your GitHub Personal Access Token

    // GitHub API URL to fetch the user's last commit
    const apiUrl = `https://api.github.com/users/${username}/events/public`;

    // Create a fetch request with the Authorization header
    return fetch(apiUrl, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(events => {
            // Find the last commit event
            const lastCommitEvent = events.find(event => event.type === 'PushEvent');
            if (lastCommitEvent) {
                const lastCommitDate = new Date(lastCommitEvent.created_at);
                return lastCommitDate.toDateString();
            } else {
                throw new Error(`No recent commit events found for user ${username}`);
            }
        });
}

// Example usage:
const githubUsername = prompt("input a username");
getLastCommitDate(githubUsername)
    .then(lastCommitDate => {
        console.log(`Last commit date for ${githubUsername}: ${lastCommitDate}`);
    })
    .catch(error => {
        console.error(error.message);
    });
