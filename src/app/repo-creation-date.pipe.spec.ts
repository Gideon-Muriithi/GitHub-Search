import { RepoCreationDatePipe } from './repo-creation-date.pipe';

describe('RepoCreationDatePipe', () => {
  it('create an instance', () => {
    const pipe = new RepoCreationDatePipe();
    expect(pipe).toBeTruthy();
  });
});
