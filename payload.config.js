import { buildConfig } from 'payload/config';

export default buildConfig({
  // By default, Payload will boot up normally
  // and you will be provided with a base `User` collection.
  // But, here is where you define how you'd like Payload to work!
  collections: [
    {
      slug: "reviews",
      fields: [
        {
          name: "name",
          type: "text",
          required: true
        },
        {
          name: "review",
          type: "text",
          required: true
        },
        {
          name: "stars",
          type: "number",
          required: true,
          max: 5,
          min: 1
        },
        {
          name: "location",
          type: "text",
          required: true
        },
        {
          name: "date",
          type: "date",
          // defaultValue: '1988-11-05T8:00:00.000+05:00',
          required: true
        }
      ]
    }
  ],
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },

  // GraphQL is included by default at /api/graphql
  graphQL: {
    disablePlaygroundInProduction: true,
  }
});