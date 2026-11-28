import { Profile } from '../graphql.js';
import { mockProfile } from '../mockProfile.js';

export class ProfileService {
  findOneById(profileId: string): Profile {
    return mockProfile;
  }
}
