import { formatDateUTC } from '../helper';

describe('formatDateUTC', () => {
  it('should format a valid ISO date string correctly', () => {
    const isoDate = '2023-12-25T10:30:00.000Z';
    const result = formatDateUTC(isoDate);
    expect(result).toBe('25 Dec 2023');
  });
});
