/**
 * @copyright ActiveMedia Solutions LLC
 * @link http://activemedia.uz
 * @author Rustam Mamadaminov <rmamdaminov@gmail.com>.
 */
import {getCustomRepository} from "typeorm";
import {ProjectRepository} from "../../repository/ProjectRepository";

module.exports = async (params: any) => {
    try {
        return await getCustomRepository(ProjectRepository).find(params);
    } catch (error) {
        return Promise.reject({message: error.message});
    }
};