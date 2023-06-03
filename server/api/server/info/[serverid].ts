export default defineEventHandler((event) => {
    const serverid = parseInt(event.context.params.serverid) as number
    if (!Number.isInteger(serverid)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Server ID should be an integer',
        })
    }
    return {
        statusCode: 200,
        statusMessage: 'Success',
        // real important api response
        serverName: 'Orchid',
        serverID: 1,
        players: {
            count: 3,
            BasicBee_: {
                "name": "BasicBee_",
                "uuid": "9b4b7545-14fa-44f2-9173-de95510ca8a5"
            },
            Goooop00: {
                "name": "Gooop00",
                "uuid": "0de3fece-1528-46df-918b-531b51656a84"
            },
            Fishb0wlss: {
                "name": "Fishb0wlss",
                "uuid": "3c17f61f-36aa-4ec2-b3f7-d9d42aa7a356"
            }
        }
    }
})