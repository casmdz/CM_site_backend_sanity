export default {
    name:'gallery',
    title:'Gallery',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Image Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'array',
            of: [{type: 'block'}]
        },
        {
            name:'altText',
            title: 'Alternative text',
            type:'string',
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'tags',
            type: 'string',
            title: 'Tag',
            description: 'What would you classify this picture as?',
            options: {
              list: [
                { title: 'Portrait/ Persons', value: 'portrait' },
                { title: 'Classroom', value: 'classroom' },
                { title: 'Event', value: 'event' },
                { title: 'Personal', value: 'personal' },
              ],
              layout: 'radio', // <-- defaults to 'dropdown'
            },
          },
    ]
}

// inspiration and credit https://www.sanity.io/schemas/image-gallery-dea386ba