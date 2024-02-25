export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'education',
            title: 'Education',
            type: 'string'
        },
        {
            name: 'institution',
            title: 'Institution',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Type of Edu',
            description: 'write either "Degree" or "Certificate".',
            type: 'string'
        },
    ]
}