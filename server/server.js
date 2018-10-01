const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');

let aboutMessage = "Issue Tracker API v1.0";

const issuesDB = [
  {
    id: 1, status: 'Open', owner: 'Ravan', effort: 5,
    created: new Date('2019-01-15'), due: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
    created: new Date('2019-01-16'), due: new Date('2019-02-01'),
    title: 'Missing bottom border on panel',
  },
];

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    return (ast.kind == 'StringValue') ? new Date(ast.value) : undefined;
  },
});

const resolvers = {
  Query: {
    about: () => aboutMessage,
    issueList,
  },
  Mutation: {
    setAboutMessage,
    issueAdd,
  },
  GraphQLDate,
};

function setAboutMessage(_, {message}) {
  const previousMessage = aboutMessage;
  aboutMessage = message;
  return previousMessage;
}

function issueList() {
  return issuesDB;
}

function issueAdd(_, {issue}) {
  const invalidArgs = {};
  if (issue.title.length < 3) {
    invalidArgs['title'] = 'Must be at least 3 characters long';
  }
  if (issue.status == 'Assigned' && !issue.owner) {
    invalidArgs['owner'] = 'Must have an owner when status is Assigned';
  }
  if (Object.keys(invalidArgs).length > 0) {
    throw new UserInputError('Invalid input(s)', invalidArgs);
  }
  issue.created = new Date();
  issue.id = issuesDB.length + 1;
  if (issue.status == undefined) issue.status = 'New';
  issuesDB.push(issue);
  return issue;
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({app, path: '/graphql'});

app.listen(3000, function () {
  console.log('App started on port 3000');
});
