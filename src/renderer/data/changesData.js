const changesData = {
  storyId: "US-101",
  featureTitle: "User Authentication and Authorization",
  featureDescription:
    "As a user, I want to securely log in and out of the application...",
  context:
    "This module handles user authentication and authorization processes for the application. It...",
  codeContent: `// Imports
  import mongoose, { Schema } from 'mongoose'
  
  // Collection name
  export const collection = 'Product'
  
  // Schema
  const schema = new Schema({
      name: {
          type: String,
          required: true
      },
      description: {
          type: String
      }
  }, {timestamps: true})
  
  // Model
  export default mongoose.model(collection, schema,
  collection)`,
};

export default changesData;
