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
    if (userid === 0) {
        return {
            statusCode: 200,
            statusMessage: 'Success',
            // real important api response -- this is filler data while i work out the frontend
            id: 0,
            servers: [{id: 0}, {id: 1}],
        }
    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'A user by this id could not be found',
        })
    }
})