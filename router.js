const gameRouter = require('./routers/game')
const router = require('express').Router()
const Players = require('./models/Player')
// const Games = require('./models/Game')


// Routes
router.use('/games', gameRouter)

// Redirection
router.all('/', (req, res, next) => {
    res.format({
        html : () => {
            res.redirect(301, '/games')
        },
        json : () => {
            res.status(406).send('API_NOT_AVAILABLE')
        }
    })
})
router.get('/players', (req, res, next) => {
    Players.getPlayers()
    .then((Players) => { 
        res.format({
            html: () => {
              let content = '<table class="table"><tr><th>ID</th><th>Name</th><th>Email</th></tr>'
              Object.values(Players).forEach((Players) => {
                content += '<tr>'
                content += '<td>' + Players['id'] + '</td>'
                content += '<td>' + Players['name'] + '</td>'
                content += '<td>' + Players['email'] + '</td>'
                content += '<td> <form action="/players/'+Players['id']+'/?_method=GET", method="GET"> <button type="submit" class="btn btn-success"><i class="fa fa-pencil fa-lg mr-2"></i>Edit</button> </form> </td>'
                content += '<td> <form action="/players/delete/'+Players['id']+'/?_method=POST", method="POST"> <button type="submit" class="btn btn-danger"><i class="fa fa-trash-o fa-lg mr-2"></i>Remove</button> </form> </td>'
                content += '</tr>'
              })
              content += '</table>'
              res.render("players", {
                  content: content
              })
            },
            json: () => {
                res.json(Players)
            }
          })
        }).catch((err) => {
        console.log(err)
        return next(err)
    })
})

router.post('/players/add', (req, res, next) => {
    Players.insertPlayers(req.body)
    res.format({
        html : () => {
            res.redirect(301, '/players')
        },
        json : () => {
            res.status(406).send('API_NOT_AVAILABLE')
        }
    })
})

// router.post('/players/delete/{id}', (req, res, next) => {
//     Players.deletePlayers(req.body)
//     res.format({
//         html : () => {
//             res.redirect(301, '/players')
//         },
//         json : () => {
//             res.status(406).send('API_NOT_AVAILABLE')
//         }
//     })
// })
// Gestion des erreurs
router.use((err, req, res, next) => {
    res.format({
        html: () => {
            res.render('error', {
                error: err
            })
        },
        json : () => {
            res.status(404).json(err)
        }
    })
})

// const router = require('express').Router()
// const gameRouter = require('./routers/game.js')

// router.use('/players', gameRouter)
// router.use('/players/new', gameRouter)
// router.use('/players/{id}', gameRouter)
// router.use('/players/{id}/edit', gameRouter)
// router.use('/games', gameRouter)
// router.use('/games/new', gameRouter)
// router.use('/games/{id}', gameRouter)
// router.use('/games/{id}/edit', gameRouter)
// router.use('/games/{id}/players', gameRouter)
// router.use('/games/{id}/shots', gameRouter)

module.exports = router;
