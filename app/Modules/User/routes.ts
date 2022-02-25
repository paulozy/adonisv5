/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('users', 'UserController').middleware({
    index: ['auth'],
    show: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
  })

  // Route.post('users', 'UserController.store')
  // Route.get('users', 'UserController.index')
  // Route.get('users/:id?', 'UserController.show') //.where('id', /^[0-9]+$/)
  // Route.put('users/:id', 'UserController.update')
  // Route.delete('users/:id', 'UserController.destroy')
})
