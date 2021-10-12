import { EntityRepository, Repository } from "typeorm";

import { User } from "../../core/models/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export { UserRepository };
