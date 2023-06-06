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
        // real important api response
        serverID: 1,
        commands: {
            "ban": {
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
            "warn": {
                "command": "cmi warn %username% %reason%",
                "input": {
                    "enabled": "true",
                    "username": {
                        "type": "text"
                    },
                    "reason": {
                        "type": "text"
                    }
                }
            }
        }
    }
})