const { gql } = require('apollo-server');

module.exports = gql`
    type Calendar {
        id: ID!,
        listing_id: ID,
        date: String,
        available: String,
        price: String,
        adjusted_price: String,
        minimum_nights: String,
        maximum_nights: String
    }

    type Query {
        calendars: [Calendar] 
    }

    input CreateCalendarInput {
        listing_id: ID!,
        date: String!,
        available: String!,
        price: String!,
        adjusted_price: String!,
        minimum_nights: String!,
        maximum_nights: String!
    }

    input UpdateCalendarInput {
        listing_id: ID,
        date: String,
        available: String,
        price: String,
        adjusted_price: String,
        minimum_nights: String,
        maximum_nights: String
    }

    type DeletePayload {
        id: ID!
    }

    type Mutation {
        createCalendar(input: CreateCalendarInput!): Calendar!
        updateCalendar(id: ID, input: UpdateCalendarInput!): Calendar!
        deleteCalendar(id: ID): DeletePayload!
    }
`;