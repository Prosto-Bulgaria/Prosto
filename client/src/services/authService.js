const baseUrl = "http://localhost:3030";

export const login = async (email, password) =>{ 
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    let result = await res.json();

    if(res.ok){
        return result
    } else {
        throw result
    }
}

export const register = async (username, email, password) => {
    return await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({username, email, password})
    }).then(res => res.json())
}

export const getUser = () => {
    let username = localStorage.getItem('username')

    return username;
}

export const isLoggedIn = () => {
    return Boolean(getUser());
}