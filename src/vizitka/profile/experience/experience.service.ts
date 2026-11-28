import { Experience } from '../../graphql.js';
import { mockProfile } from '../../mockProfile.js';
export class ExperienceService {
  findAllByProfileId({
    profileId,
  }: {
    profileId: string;
  }): Experience[] | null | undefined {
    return mockProfile.experience;
  }
}
