const core = require("@actions/core");
const github = require("@actions/github");
console.log(`github= ${github}`);

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");
    console.log(`token= ${token}`);
    
    const octokit = new github.getOctokit(token);
    console.log(`octokit= ${octokit}`);
    console.log(`octokit.issues= ${octokit.issues}`);
    
    const newIssue = await octokit.rest.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: jokeBody
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

