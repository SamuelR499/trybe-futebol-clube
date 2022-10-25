import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

const teamsService = new TeamsService();

export default class TeamsController {
  public getTeams = async (_req: Request, res: Response) => {
    const teams = await teamsService.getTeams();

    return res.status(200).json(teams);
  };
}
