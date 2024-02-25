export default {
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
        {
            title:'linkedin URL',
            name:'LinkedInUrl',
            type:'url',
        },
        {
            title:'Email',
            name:'email',
            type:'string',
        },
        {
            title:'Resume PDF',
            name:'resumePdf',
            description: 'In order to download a file from your front-end you need to append ?dl=<filename-of-your-choice.pdf> to the file URL. If you leave the filename blank, the original filename will be used if present. If the original filename is not available, the id of the file will be used instead. https://www.sanity.io/docs/file-type#56c56d68424b',
            type:'file',
        },
        {
            title:'References',
            name:'referencesPdf',
            type:'file',
        },
    ]
}