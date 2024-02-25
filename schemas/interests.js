export default {
    name: 'interests',
    title: 'Interests',
    type: 'document',
    fields: [
        {
            name: 'interest',
            title: 'Interest',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}