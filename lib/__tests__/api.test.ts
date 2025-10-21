import { getPosts, getPost, getUsers, getUserFriends } from '../api';

// Mock fetch globally
const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

describe('API Functions', () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  describe('getPosts', () => {
    it('should fetch posts successfully with default parameters', async () => {
      const mockResponse = {
        data: [
          { id: 'p1', title: 'Test Post', content: 'Test content' }
        ],
        totalPages: 1
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const result = await getPosts();

      expect(mockFetch).toHaveBeenCalledWith(
        '/api/posts?page=1&limit=5',
        expect.objectContaining({
          next: { revalidate: 30, tags: ['posts'] }
        })
      );
      expect(result).toEqual(mockResponse);
    });

    it('should handle custom page and limit parameters', async () => {
      const mockResponse = { data: [], totalPages: 0 };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await getPosts(2, 10);

      expect(mockFetch).toHaveBeenCalledWith(
        '/api/posts?page=2&limit=10',
        expect.any(Object)
      );
    });

    it('should throw error when fetch fails', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
      } as Response);

      await expect(getPosts()).rejects.toThrow('Failed to fetch posts');
    });
  });

  describe('getPost', () => {
    it('should fetch a single post by id', async () => {
      const mockPost = { id: 'p1', title: 'Test Post', content: 'Test content' };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockPost,
      } as Response);

      const result = await getPost('p1');

      expect(mockFetch).toHaveBeenCalledWith(
        '/api/posts/p1',
        expect.objectContaining({
          next: { revalidate: 60, tags: ['posts'] }
        })
      );
      expect(result).toEqual(mockPost);
    });

    it('should throw error when post not found', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
      } as Response);

      await expect(getPost('invalid-id')).rejects.toThrow('Failed to fetch post');
    });
  });

  describe('getUsers', () => {
    it('should fetch users successfully', async () => {
      const mockUsers = [
        { id: 'u1', name: 'John Doe', role: 'Traveler' }
      ];

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockUsers,
      } as Response);

      const result = await getUsers();

      expect(mockFetch).toHaveBeenCalledWith(
        '/api/users',
        expect.objectContaining({
          next: { revalidate: 60 }
        })
      );
      expect(result).toEqual(mockUsers);
    });
  });

  describe('getUserFriends', () => {
    it('should fetch user friends successfully', async () => {
      const mockFriends = [
        { id: 'u2', name: 'Jane Doe', role: 'Host' }
      ];

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockFriends,
      } as Response);

      const result = await getUserFriends('u1');

      expect(mockFetch).toHaveBeenCalledWith(
        '/api/users/u1/friends',
        expect.objectContaining({
          cache: 'no-store'
        })
      );
      expect(result).toEqual(mockFriends);
    });
  });
});
