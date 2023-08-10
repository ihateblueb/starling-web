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
    if (serverid === 0) {
        return {
            statusCode: 200,
            statusMessage: 'Success',
            // real important api response -- this is filler data while i work out the frontend
            serverID: 0,
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
                    "command": "cmi warn %username% %reason% %silent%",
                    "input": {
                        "username": {
                            "type": "text"
                        },
                        "reason": {
                            "type": "text"
                        },
                        "silent": {
                            "type": "toggle"
                        }
                    }
                }
            ]
        }
    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'A server by this id could not be found',
        })
    }
    
})