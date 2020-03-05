# contributor-discord-action

This actions sends welcoming message to discord chat with webhook.

## Inputs

### `user`

**Required** Username that is used as name of the messages sender.

### `url`

**Required** Discords webhook url.

### `name`

**Required** User to be greeted.

### `message`

**Required** Greeting message to be sent.<br>
To specify name location use "{name}" in message,<br>
if not specified name is added at the end ", {name}".


## Example usag

uses: actions/contributor-discord-action@v1<br>
with:<br>
&nbsp;&nbsp;&nbsp;&nbsp;user: Welcome bot<br>
&nbsp;&nbsp;&nbsp;&nbsp;url: ${{ secrets.DISCORD_WEBHOOK }}<br>
&nbsp;&nbsp;&nbsp;&nbsp;name: 'Con the Contributor'<br>
&nbsp;&nbsp;&nbsp;&nbsp;message: Welcome {name} to the project<br>
