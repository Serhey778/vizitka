import { Skill } from '../../graphql.js';
import { mockProfile } from '../../mockProfile.js';
export class SkillsService {
  findAllByProfileId({
    profileId,
  }: {
    profileId: string;
  }): Skill[] | null | undefined {
    return mockProfile.skills;
  }
}
