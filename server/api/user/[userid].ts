export default defineEventHandler((event) => {
    const userid = parseInt(event.context.params.userid) as number
    if (!Number.isInteger(userid)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'User ID should be an integer',
        })
    }
    // check if user is real
    // check if user has permission
    return {
        statusCode: 200,
        statusMessage: 'Success',
        // real important api response -- this is filler data while i work out the frontend
        id: 1,
        name: 'blueb',
        avatar: 'https://api.orchidmc.me/v2/discord/avatar/403390454273409028',
    }
})