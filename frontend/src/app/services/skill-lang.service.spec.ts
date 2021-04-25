import { TestBed } from '@angular/core/testing';

import { SkillLangService } from './skill-lang.service';

describe('SkillLangService', () => {
  let service: SkillLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
