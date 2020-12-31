var request = require('request');
    module.exports = {
        async generate (req, res) {        
            const colors = {
                normal:'A8A77A',
                fire:'EE8130',
                water:'6390F0',
                electric:'F7D02C',
                grass:'7AC74C',
                ice:'96D9D6',
                fighting:'C22E28',
                poison:'A33EA1',
                ground:'E2BF65',
                flying:'A98FF3',
                psychic:'F95587',
                bug:'A6B91A',
                rock:'B6A136',
                ghost:'735797',
                dragon:'6F35FC',
                dark:'705746',
                steel:'B7B7CE',
                fairy:'D685AD'
                }
            
            const maxPoke = 898; // define o valor maximo dos numeros gerados
        
            const number = Math.floor(Math.random() * maxPoke); // gera o numero aleatorio
            
            request(`https://pokeapi.co/api/v2/pokemon/${number}`,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                const nome = data.name;
                const sprite = data.sprites.front_default;
                const tipo = data.types; //tipo[].type.name
                const formPoke1 = {
                    nome: nome,
                    sprite: sprite,
                    tipo: tipo[0].type.name,
                }
                
                const color = colors[formPoke1.tipo]

                const formPoke = {
                    nome: nome,
                    sprite: sprite,
                    color: color,
                }

            res.json(formPoke)
            }

        })
    }
}