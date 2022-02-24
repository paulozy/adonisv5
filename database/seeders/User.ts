import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    const uniqueKey = 'eMail'

    await User.updateOrCreateMany(uniqueKey, [
      {
        eMail: 'virk@adonisjs.com',
        password: 'virk',
      },
      {
        eMail: 'romain@adonisjs.com',
        password: 'romain',
      },
      {
        eMail: 'manoel@adonisjs.com',
        password: 'manoel',
      },
      {
        eMail: 'micaele@adonisjs.com',
        password: 'micaele',
      },
    ])
  }
}
