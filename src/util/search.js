
// @ts-ignore
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js'

const globalOptions={
    shouldSort:false,
}
const textSearchOption={
    ...globalOptions,
    keys:['title','company']
}
const TagsOption={
    ...globalOptions,
    keys: ['skills']
}
const typeOption={
    ...globalOptions,
    keys: ['type']
}


export async function search(){
    const fuse=new Fuse(['javascript'], TagsOption)
    const res=fuse.search('java script')
    return res
}