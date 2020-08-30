module.exports = async (_, {id}, {models}) => {
    const deleteCalendar = await models.Calendar.deleteOne({_id: id});

    return { id: id };
}