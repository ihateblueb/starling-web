export default defineEventHandler((event) => {
    const serverid = parseInt(event.context.params.serverid) as number
    if (!Number.isInteger(serverid)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Server ID should be an integer',
        })
    }
    // check if user is real
    // check if user has permission
    return {
        statusCode: 200,
        statusMessage: 'Success',
        // real important api response -- this is filler data while i work out the frontend
        serverID: 1,
        commands: [
            {
                "name": "ban",
                "displayname": "Ban a user",
                "command": "cmi ban %username% %reason%",
                "input": {
                    "enabled": "true",
                    "username": {
                        "type": "text"
                    },
                    "reason": {
                        "type": "text"
                    }
                }
            },
            {
                "name": "warn",
                "displayname": "Warn a user",
                "command": "cmi warn %USERNAME% %REASON%",
                "input": {
                    "enabled": "true",
                    "USERNAME": {
                        "type": "text"
                    },
                    "REASON": {
                        "type": "text"
                    }
                }
            }
        ]
    }
})