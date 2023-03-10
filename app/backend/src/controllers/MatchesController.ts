import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

const matchService = new MatchesService();

export default class TeamsController {
  public getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (inProgress) {
      const matches = await matchService.getMatchesByProgress(inProgress as string);
      return res.status(200).json(matches);
    }

    const matches = await matchService.getMatches();
    return res.status(200).json(matches);
  };

  public createMatch = async (req: Request, res: Response) => {
    const match = await matchService.createMatch(req.body);
    return res.status(201).json(match);
  };

  public uptdateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;

    await matchService.uptdateMatch(id);

    return res.status(200).json({ message: 'Finished' });
  };

  public uptdateScoreboard = async (req: Request, res: Response) => {
    const { id } = req.params;

    await matchService.uptdateScoreboard(id, req.body);

    return res.status(200).json({ message: 'successfully changed' });
  };
}
