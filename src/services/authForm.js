async function registersAccount (email, password) {
    try {const response = await fetch("https://api.xwear.antoxer.ru/api/users/register/", {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const textResponse = await response.text();
        throw new Error(textResponse || "Ошибка регистрации");
    }

    return true
}catch(err) {
    console.error(err.message);
    return false
}
}

async function login (username, password) {
    try {const response = await fetch("https://api.xwear.antoxer.ru/api/users/login/", {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const textResponse = await response.text();
        throw new Error(textResponse || "Ошибка регистрации");
    }else {
        console.log('Авторизация прошла успешно')
    }

    return true
}catch(err) {
    throw err;
}
}

export {registersAccount, login};
