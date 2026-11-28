import { Project } from '../../graphql.js';
import { mockProfile } from '../../mockProfile.js';

export class ProjectsService {
  findAllByProfileId({
    profileId,
  }: {
    profileId: string;
  }): Project[] | null | undefined {
    return mockProfile.projects;
  }
}
