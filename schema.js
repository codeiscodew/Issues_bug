const pool = require("./database.js");

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Issue {
    id: ID!
    project: String!
    team: String!
    issue_name: String!
    issue_status: String!
    issue_desc: String!
    assignee: String!
  }

  type Query {
    getIssue(id: ID!): Issue
    getAllIssues: [Issue]
  }

  type Mutation {
    addIssue(
      project: String!
      team: String!
      issue_name: String!
      issue_status: String!
      issue_desc: String!
      assignee: String!
    ): Issue

    updateIssue(
      id: ID!
      issue_name: String
      issue_status: String
      issue_desc: String
      assignee: String
    ): Issue
    deleteIssue(id: ID!): Issue
  }
`;
module.exports = typeDefs;
