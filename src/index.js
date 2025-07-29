
export const getQuestions = async (themes) => {
    const queryThemes = themes.split(',').join('&themes=');
    const openQuestions = []
    const closedQuestions = []

    const response = await fetch(`http://148.206.168.178/vaep/api/v1/question/theme?themes=${queryThemes}`)
    const data = await response.json()

    data.data.forEach(theme => {
        theme.openQuestions.forEach(question => {
            openQuestions.push({
                tipo: 'pregunta-respuesta',
                pregunta: question.question,
                respuesta: question.answer,
            })
        })

        theme.multipleChoiceQuestions.forEach(question => {
            closedQuestions.push({
                tipo: 'opcion-multiple',
                pregunta: question.question,
                opciones: question.answers,
                respuestaCorrecta: question.correctAnswer,
            })
        })
    })

    return [ openQuestions, closedQuestions ]
}