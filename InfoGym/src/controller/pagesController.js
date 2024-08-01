
function PagesView(req, res) {
    res.render("faixaEtaria.html");
}

function VerificarIdade(req, res){
    let idade = req.body.age;
    if (idade === 'under_18'){
        console.log("TESTE 1");
    }
    else if(idade === '18_24'){
        console.log("TESTE 2");
    }
    else if(idade === '25_34'){
        console.log("TESTE 3");
    }
    else if(idade === '35_44'){
        console.log("TESTE 4");
    }
    else if(idade === '45_54'){
        console.log("TESTE 5");
    }
    else if(idade === '55_64'){
        console.log("TESTE 6");
    }
    else if(idade === '65_over'){
        console.log("TESTE 7");
    }
    res.redirect('/faixaEtaria');
}


module.exports = {
    PagesView,
    VerificarIdade
};
