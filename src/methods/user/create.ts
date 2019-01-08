/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {User} from "../../entity/User";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../../repository/UserRepository";

module.exports = async (user: User) => {
    try {
      const u = await getCustomRepository(UserRepository).save(user);
      return u;
    } catch (e) {
        console.log('Error', e);
        return Promise.reject({message: e.message + '!!'});
    }
};
