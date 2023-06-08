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
        id: 1,
        status: 'online', // options: online, offline
        playerCount: 3,
        players: [
            {
                "name": "BasicBee_",
                "uuid": "9b4b7545-14fa-44f2-9173-de95510ca8a5"
            },
            {
                "name": "Gooop00",
                "uuid": "0de3fece-1528-46df-918b-531b51656a84"
            },
            {
                "name": "Fishb0wlss",
                "uuid": "3c17f61f-36aa-4ec2-b3f7-d9d42aa7a356"
            }
        ]
    }
})