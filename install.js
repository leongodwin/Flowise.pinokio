module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/FlowiseAI/Flowise.git",
          "npm install -g pnpm",
        ]
      }
    },{
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
