const baseUrl = "http://localhost:3030";

export const getAll = async () => {
    let res = await fetch(`${baseUrl}/courses/`)

    let courses = await res.json();

    return courses;
}

export const create = async (title, description, imageUrl) => {
    let res = await fetch(`${baseUrl}/courses/`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, description, imageUrl})
    })

    let result = await res.json();

    if(res.ok){
        return result
    } else {
        throw result
    }
}