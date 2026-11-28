import { Resolver, ResolveField, Parent, Args, Query } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { ProjectsService } from './projects/projects.service.js';
import { SkillsService } from './skills/skills.service.js';
import { ExperienceService } from './experience/experience.service.js';
import { Profile, Skill } from '../graphql.js';

@Resolver('Profile')
export class ProfileResolver {
  constructor(
    private profileService: ProfileService,
    private skillsService: SkillsService,
    private experienceService: ExperienceService,
    private projectsService: ProjectsService,
  ) {}
  @Query()
  async profile(@Args('profileId') profileId: string) {
    return this.profileService.findOneById(profileId);
  }
  @ResolveField()
  async skills(@Parent() profile: Profile) {
    const { id } = profile;
    return this.skillsService.findAllByProfileId({ profileId: id });
  }
  @ResolveField()
  async experience(@Parent() profile: Profile) {
    const { id } = profile;
    return this.experienceService.findAllByProfileId({ profileId: id });
  }
  @ResolveField()
  async projects(@Parent() profile: Profile) {
    const { id } = profile;
    return this.projectsService.findAllByProfileId({ profileId: id });
  }
}
