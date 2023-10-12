import { octokit } from "./index";

const IssueAPI = {
  async getAPI() {
    const owner = "angular";
    const repo = "angular-cli";
    const response = await octokit.request(
      "GET /repos/angular/angular-cli/issues",
      {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    const data = response.data;
    return data;
  },
};
export default IssueAPI;
