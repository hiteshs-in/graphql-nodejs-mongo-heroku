module.exports = async (_, {input}, {models}) => {
    newCalendar = await models.Calendar.create(input);
    return newCalendar;
}