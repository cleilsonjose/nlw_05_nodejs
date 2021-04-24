import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService{
  async create(email:string) {
    const usersRepository = getCustomRepository(UsersRepository);
    //verificar se o usario existe
    const userExiste = await usersRepository.findOne({email})
    // caso exista, retornar o usuario
    if(userExiste) {
      return userExiste;
    }
    // se não existir, salvar no bd
    const user = usersRepository.create({
      email
    });

    await usersRepository.save(user);

    return user;
  }
}

export{UsersService}