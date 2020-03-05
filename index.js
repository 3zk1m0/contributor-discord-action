const core = require('@actions/core');
const github = require('@actions/github');
const webhook = require("webhook-discord")
 

try {
  const user = core.getInput('user');
  const url = core.getInput('url');
  const name = core.getInput('name');
  let message = core.getInput('message');

  const index =  message.search('{name}');

  if (index != -1) {
      message = message.replace('{name}', '');
      message = message.slice(0, index) + name + message.slice(index);
  } else {
      message += ", " + name;
  }

  const Hook = new webhook.Webhook(url)
  const msg = new webhook.MessageBuilder()
  .setName(user)
  .setText(message);

  Hook.send(msg);

  console.log(message);

} catch (error) {
  core.setFailed(error.message);
}