export default {
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
      {
        name: 'technology',
        title: 'Technology',
        type: 'string',
      },

      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },

      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      }
     
    ],
  };