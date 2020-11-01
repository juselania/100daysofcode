const database = require('./db')
const createProffy = require('./createProffy')

database.then( async (db) => {
    // Inserindo dados

    proffyValue = {
        name: 'Tiago Luchtenberg',
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQHfarmcSLlWtA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=kp57Leis9izzzuJRa0Kfu-nsz_mW1RNnO0wWtQCbG-s",
        whatsapp: "895874569",
        bio: 'As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido. Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.'
    }

    classValue = {
        subject: 5,
        cost: "50",
    }

    classScheduleValues = [
        {
            weekday: [2],
            time_from: [680],
            time_to: [1200]
        },
        {
            weekday: [0],
            time_from: [520],
            time_to: [1220]
        }
    ]

    //await createProffy(db, {proffyValue, classScheduleValues, classValue})

    // Consultar dados inseridos

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectedClassesAndProffys)

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectedClassesSchedules)
})

