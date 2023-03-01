let answer = prompt('Кто там?', '');


if(answer === null || answer === ''){
    console.log('Отменено');
}else if(answer ===  'Админ'){
    let password = prompt('Пароль?');

    if(password === null || password === ''){
        console.log('Отменено');
    }else if(password === 'Я Главный'){
        console.log('Здравствуйте');
    }else{
        console.log('Неверный пароль');
    }
}else{
    console.log('Я вас не знаю');
}
