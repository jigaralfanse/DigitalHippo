import next from "next"

const PORT = Number(process.env.PORT) || 3000


// for self host nest js ..... by doing this we made our application independent to the vercal; like plateforms
export const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
    port: PORT
})

export const nextHandler = nextApp.getRequestHandler()