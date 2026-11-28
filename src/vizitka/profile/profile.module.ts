import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';
import { ExperienceModule } from './experience/experiense.module.js';
import { ProjectsModule } from './projects/projects.module.js';
import { SkillsModule } from './skills/skills.module.js';

@Module({
  imports: [ExperienceModule, ProjectsModule, SkillsModule],
  providers: [ProfileService, ProfileResolver],
})
export class ProfileModule {}
