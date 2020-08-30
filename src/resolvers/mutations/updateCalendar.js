module.exports = async (_, {id, input}, {models}) => {
    const calendarToUpdate = await models.Calendar.findOne({_id: id});

    Object.keys(input).forEach(value => {
        calendarToUpdate[value] = input[value];
    });

    const updatedCalendar = await calendarToUpdate.save();
    return updatedCalendar;
}