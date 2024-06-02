module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
       path: "app",
        message: [
          "{{platform === 'win32' ? 'run.bat' : 'sudo chmod +x run.sh'}}",    // Edit with your custom commands
        ],
        on: [{
          // The regular expression pattern to monitor.
          // When this pattern occurs in the shell terminal, the shell will return,
          // and the script will go onto the next step.
          "event": "/http:\/\/\\S+/",   

          // "done": true will move to the next step while keeping the shell alive.
          // "kill": true will move to the next step after killing the shell.
          "done": true
        }]
      }
    },
//    Uncomment this step to enable local wifi sharing (access the app from devices on the same network)
//    {
//      method: "proxy.start",
//      params: {
//        uri: "{{local.url}}",
//        name: "Local Sharing"
//      }
//    }
  ]
}
