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
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true
        }
      ]
    },
    {
      slug: 'media',
      upload: {
        staticURL: '/media',
        staticDir: 'media',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
      }
    }
  ],
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },

  // GraphQL is included by default at /api/graphql
  graphQL: {
    disablePlaygroundInProduction: false,
  }
});