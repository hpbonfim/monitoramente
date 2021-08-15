import API from '../core'

process.once('SIGUSR2', () =>
    API.closeDatabaseConnection('nodemon restart', () =>
        process.kill(process.pid, 'SIGUSR2')
    ))

process.on('SIGINT', () =>
    API.closeDatabaseConnection(console.log("\x1b[34m", "'Close connection... "), () =>
        process.exit(0)
    ))

API.APP.listen(process.env.PORT, () => console.log("\x1b[34m%s\x1b[0m", `Server running: ${process.env.PORT}`))