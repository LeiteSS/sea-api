import { getRepository } from "typeorm";

import AppError from "../../shared/error/AppError";
import { User } from "../entity/User";
import { Goal } from "../entity/Goal";

export default class GoalService {
  async newGoal(goal: Goal, user: Partial<User>) {
    const goalRepository = getRepository(Goal);
    const userRepository = getRepository(User);
    const currentUser = await userRepository.findOne({ where: { id: user.id } });

    const createdData = {
      ...goal,
      createdAt: new Date(),
      user: currentUser as User
    }

    const goalSaved = await goalRepository.save(createdData);
    
    return goalSaved
  }

  async updateGoal(goal: Goal, goalId: number) {
    const goalRepository = getRepository(Goal);
    const goalFound = await goalRepository.findOne({ where: { id: goalId.toString() }});

    if (!goalFound) {
      throw new AppError('Meta non existiss', 401);
    }

    goalFound.status = goal.status;
    goalFound.title = goal.title;
    goalFound.description = goal.description;
    goalFound.deadline = goal.deadline;
    goalFound.updateAt = new Date();

    await goalRepository.save(goalFound);

    return { mag: 'Meta salva com sucesso' }
  }

  async allGoals(user: Partial<User>) {
    const goalRepository = getRepository(Goal);

    const goalsFound = await goalRepository.find({ where: user});

    return goalsFound;
  }
}