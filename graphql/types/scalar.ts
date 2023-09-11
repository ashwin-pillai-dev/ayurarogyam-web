import { scalarType } from 'nexus';
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";

// export const Upload = GraphQLUpload

export const Upload = scalarType({
    name: 'Upload',
    asNexusMethod: 'upload', // This allows Nexus to recognize it as a scalar
    description: 'A file upload',
    parseValue(value) {
      return GraphQLUpload.parseValue(value);
    },
    serialize(value) {
      return GraphQLUpload.serialize(value);
    },
    parseLiteral(ast) {
      return GraphQLUpload.parseLiteral(ast);
    },
  });

  //////

export const File = scalarType({
  name: 'File',
  asNexusMethod: 'file',
  description: 'A custom scalar type for file information',
  serialize(value) {
    // Implement the serialization logic here
    return value; // For simplicity, just return the value as is
  },
  parseValue(value) {
    // Implement the parseValue logic here
    return value; // For simplicity, just return the value as is
  },
  // parseLiteral(ast) {
  //   // Implement the parseLiteral logic here
  //   return ast.value; // For simplicity, just return the AST value
  // },
});

// Export the scalar type as a Nexus method


  

  

  